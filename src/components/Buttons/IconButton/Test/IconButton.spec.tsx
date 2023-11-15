import { render, screen } from "@testing-library/react";
import IconButton from "../IconButton";

const icon = "check";
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
		render(<IconButton icon={icon} />);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});
});
