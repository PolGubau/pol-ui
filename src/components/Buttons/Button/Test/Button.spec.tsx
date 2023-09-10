import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";
import { ApplyCenteredOutput } from "../../../../style";

const enum Texts {
	TEXT = "Text Sample For testing",
}
describe("Button Component", () => {
	test("Displays correctly it's value", () => {
		render(<Button>{Texts.TEXT}</Button>);
		const heading = screen.getByText(Texts.TEXT);
		expect(heading).toBeInTheDocument();
	});
	test("Button is clickable", () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});

	test("If button is disabled, it has opacity-50 cursor-not-allowed classes", () => {
		render(<Button disabled>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
		expect(button).toHaveClass("opacity-50 cursor-not-allowed");
	});

	test("Button is not disabled", () => {
		render(<Button onClick={() => {}}>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).not.toBeDisabled();
	});
	test("If no OnClick is passed, it should be disabled as well", () => {
		render(<Button>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
	});
	test("Button is not disabled if onClick is passed", () => {
		render(<Button onClick={() => {}}>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).not.toBeDisabled();
	});

	test('Rounded sm button should have "rounded-xl"  class', () => {
		render(
			<Button rounded="xl" size="sm">
				{Texts.TEXT}
			</Button>
		);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("rounded-2xl");
	});
	test("Rounded prop is default to true", () => {
		render(<Button size="sm">{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("rounded-xl");
	});
	test('If Rouded Prop is none, it should not have "rounded-xl" or "rounded-lg" class', () => {
		render(<Button rounded={"none"}>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).not.toHaveClass("rounded-xl");
	});
	test("If Rouded Prop is none, it should have 'rounded-none' class", () => {
		render(<Button rounded={"none"}>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("rounded-none");
	});
	test("When clicking the button, we call a function", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	});
	test("If button is disabled, should have opacity-50 class", () => {
		render(<Button disabled>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("opacity-50");
	});
	test("If button has an id prop, apply it", () => {
		render(<Button id="test">{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("id", "test");
	});
	test("You can apply custom classNames", () => {
		render(<Button className="test">{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("test");
	});

	// Centered

	test("If centered prop is true, should have justify-center text-center classes", () => {
		render(<Button centered>{Texts.TEXT}</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass(ApplyCenteredOutput.true);
	});
});
