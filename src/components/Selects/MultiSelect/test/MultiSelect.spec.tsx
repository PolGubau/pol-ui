import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MultiSelect, { MultiSelectDefaultPlaceholder } from "../MultiSelect";

describe("MultiSelect component", () => {
	const items = [
		{ id: 1, name: "Option 1" },
		{ id: 2, name: "Option 2" },
		{ id: 3, name: "Option 3" },
	];

	it("renders the component with default placeholder", () => {
		render(<MultiSelect items={items} />);
		const placeholder = screen.getByText(MultiSelectDefaultPlaceholder);
		expect(placeholder).toBeInTheDocument();
	});

	it("renders the selected values", () => {
		const selected = [{ id: 2, name: "Option 2" }];
		render(<MultiSelect items={items} values={selected} />);
		const selectedValue = screen.getByText("Option 2");
		expect(selectedValue).toBeInTheDocument();
	});

	it("opens options when clicked", () => {
		render(<MultiSelect items={items} />);
		const selectButton = screen.getByRole("button");
		fireEvent.click(selectButton);
		const option1 = screen.getByText("Option 1");
		const option2 = screen.getByText("Option 2");
		const option3 = screen.getByText("Option 3");
		expect(option1).toBeInTheDocument();
		expect(option2).toBeInTheDocument();
		expect(option3).toBeInTheDocument();
	});

	it("selects options", async () => {
		const onChange = jest.fn();
		render(<MultiSelect items={items} onChange={onChange} />);
		const selectButton = screen.getByRole("button");
		fireEvent.click(selectButton);
		const option1 = screen.getByText("Option 1");
		const option2 = screen.getByText("Option 2");
		fireEvent.click(option1);
		fireEvent.click(option2);
		await waitFor(() => {
			expect(onChange).toHaveBeenCalledWith([
				{ id: 1, name: "Option 1" },
				{ id: 2, name: "Option 2" },
			]);
		});
	});

	it("renders label", () => {
		render(<MultiSelect label="Select options" items={items} />);
		const label = screen.getByText("Select options");
		expect(label).toBeInTheDocument();
	});

	it("handles uncontrolled component", () => {
		const onChange = jest.fn();
		render(<MultiSelect items={items} onChange={onChange} />);
		const selectButton = screen.getByRole("button");
		fireEvent.click(selectButton);
		const option1 = screen.getByText("Option 1");
		fireEvent.click(option1);
		expect(onChange).toHaveBeenCalledWith([{ id: 1, name: "Option 1" }]);
	});

	it("handles empty values array", () => {
		render(<MultiSelect items={items} values={[]} />);
		const placeholder = screen.getByText(MultiSelectDefaultPlaceholder);
		expect(placeholder).toBeInTheDocument();
	});

	it("handles undefined values array", () => {
		render(<MultiSelect items={items} values={undefined} />);
		const placeholder = screen.getByText(MultiSelectDefaultPlaceholder);
		expect(placeholder).toBeInTheDocument();
	});

	it("handles multiple selected values", async () => {
		const onChange = jest.fn();
		const selected = [
			{ id: 1, name: "Option 1" },
			{ id: 3, name: "Option 3" },
		];
		render(<MultiSelect items={items} values={selected} onChange={onChange} />);
		const selectButton = screen.getByRole("button");
		fireEvent.click(selectButton);
		const option2 = screen.getByText("Option 2");
		fireEvent.click(option2);
		await waitFor(() => {
			expect(onChange).toHaveBeenCalledWith([
				{ id: 1, name: "Option 1" },
				{ id: 3, name: "Option 3" },
				{ id: 2, name: "Option 2" },
			]);
		});
	});
});
