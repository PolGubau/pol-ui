import { render, fireEvent, act } from "@testing-library/react";
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
		const { getByText } = render(<CopyButton valueToCopy="Hello" />);
		const buttonText = getByText("Hello");
		expect(buttonText).toBeInTheDocument();
	});

	it("copies string value to clipboard and shows check icon when clicked", () => {
		const { getByText, getByTestId } = render(<CopyButton valueToCopy="Hello" />);
		const button = getByText("Hello");

		act(() => {
			fireEvent.click(button);
		});

		expect(copyToClipboard).toHaveBeenCalledWith("Hello");
		const checkIcon = getByTestId("check-icon");
		expect(checkIcon).toBeInTheDocument();
	});

	it("copies object value to clipboard and shows check icon when clicked", () => {
		const valueToCopy = { key: "value" };
		const { getByTestId } = render(<CopyButton valueToCopy={valueToCopy} />);
		const button = getByTestId("copy-button");

		act(() => {
			fireEvent.click(button);
		});
		expect(copyToClipboard).toHaveBeenCalledWith(JSON.stringify(valueToCopy));
		const checkIcon = getByTestId("check-icon");
		expect(checkIcon).toBeInTheDocument();
	});

	it("shows confetti and check icon when copied", () => {
		const { getByTestId } = render(<CopyButton valueToCopy="Hello" hasConfetti={true} />);
		const button = getByTestId("copy-button");

		act(() => {
			fireEvent.click(button);
		});
		const confetti = getByTestId("confetti");
		const checkIcon = getByTestId("check-icon");
		expect(confetti).toBeInTheDocument();
		expect(checkIcon).toBeInTheDocument();
	});

	it("does not show confetti when not copied", () => {
		const { getByTestId, queryByTestId } = render(
			<CopyButton valueToCopy="Hello" hasConfetti={true} />
		);
		const button = getByTestId("copy-button");

		expect(queryByTestId("confetti")).toBeNull();

		act(() => {
			fireEvent.click(button);
		});
		const confetti = getByTestId("confetti");
		expect(confetti).toBeInTheDocument();
	});
	it("if you provide a value, the text in the button will be this value", () => {
		const { getByText } = render(<CopyButton valueToCopy="Bye" value="Hello" />);
		const buttonText = getByText("Hello");
		expect(buttonText).toBeInTheDocument();
	});
});
