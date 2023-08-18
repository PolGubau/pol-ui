import { render, screen } from "@testing-library/react";
import Button from "../Button";

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
		const button = screen.getByText(Texts.TEXT);
		button.click();
		expect(onClick).toHaveBeenCalled();
	});

	test("If button is disabled, it has opacity-50 cursor-not-allowed classes", () => {
		render(<Button disabled>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
		expect(button).toHaveClass("opacity-50 cursor-not-allowed");
	});

	test("Button is not disabled", () => {
		render(<Button onClick={() => {}}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toBeDisabled();
	});
	test("If no OnClick is passed, it should be disabled as well", () => {
		render(<Button>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
	});
	test("Button is not disabled if onClick is passed", () => {
		render(<Button onClick={() => {}}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toBeDisabled();
	});

	test('Rounded md button should have "rounded-xl"  class', () => {
		render(
			<Button rounded size="md">
				{Texts.TEXT}
			</Button>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('Rounded large button should have "rounded-xl"  class', () => {
		render(
			<Button rounded size="lg">
				{Texts.TEXT}
			</Button>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('Rounded sm button should have "rounded-xl"  class', () => {
		render(
			<Button rounded size="sm">
				{Texts.TEXT}
			</Button>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test("Rounded prop is default to true", () => {
		render(<Button size="sm">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('If Rouded Prop is false, it should not have "rounded-xl" or "rounded-lg" class', () => {
		render(<Button rounded={false}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toHaveClass("rounded-xl");
	});
	test("If Rouded Prop is false, it should have 'rounded-none' class", () => {
		render(<Button rounded={false}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-none");
	});
	test("When clicking the button, we call a function", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		button.click();
		expect(handleClick).toHaveBeenCalled();
	});
	test("If button is disabled, should have opacity-50 class", () => {
		render(<Button disabled>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("opacity-50");
	});
	test("If button has an id prop, apply it", () => {
		render(<Button id="test">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveAttribute("id", "test");
	});
	test("You can apply custom classNames", () => {
		render(<Button className="test">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("test");
	});

	// Types Tests (main,normal,outlined,text)

	test("If type is main, should have bg-accent and text-primary classes", () => {
		render(<Button type="main">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-accent text-primary");
	});
	test("If type is normal, should have bg-primary/60 and text-white classes", () => {
		render(<Button type="normal">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-primary/60 text-white");
	});
	test("If type is outlined, should have bg-white text-primary   ring-1 ring-primary classes", () => {
		render(<Button type="outlined">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-white text-primary ring-1 ring-primary");
	});
	test("If type is text, should have bg-transparent and text-primary classes", () => {
		render(<Button type="text">{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-transparent text-primary");
	});
});
