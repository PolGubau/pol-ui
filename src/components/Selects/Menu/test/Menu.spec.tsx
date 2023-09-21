import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Menu, { MenuItem } from "../Menu";

describe("Menu component", () => {
	beforeAll(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});
	const items: MenuItem[] = [
		{ label: "Item 1", onClick: jest.fn() },
		{ label: "Item 2", href: "/item2" },
		{ label: "Item 3", onClick: jest.fn(), icon: "check" },
	];

	it("opens and closes the menu", async () => {
		render(<Menu label="Open Menu" optio s={items} />);
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
		render(<Menu label="Open Menu" optio s={items} />);
		const button = screen.getByText("Open Menu");
		fireEvent.click(button);
		const item1 = screen.getByText("Item 1");
		fireEvent.click(item1);
		expect(items[0].onClick).toHaveBeenCalled();
	});
});
