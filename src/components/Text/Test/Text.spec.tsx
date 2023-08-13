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

	test("Truncates correctly", () => {
		render(<Text value={TestTexts.TEXT} maxLength={6} />);
		const text = screen.getByText("Text S...");
		expect(text).toBeInTheDocument();
	});
	test("Displays Markdown correctly", () => {
		render(<Text value="**Bold**" isMarkdown />);
		const text = screen.getByText("Bold");
		expect(text).toBeInTheDocument();
	});
	[1, 2, 3, 4, 5, 6].forEach((size) => {
		test(`Displays as h${size} if size is ${size}`, () => {
			render(<Text value={TestTexts.TEXT} size={size} />);
			const text = screen.getByText(TestTexts.TEXT);
			expect(text.tagName).toBe(`H${size}`);
		});
	});
	test("Displays as p if size is not specified", () => {
		render(<Text value={TestTexts.TEXT} />);
		const text = screen.getByText(TestTexts.TEXT);
		expect(text.tagName).toBe("P");
	});
});
