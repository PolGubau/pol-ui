import { render, fireEvent, screen } from "@testing-library/react";
import Select from "./Select";

const items = [
	{ id: 1, name: "Item 1" },
	{ id: 2, name: "Item 2" },
	{ id: 3, name: "Item 3" },
];

describe("Select component", () => {
	it("renders label correctly", () => {
		render(<Select label="Select Label" items={items} />);
		const labelElement = screen.getByText("Select Label");
		expect(labelElement).toBeInTheDocument();
	});

	it("displays placeholder when no value is selected", () => {
		render(<Select placeholder="Select an option" items={items} />);
		const placeholderElement = screen.getByText("Select an option");
		expect(placeholderElement).toBeInTheDocument();
	});

	it("displays selected value", () => {
		const selectedValue = items[1];
		render(<Select value={selectedValue} items={items} />);
		const selectedValueElement = screen.getByText("Item 2");
		expect(selectedValueElement).toBeInTheDocument();
	});

	it("displays options when button is clicked", () => {
		render(<Select items={items} />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const option1 = screen.getByText("Item 1");
		const option2 = screen.getByText("Item 2");
		const option3 = screen.getByText("Item 3");
		expect(option1).toBeInTheDocument();
		expect(option2).toBeInTheDocument();
		expect(option3).toBeInTheDocument();
	});

	it("selects an option", () => {
		const onChange = jest.fn();
		render(<Select items={items} onChange={onChange} />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const option2 = screen.getByText("Item 2");
		fireEvent.click(option2);
		expect(onChange).toHaveBeenCalledWith(items[1]);
	});
	it("calls onChange when an option is selected", () => {
		const onChange = jest.fn();
		render(<Select items={items} onChange={onChange} />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const option2 = screen.getByText("Item 2");
		fireEvent.click(option2);
		expect(onChange).toHaveBeenCalledWith(items[1]);
	});

	it("sets the selected value when an option is selected", () => {
		const onChange = jest.fn();
		render(<Select items={items} value={items[1]} onChange={onChange} />);
		const selectedValue = screen.getByText("Item 2");
		expect(selectedValue).toBeInTheDocument();
	});

	it("calls onChange when clicking on an option", () => {
		const onChange = jest.fn();
		render(<Select items={items} onChange={onChange} />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const option2 = screen.getByText("Item 2");
		fireEvent.click(option2);
		expect(onChange).toHaveBeenCalledTimes(1); // Ensure that onChange was called
	});
});
