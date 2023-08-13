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
	test("Button is disabled", () => {
		render(<Button disabled>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
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
	test("If has a suffix, it should be displayed", () => {
		render(<Button suffix={<span>suffix</span>}>{Texts.TEXT}</Button>);
		const suffix = screen.getByText("suffix");
		expect(suffix).toBeInTheDocument();
	});
	test("If has a prefix, it should be displayed", () => {
		render(<Button prefix={<span>prefix</span>}>{Texts.TEXT}</Button>);
		const prefix = screen.getByText("prefix");
		expect(prefix).toBeInTheDocument();
	});
	test("If has a prefix and suffix, it should be displayed", () => {
		render(
			<Button prefix={<span>prefix</span>} suffix={<span>suffix</span>}>
				{Texts.TEXT}
			</Button>
		);
		const prefix = screen.getByText("prefix");
		const suffix = screen.getByText("suffix");
		expect(prefix).toBeInTheDocument();
		expect(suffix).toBeInTheDocument();
	});
	test('Rounded button should have "rounded-xl" or "rounded-lg" class', () => {
		render(<Button rounded>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl" || "rounded-lg");
	});
	test("Rounded prop is default to true", () => {
		render(<Button>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl" || "rounded-lg");
	});
	test('If Rouded Prop is false, it should not have "rounded-xl" or "rounded-lg" class', () => {
		render(<Button rounded={false}>{Texts.TEXT}</Button>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toHaveClass("rounded-xl" || "rounded-lg");
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
});
