import { render, screen } from "@testing-library/react";
import IconButton from "../IconButton";

const enum Texts {
	TEXT = "Text Sample For testing",
}
describe("Button Component", () => {
	test("Displays correctly it's value", () => {
		render(<IconButton>{Texts.TEXT}</IconButton>);
		const heading = screen.getByText(Texts.TEXT);
		expect(heading).toBeInTheDocument();
	});
	test("Button is clickable", () => {
		const onClick = jest.fn();
		render(<IconButton onClick={onClick}>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		button.click();
		expect(onClick).toHaveBeenCalled();
	});

	test("If button is disabled, it has opacity-50 cursor-not-allowed classes", () => {
		render(<IconButton disabled>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
		expect(button).toHaveClass("opacity-50 cursor-not-allowed");
	});

	test("Button is not disabled", () => {
		render(<IconButton onClick={() => {}}>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toBeDisabled();
	});
	test("If no OnClick is passed, it should be disabled as well", () => {
		render(<IconButton>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
	});
	test("Button is not disabled if onClick is passed", () => {
		render(<IconButton onClick={() => {}}>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toBeDisabled();
	});
	test("If has a suffix, it should be displayed", () => {
		render(<IconButton suffix={<span>suffix</span>}>{Texts.TEXT}</IconButton>);
		const suffix = screen.getByText("suffix");
		expect(suffix).toBeInTheDocument();
	});
	test("If has a prefix, it should be displayed", () => {
		render(<IconButton prefix={<span>prefix</span>}>{Texts.TEXT}</IconButton>);
		const prefix = screen.getByText("prefix");
		expect(prefix).toBeInTheDocument();
	});
	test("If has a prefix and suffix, it should be displayed", () => {
		render(
			<IconButton prefix={<span>prefix</span>} suffix={<span>suffix</span>}>
				{Texts.TEXT}
			</IconButton>
		);
		const prefix = screen.getByText("prefix");
		const suffix = screen.getByText("suffix");
		expect(prefix).toBeInTheDocument();
		expect(suffix).toBeInTheDocument();
	});
	test('Rounded normal button should have "rounded-xl"  class', () => {
		render(
			<IconButton rounded size="normal">
				{Texts.TEXT}
			</IconButton>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('Rounded large button should have "rounded-xl"  class', () => {
		render(
			<IconButton rounded size="large">
				{Texts.TEXT}
			</IconButton>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('Rounded small button should have "rounded-lg"  class', () => {
		render(
			<IconButton rounded size="small">
				{Texts.TEXT}
			</IconButton>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-lg");
	});
	test("Rounded prop is default to true", () => {
		render(<IconButton size="small">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-lg");
	});
	test('If Rouded Prop is false, it should not have "rounded-xl" or "rounded-lg" class', () => {
		render(<IconButton rounded={false}>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toHaveClass("rounded-xl");
	});
	test("If Rouded Prop is false, it should have 'rounded-none' class", () => {
		render(<IconButton rounded={false}>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-none");
	});
	test("When clicking the button, we call a function", () => {
		const handleClick = jest.fn();
		render(<IconButton onClick={handleClick}>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		button.click();
		expect(handleClick).toHaveBeenCalled();
	});
	test("If button is disabled, should have opacity-50 class", () => {
		render(<IconButton disabled>{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("opacity-50");
	});
	test("If button has an id prop, apply it", () => {
		render(<IconButton id="test">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveAttribute("id", "test");
	});
	test("You can apply custom classNames", () => {
		render(<IconButton className="test">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("test");
	});

	// Types Tests (main,normal,outlined,text)

	test("If type is main, should have bg-accent and text-primary classes", () => {
		render(<IconButton type="main">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-accent text-primary");
	});
	test("If type is normal, should have bg-primary and text-white classes", () => {
		render(<IconButton type="normal">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-primary text-white");
	});
	test("If type is outlined, should have bg-white text-primary   ring-1 ring-primary classes", () => {
		render(<IconButton type="outlined">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-white text-primary ring-1 ring-primary");
	});
	test("If type is text, should have bg-transparent and text-primary classes", () => {
		render(<IconButton type="text">{Texts.TEXT}</IconButton>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-white text-primary");
	});
});
