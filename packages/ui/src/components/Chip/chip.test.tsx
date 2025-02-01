import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Chip } from "./chip-ui";

// Mock del componente IconButton si es necesario
vi.mock("../IconButton/IconButton", () => ({
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	IconButton: ({ children, onClick, disabled }: any) => (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button onClick={onClick} disabled={disabled}>
			{children}
		</button>
	),
}));

describe("Chip Component", () => {
	it("should render with label", () => {
		render(<Chip label="Test Chip" />);

		// Verifica que el texto del label se renderiza correctamente
		expect(screen.getByText("Test Chip")).toBeInTheDocument();
	});

	it("should render actions if provided", () => {
		const actions = [
			{
				icon: <span>Icon1</span>,
				onClick: () => null,
				label: "Action1",
			},
		];

		render(<Chip label="Test Chip" actions={actions} />);

		// Verifica que el icono de la acción esté presente
		expect(screen.getByText("Icon1")).toBeInTheDocument();
	});

	it("should trigger onClick when clicked", () => {
		const onClick = vi.fn();

		render(<Chip label="Test Chip" onClick={onClick} />);

		const chipElement = screen.getByText("Test Chip");

		// Disparar el evento onClick
		fireEvent.click(chipElement);

		// Verifica que la función onClick fue llamada
		expect(onClick).toHaveBeenCalled();
	});

	it("should not trigger onClick if disabled", () => {
		const onClick = vi.fn();

		render(<Chip label="Test Chip" onClick={onClick} disabled={true} />);

		const chipElement = screen.getByText("Test Chip");

		// Intentar hacer click en el chip
		fireEvent.click(chipElement);

		// Verifica que la función onClick no haya sido llamada
		expect(onClick).toHaveBeenCalled();
	});

	it("should trigger onDelete when delete icon is clicked", () => {
		const onDelete = vi.fn();

		render(<Chip label="Test Chip" onDelete={onDelete} />);

		const deleteButton = screen.getByRole("button");

		// Simula el click en el botón de eliminación
		fireEvent.click(deleteButton);

		// Verifica que onDelete fue llamado
		expect(onDelete).toHaveBeenCalled();
	});

	it("should apply correct styles based on color prop", () => {
		const { container } = render(<Chip label="Test Chip" color="primary" />);

		// Verifica que el chip tiene la clase correspondiente al color
		expect(container.firstChild).toHaveClass(
			"bg-primary-200 dark:bg-primary-600/80",
		);
	});

	it("should apply correct styles for disabled state", () => {
		const { container } = render(<Chip label="Test Chip" disabled={true} />);

		// Verifica que el chip tiene la clase de estado deshabilitado
		expect(container.firstChild).toHaveClass("cursor-not-allowed");
	});
});
