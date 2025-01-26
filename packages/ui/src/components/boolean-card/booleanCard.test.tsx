import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BooleanCard } from "./booleanCard";

// Mock de los componentes internos, si es necesario
vi.mock("../Switch/Switch", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Switch: vi.fn(({ checked, onChange }: any) => (
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
  )),
}));

vi.mock("../card/card", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Card: ({ children, className, onClick }: any) => (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className={className} onClick={onClick}>
      {children}
    </div>
  ),
}));

describe("BooleanCard Component", () => {
  it("should render with title and description", () => {
    const { getByText } = render(<BooleanCard title="Test Title" description="Test Description" />);

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
  });

  it("should render with default checked value", () => {
    const { getByRole } = render(<BooleanCard title="Test Title" checked={true} />);

    const switchElement = getByRole("checkbox");
    expect(switchElement).toBeChecked();
  });

  it("should change checked state on click", () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(<BooleanCard title="Test Title" checked={false} onChange={onChangeMock} />);

    const switchElement = getByRole("checkbox");
    fireEvent.click(switchElement); // Simula un clic en el switch

    expect(onChangeMock).toHaveBeenCalledWith(true); // Verifica que onChange ha sido llamado con `true`
    expect(switchElement).toBeChecked(); // Verifica que el switch ahora está marcado
  });

  it("should apply conditional styles based on checked state", () => {
    const { container } = render(<BooleanCard title="Test Title" checked={true} />);

    // Verifica que las clases CSS aplicadas al `Card` incluyan la clase correspondiente cuando está marcado
    expect(container.firstChild).toHaveClass("bg-secondary-50");
  });

  it("should render with custom title and description props", () => {
    const { getByText } = render(
      <BooleanCard title="Custom Title" description="Custom Description" titleProps={{ className: "text-lg" }} />,
    );

    const title = getByText("Custom Title");
    const description = getByText("Custom Description");

    // Verifica que las propiedades personalizadas se apliquen al título
    expect(title).toHaveClass("text-lg");
    expect(description).toHaveClass("text-[0.8em]"); // La clase base del description
  });
});
