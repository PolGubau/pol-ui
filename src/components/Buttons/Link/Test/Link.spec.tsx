import { render, screen } from "@testing-library/react";
import Link from "../Link";

const enum Texts {
	TEXT = "Text Sample For testing",
}
describe("Button Component", () => {
	beforeAll(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});
	test("Displays correctly it's value", () => {
		render(<Link href="#">{Texts.TEXT}</Link>);
		const heading = screen.getByText(Texts.TEXT);
		expect(heading).toBeInTheDocument();
	});
});
