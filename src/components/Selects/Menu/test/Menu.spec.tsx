import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Menu from "../Menu";

describe("Menu component", () => {
	const items = [
		{ label: "Item 1", onClick: jest.fn() },
		{ label: "Item 2", href: "/item2" },
		{ label: "Item 3", icon: "icon3", onClick: jest.fn() },
	];

	it("opens and closes the menu", async () => {
		render(<Menu label="Open Menu" items={items} />);
		const button = screen.getByText("Open Menu");
		fireEvent.click(button);
		const item1 = screen.getByText("Item 1");
		expect(item1).toBeInTheDocument();

		fireEvent.click(button);
		await waitFor(() => {
			expect(item1).not.toBeInTheDocument();
		});
	});

	it("triggers item's onClick handler", () => {
		render(<Menu label="Open Menu" items={items} />);
		const button = screen.getByText("Open Menu");
		fireEvent.click(button);
		const item1 = screen.getByText("Item 1");
		fireEvent.click(item1);
		expect(items[0].onClick).toHaveBeenCalled();
	});

	it("renders items with href as Links", () => {
		render(<Menu label="Open Menu" items={items} />);
		const button = screen.getByText("Open Menu");
		fireEvent.click(button);
		const linkItem = screen.getByText("Item 2");
		expect(linkItem.getAttribute("href")).toBe("/item2");
	});
});
