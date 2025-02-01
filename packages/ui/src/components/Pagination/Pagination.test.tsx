import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "../../tests/providers";
import { Pagination } from "./Pagination";

const mockOnPageChange = vi.fn();
const mockOnPageSizeChange = vi.fn();

describe("Pagination", () => {
	beforeEach(() => {
		mockOnPageChange.mockClear();
		mockOnPageSizeChange.mockClear();
	});

	it("should render correctly with given props", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={2}
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		expect(screen.getByText("21 - 30 of 100")).toBeInTheDocument();
		expect(screen.getByText("Page")).toBeInTheDocument();
		expect(screen.getByText("2")).toBeInTheDocument(); // page 2 is selected
	});

	it("should trigger onPageSizeChange when page size is changed", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={2}
				onPageChange={mockOnPageChange}
				pageSize={10}
				onPageSizeChange={mockOnPageSizeChange}
			/>,
		);

		fireEvent.change(screen.getByRole("combobox"), { target: { value: "20" } });

		expect(mockOnPageSizeChange).toHaveBeenCalledWith(20);
		expect(mockOnPageChange).toHaveBeenCalledWith(0); // page should reset to 0
	});

	it("should navigate to previous page when the previous button is clicked", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={2}
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		const prevButton = screen.getByLabelText("Previous Page");
		fireEvent.click(prevButton);

		expect(mockOnPageChange).toHaveBeenCalledWith(1);
	});

	it("should navigate to next page when the next button is clicked", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={2}
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		const nextButton = screen.getByLabelText("Next Page");
		fireEvent.click(nextButton);

		expect(mockOnPageChange).toHaveBeenCalledWith(3);
	});

	it("should disable previous button on the first page", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={0}
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		const prevButton = screen.getByLabelText("Previous Page");
		expect(prevButton).toBeDisabled();
	});

	it("should disable next button on the last page", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={9} // Last page for 10 items per page
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		const nextButton = screen.getByLabelText("Next Page");
		expect(nextButton).toBeDisabled();
	});

	it("should correctly calculate pagination details", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={3}
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		expect(screen.getByText("31 - 40 of 100")).toBeInTheDocument();
	});

	it("should call onPageChange with correct page number when page buttons are clicked", () => {
		renderWithProviders(
			<Pagination
				total={100}
				page={1}
				onPageChange={mockOnPageChange}
				pageSize={10}
			/>,
		);

		// Test next button with aria label "nextPage"
		fireEvent.click(screen.getByTitle("Next Page"));
		expect(mockOnPageChange).toHaveBeenCalledWith(2);

		// Test previous button
	});
});
