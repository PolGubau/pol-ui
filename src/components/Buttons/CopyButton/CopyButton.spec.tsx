import { render, screen } from "@testing-library/react";
import CopyButton from "./CopyButton";

describe("CopyButton", () => {
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
	it("renders the text value", () => {
		render(<CopyButton value="Hello, world!" valueToCopy="a" />);
		expect(screen.getByText("Hello, world!")).toBeInTheDocument();
	});

	it("renders the valueToCopy if no text value is provided", () => {
		render(<CopyButton valueToCopy="123" />);
		expect(screen.getByText("123")).toBeInTheDocument();
	});
});
