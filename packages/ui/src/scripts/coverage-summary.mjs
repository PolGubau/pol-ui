import fs from "node:fs";
import path from "node:path";

const coveragePath = path.resolve("./coverage/coverage-summary.json");
const outputPath = path.resolve("./src/tests/coverage.md");

const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

const coverage = JSON.parse(fs.readFileSync(coveragePath, "utf-8"));

if (!coverage) {
	console.error("No coverage report found. Please run tests first.");
	process.exit(1);
}

const { total } = coverage;

const getGrade = (percentage) => {
	// return 🟢, 🟡, 🟠 or 🔴 based on the percentage

	const gradePoints = {
		90: "🟢",
		60: "🟡",
		30: "🟠",
	};
	// if percentage is 100(key) or above, return 🟢(value) and so (if lower than the last one, return 🔴)

	return Object.entries(gradePoints).reduce((grade, [point, value]) => {
		if (percentage >= point) {
			return value;
		}
		return grade;
	}, "🔴");
};
const buildRow = (file, data) => {
	const percentage = Math.round(
		(data.lines.pct + data.branches.pct + data.functions.pct) / 3,
		2,
	);
	return `| ${file}| ${data.branches.pct || 0}% | ${data.functions.pct || 0}% | ${data.lines.pct || 0}% | ${percentage} |${getGrade(percentage)} |`;
};

const mainTable = `
| Metric              | Percentage              | Total      |  Grade  |
|---------------------|------------|----------|--------------------|
| Branches            | ${total.branches.pct}% | ${total.branches.total} |  ${getGrade(total.branches.pct)}  |
| Functions           | ${total.functions.pct}% |   ${total.functions.total} | ${getGrade(total.functions.pct)}  |
| Lines               | ${total.lines.pct}% | ${total.lines.total} | ${getGrade(total.lines.pct)}  |
`;

const title = `# Coverage Report
> This report is generated from vitests unit tests and is updated on every test run.
`;

/**
 *
 * @param {[{
 * 	branches: { pct: number, total: number },
 * 	functions: { pct: number, total: number },
 * 	lines: { pct: number, total: number },
 * 	statements: { pct: number, total: number },
 * }]} data
 */

const dataWithoutTotal = Object.entries(coverage)
	.filter(([file]) => file !== "total") // Filter out the total object
	.sort(([file1], [file2]) => file1.localeCompare(file2)); // Sort by file name
const groupByCategory = (values) => {
	/**
		 * group by category so: 
		 *  ...ex\packages\react-ui\src\components\Tabs\Tabs.tsx
		 *  ...ex\packages\react-ui\src\components\Tabs\theme.ts
		 *  ...ex\packages\react-ui\src\components\TextArea\TextArea.tsx
they all should be under "components" category
		 */
	const categories = {};
	for (const [file, data] of values) {
		// category is the next folder after src
		const pathAfterSrc = file.split("src")[1]; //\components\accordion-ui\accordionContent.tsx

		// the separator is \
		const category = pathAfterSrc.split("\\")[1];
		const rest = pathAfterSrc.split("\\").slice(2).join("\\");
		// components
		if (!categories[category]) {
			categories[category] = [];
		}
		categories[category].push([rest, data]);
	}
	return categories;
};

//
function generateCoveragePage() {
	// we want to create a table for each category (so assets will have their own talbe with totals and so, components will have their own table with totals and so on)...
	// so we need to group the data by category
	const categories = groupByCategory(dataWithoutTotal);

	// we need to create a table for each category and return the array of arrays
	/**
	 *  [
	 * [{name:"components", total: {branches: 0, functions: 0, lines: 0, statements: 0}, data: [[file, data], [file, data]...]}]
	 */
	// const detailedTable = Object.entries(coverage);
	// dataWithoutTotal
	// 	.map(([file, data]) => buildRow(file, data);
	// 	.join("\n");

	const detailedTable = Object.entries(categories).map(([category, data]) => {
		const categoryData = data
			.map(([file, data]) => buildRow(file, data))
			.join("\n");

		const categorySection = `
### ${category}

| File                | Branches | Functions | Lines | Total |Grade |
|---------------------|----------|-----------|-------|-------|-------|
${categoryData}
`;

		return categorySection;
	});

	return [...detailedTable].join("\n");
}

const mdContent = `
${title}

## Summary
${mainTable}

${generateCoveragePage()}
`;

fs.writeFileSync(outputPath, mdContent, "utf-8");
console.info("Coverage page generated at:", outputPath);
