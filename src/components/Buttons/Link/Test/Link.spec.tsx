import { render, screen } from "@testing-library/react";
import Link from "../Link";

const enum Texts {
	TEXT = "Text Sample For testing",
}
describe("Button Component", () => {
	test("Displays correctly it's value", () => {
		render(<Link href="#">{Texts.TEXT}</Link>);
		const heading = screen.getByText(Texts.TEXT);
		expect(heading).toBeInTheDocument();
	});
});
