import { render, screen } from "@testing-library/react";
import Link from "../Link";

const enum Texts {
	TEXT = "Text Sample For testing",
}
describe("Button Component", () => {
	test("Displays correctly it's value", () => {
		render(<Link>{Texts.TEXT}</Link>);
		const heading = screen.getByText(Texts.TEXT);
		expect(heading).toBeInTheDocument();
	});
	test("Button is clickable", () => {
		const onClick = jest.fn();
		render(<Link onClick={onClick}>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		button.click();
		expect(onClick).toHaveBeenCalled();
	});

	test("If button is disabled, it has opacity-50 cursor-not-allowed classes", () => {
		render(<Link disabled>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
		expect(button).toHaveClass("opacity-50 cursor-not-allowed");
	});

	test("Button is not disabled", () => {
		render(<Link onClick={() => {}}>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toBeDisabled();
	});
	test("If no OnClick is passed, it should be disabled as well", () => {
		render(<Link>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toBeDisabled();
	});
	test("Button is not disabled if onClick is passed", () => {
		render(<Link onClick={() => {}}>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toBeDisabled();
	});

	test('Rounded md button should have "rounded-xl"  class', () => {
		render(
			<Link rounded size="md">
				{Texts.TEXT}
			</Link>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('Rounded large button should have "rounded-xl"  class', () => {
		render(
			<Link rounded size="lg">
				{Texts.TEXT}
			</Link>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('Rounded sm button should have "rounded-xl"  class', () => {
		render(
			<Link rounded size="sm">
				{Texts.TEXT}
			</Link>
		);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test("Rounded prop is default to true", () => {
		render(<Link size="sm">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-xl");
	});
	test('If Rouded Prop is false, it should not have "rounded-xl" or "rounded-lg" class', () => {
		render(<Link rounded={false}>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).not.toHaveClass("rounded-xl");
	});
	test("If Rouded Prop is false, it should have 'rounded-none' class", () => {
		render(<Link rounded={false}>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("rounded-none");
	});
	test("When clicking the button, we call a function", () => {
		const handleClick = jest.fn();
		render(<Link onClick={handleClick}>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		button.click();
		expect(handleClick).toHaveBeenCalled();
	});
	test("If button is disabled, should have opacity-50 class", () => {
		render(<Link disabled>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("opacity-50");
	});
	test("If button has an id prop, apply it", () => {
		render(<Link id="test">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveAttribute("id", "test");
	});
	test("You can apply custom classNames", () => {
		render(<Link className="test">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("test");
	});

	// Types Tests (main,normal,outlined,text)

	test("If type is main, should have bg-accent and text-primary classes", () => {
		render(<Link type="main">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-accent text-primary");
	});
	test("If type is normal, should have bg-primary/60 and text-white classes", () => {
		render(<Link type="normal">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-primary/60 text-white");
	});
	test("If type is outlined, should have bg-white text-primary   ring-1 ring-primary classes", () => {
		render(<Link type="outlined">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-white text-primary ring-1 ring-primary");
	});
	test("If type is text, should have bg-transparent and text-primary classes", () => {
		render(<Link type="text">{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("bg-transparent text-primary");
	});

	// Centered

	test("If centered prop is true, should have justify-center text-center classes", () => {
		render(<Link centered>{Texts.TEXT}</Link>);
		const button = screen.getByText(Texts.TEXT);
		expect(button).toHaveClass("justify-center text-center");
	});

	test("if onlyIcon prop is true, then there is not children", () => {
		render(
			<Link onlyIcon icon="search">
				Children
			</Link>
		);
		const button = screen.getByRole("button");
		expect(button).not.toHaveTextContent("Children");
	});
});
