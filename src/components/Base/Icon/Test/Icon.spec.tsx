import { render, screen } from "@testing-library/react";
import Icon from "../Icon";
import { TbCheck } from "react-icons/tb";

const enum Texts {
	TEXT = "check",
}
describe("Icon Component", () => {
	test("Displays correctly it's value", () => {
		render(<Icon icon={Texts.TEXT} />);
		const icon = screen.getByRole("img");
		expect(icon).toBeInTheDocument();
	});
	// colors

	test("Displays correctly it's info color", () => {
		render(<Icon icon={Texts.TEXT} color="info" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-info");
	});
	test("Displays correctly it's success color", () => {
		render(<Icon icon={Texts.TEXT} color="success" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-success");
	});
	test("Displays correctly it's danger color", () => {
		render(<Icon icon={Texts.TEXT} color="danger" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-danger");
	});
	test("Displays correctly it's main color", () => {
		render(<Icon icon={Texts.TEXT} color="accent" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-accent");
	});
	// sizes
	test("Displays correctly it's default size", () => {
		render(<Icon icon={Texts.TEXT} />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveStyle({ fontSize: "" });
	});
	test("Displays correctly it's sm size", () => {
		render(<Icon icon={Texts.TEXT} size="sm" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveStyle({ fontSize: "text-lg" });
	});
	test("Displays correctly it's lg size", () => {
		render(<Icon icon={Texts.TEXT} size="lg" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveStyle({ fontSize: "text-4xl" });
	});

	// className
	test("Displays correctly it's className", () => {
		render(<Icon icon={Texts.TEXT} className="test" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("test");
	});

	// id
	test("Displays correctly it's id", () => {
		render(<Icon icon={Texts.TEXT} id="test" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveAttribute("id", "test");
	});

	// icon
	test("Displays correctly it's icon if it's a React Component value", () => {
		render(<Icon icon={<TbCheck />} />);
		const icon = screen.getByRole("img");
		expect(icon).toBeInTheDocument();
	});

	// Alwaysrender
	// by default icon returns null if the string is not found, if you pass alwaysRender it will return the sent string
	test("Displays correctly it's icon if it's a string value", () => {
		render(<Icon icon={Texts.TEXT} alwaysRender />);
		const icon = screen.getByRole("img");
		expect(icon).toBeInTheDocument();
	});
});
