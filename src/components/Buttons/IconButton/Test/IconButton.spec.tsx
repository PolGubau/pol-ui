import { render, screen } from "@testing-library/react";
import IconButton from "../IconButton";

const icon = "check";
describe("Button Component", () => {
	test("Displays correctly it's value", () => {
		render(<IconButton icon={icon} />);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});
});
