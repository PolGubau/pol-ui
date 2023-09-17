import { render, screen } from "@testing-library/react";
import Text from "../Text";

const enum TestTexts {
	TEXT = "Text Sample For testing",
}
describe("Text Component", () => {
	test("Displays correctly it's value", () => {
		render(<Text value={TestTexts.TEXT} />);
		const heading = screen.getByText(TestTexts.TEXT);
		expect(heading).toBeInTheDocument();
	});
	test("The value returned is a a JSX.Element, not an string", () => {
		render(<Text value={TestTexts.TEXT} />);
		const heading = screen.getByText(TestTexts.TEXT);
		expect(heading).not.toBeInstanceOf(String);
	});

	// Truncate
	test("Truncates correctly", () => {
		render(<Text value={TestTexts.TEXT} maxLength={6} />);
		const text = screen.getByText("Text S...");
		expect(text).toBeInTheDocument();
	});
	test("Only truncates when maxLength is shorter than the sent value", () => {
		render(<Text value={TestTexts.TEXT} maxLength={100} />);
		const text = screen.getByText(TestTexts.TEXT);
		expect(text).toBeInTheDocument();
	});

	// Markdown and headers

	test("Displays Markdown correctly", () => {
		render(<Text value="**Bold**" isMarkdown />);
		const text = screen.getByText("Bold");
		expect(text).toBeInTheDocument();
	});
	test("If its a header and markdow, it will be displayes as a markdown as well", () => {
		render(<Text value="**Bold**" isMarkdown size={1} />);
		const text = screen.getByText("Bold");
		expect(text).toBeInTheDocument();
		expect(text.tagName).toBe("STRONG");
	});

	[1, 2, 3, 4, 5, 6].forEach((size) => {
		test(`Displays as h${size} if size is ${size}`, () => {
			render(<Text value={TestTexts.TEXT} size={size} />);
			const text = screen.getByText(TestTexts.TEXT);
			expect(text.tagName).toBe(`H${size}`);
		});
		test(`Displays as markdown if size is ${size}and they have markdown`, () => {
			render(<Text value={TestTexts.TEXT} isMarkdown size={size} />);
			const text = screen.getByText(TestTexts.TEXT);
			expect(text.tagName).toBe(`SPAN`);
		});
	});
	test("Displays as p if size is not specified", () => {
		render(<Text value={TestTexts.TEXT} />);
		const text = screen.getByText(TestTexts.TEXT);
		expect(text.tagName).toBe("P");
	});
	test("Displays as p if size is not a valid number", () => {
		render(<Text value={TestTexts.TEXT} size={7} />);
		const text = screen.getByText(TestTexts.TEXT);
		expect(text.tagName).toBe("P");
	});

	test("If isBold prop is false, the text is displayed as normal and should not have font-bold class", () => {
		render(<Text value={TestTexts.TEXT}  />);
		const text = screen.getByRole("text");
		expect(text).not.toHaveClass("font-bold");
	});
	test("If isItalic prop is true, the text is displayed as italic and should have italic class", () => {
		render(<Text value={TestTexts.TEXT} isItalic={true} />);
		const text = screen.getByRole("text");
		expect(text).toHaveClass("italic");
	});
	test("If isItalic prop is false, the text is displayed as normal and should not have italic class", () => {
		render(<Text value={TestTexts.TEXT} isItalic={false} />);
		const text = screen.getByRole("text");
		expect(text).not.toHaveClass("italic");
	});
});
