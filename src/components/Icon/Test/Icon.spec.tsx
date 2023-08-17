import { render, screen } from "@testing-library/react";
import Icon from "../Icon";
import { TbCheck } from "react-icons/tb";
import { getIcon } from "../../../utils";
import { IconNames } from "../types";

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

	test("Displays correctly it's default (text-primary) color", () => {
		render(<Icon icon={Texts.TEXT} />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-primary");
	});
	test("Displays correctly it's success color", () => {
		render(<Icon icon={Texts.TEXT} color="success" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-green-500");
	});
	test("Displays correctly it's danger color", () => {
		render(<Icon icon={Texts.TEXT} color="danger" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-red-500");
	});
	test("Displays correctly it's main color", () => {
		render(<Icon icon={Texts.TEXT} color="main" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveClass("text-accent");
	});
	// sizes
	test("Displays correctly it's default size", () => {
		render(<Icon icon={Texts.TEXT} />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveStyle({ fontSize: "" });
	});
	test("Displays correctly it's 10px size", () => {
		render(<Icon icon={Texts.TEXT} size="10px" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveStyle({ fontSize: "10px" });
	});
	test("Displays correctly it's 20px size", () => {
		render(<Icon icon={Texts.TEXT} size="20px" />);
		const icon = screen.getByRole("img");
		expect(icon).toHaveStyle({ fontSize: "20px" });
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
	test("Displays correctly it's icon if it's a string value", () => {
		render(<Icon icon={Texts.TEXT} />);
		const icon = screen.getByRole("img");
		expect(icon).toBeInTheDocument();
	});

	// 	const resultIcon = typeof icon === "string" ? getIcon(icon as IconNames) : icon;
	// Test the getIcon function

	test("getIcon function returns a React Component if name exists", () => {
		const result = getIcon("check");
		expect(result).not.toBeNull();
	});
	test("getIcon function returns null if name doesn't exist", () => {
		const result = getIcon("test-000001");
		expect(result).toBeNull();
	});

	test("getIcon function returns null if name is empty", () => {
		const result = getIcon("");
		expect(result).toBeNull();
	});
});
