import { render, fireEvent, screen } from "@testing-library/react";
import { copyToClipboard } from "../../../utils";
import CopyButton from "./CopyButton";

// Mocking copyToClipboard function
jest.mock("../../../utils", () => ({
	copyToClipboard: jest.fn(),
}));

describe("CopyButton component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders text correctly", () => {
		render(<CopyButton valueToCopy="Hello" />);
		const buttonText = screen.getByText("Hello");
		expect(buttonText).toBeInTheDocument();
	});

	it("copies string value to clipboard and shows check icon when clicked", () => {
		render(<CopyButton valueToCopy="Hello" />);
		const button = screen.getByText("Hello");

		fireEvent.click(button);

		expect(copyToClipboard).toHaveBeenCalledWith("Hello");
		const checkIcon = screen.getByTestId("check-icon");
		expect(checkIcon).toBeInTheDocument();
	});

	it("copies object value to clipboard and shows check icon when clicked", () => {
		const valueToCopy = { key: "value" };
		render(<CopyButton valueToCopy={valueToCopy} />);
		const button = screen.getByTestId("copy-button");

		fireEvent.click(button);
		expect(copyToClipboard).toHaveBeenCalledWith(JSON.stringify(valueToCopy));
		const checkIcon = screen.getByTestId("check-icon");
		expect(checkIcon).toBeInTheDocument();
	});

	it("shows confetti and check icon when copied", () => {
		render(<CopyButton valueToCopy="Hello" hasConfetti={true} />);
		const button = screen.getByTestId("copy-button");

		fireEvent.click(button);
		const confetti = screen.getByTestId("confetti");
		const checkIcon = screen.getByTestId("check-icon");
		expect(confetti).toBeInTheDocument();
		expect(checkIcon).toBeInTheDocument();
	});

	it("does not show confetti when not copied", () => {
		render(<CopyButton valueToCopy="Hello" hasConfetti={true} />);
		const button = screen.getByTestId("copy-button");

		expect(screen.queryByTestId("confetti")).toBeNull();

		fireEvent.click(button);
		const confetti = screen.getByTestId("confetti");
		expect(confetti).toBeInTheDocument();
	});
	it("if you provide a value, the text in the button will be this value", () => {
		render(<CopyButton valueToCopy="Bye" value="Hello" />);
		const buttonText = screen.getByText("Hello");
		expect(buttonText).toBeInTheDocument();
	});
});
