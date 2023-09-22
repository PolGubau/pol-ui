import { act, render, screen } from "@testing-library/react";
import { Switch } from "../Switch";

const enum Texts {
	TEXT = "Text Sample For testing",
}
describe("Switch Component", () => {
	test("Displays correctly it's label", () => {
		render(<Switch label={Texts.TEXT} />);
		const heading = screen.getByText(Texts.TEXT);
		// Has the label
		expect(heading).toBeInTheDocument();

		// By default it's not checked
		const input = screen.getByRole("switch");
		expect(input).not.toBeChecked();

		// By default it's not disabled
		expect(input).not.toBeDisabled();
	});

	test("You can disable it via props", () => {
		render(<Switch disabled />);
		const input = screen.getByRole("switch");
		expect(input).toBeDisabled();
	});
	test("You can set it to checked via props", () => {
		render(<Switch checked onChange={() => {}} />);
		const input = screen.getByRole("switch");
		expect(input).toBeChecked();
	});
	test("You can set false to checked via props", () => {
		render(<Switch checked={false} onChange={() => {}} />);
		const input = screen.getByRole("switch");
		expect(input).not.toBeChecked();
	});

	test("You can set it to small via props", () => {
		render(<Switch size="small" />);
		const input = screen.getByRole("switch");
		expect(input).toHaveClass("w-9");
	});
	test("You can set it to large via props", () => {
		render(<Switch size="large" />);
		const input = screen.getByRole("switch");
		expect(input).toHaveClass("w-12");
	});
	test("By default it is normal size", () => {
		render(<Switch />);
		const input = screen.getByRole("switch");
		expect(input).toHaveClass("w-10");
	});
	test("If label is not specified, it will not be rendered", () => {
		render(<Switch />);
		const input = screen.queryByRole("heading");
		expect(input).not.toBeInTheDocument();
	});
	test("If we pass an error, label will be red", () => {
		render(<Switch label="label" error="Oups" />);
		const input = screen.getByRole("heading");
		expect(input).toHaveClass("text-danger");
	});
	test("If an error is passed, we will render the error message", () => {
		render(<Switch label="label" error="Oups" />);
		const input = screen.getByText("(Oups)");
		expect(input).toBeInTheDocument();
	});

	test("ClassNames are applyed to the container", () => {
		render(<Switch className="test" />);
		const input = screen.getByRole("switch");
		expect(input).toHaveClass("test");
	});

	test("If we click the switch, we will trigger a function", () => {
		const mockFn = jest.fn();
		render(<Switch checked={false} onChange={mockFn} />);
		const input = screen.getByRole("switch");
		act(() => {
			input.click();
		});
		expect(mockFn).toHaveBeenCalled();
	});
});
