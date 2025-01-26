import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BooleanLoadingCard } from "./booleanLoadingCard";

vi.mock("../Switch/Switch", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Switch: vi.fn(({ disabled, checked }: any) => <input type="checkbox" disabled={disabled} checked={checked} />),
}));

vi.mock("../card", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Card: ({ children, className }: any) => <div className={className}>{children}</div>,
}));

describe("BooleanLoadingCard Component", () => {
  it("should render with the correct loading styles", () => {
    const { container } = render(<BooleanLoadingCard />);

    const card = container.firstChild;
    expect(card).toHaveClass("opacity-60 animate-pulse");
  });

  it("should render with loading text placeholders", () => {
    const { getByText } = render(<BooleanLoadingCard />);

    expect(getByText("lorem pisum lorem")).toHaveClass("bg-secondary/40");
    expect(getByText("lorem pisum lorem epson")).toHaveClass("bg-secondary/20");
  });

  it("should render a disabled Switch", () => {
    const { getByRole } = render(<BooleanLoadingCard />);

    const switchElement = getByRole("checkbox");

    expect(switchElement).toBeDisabled();
  });

  it("should not be able to interact with the Switch", () => {
    const { getByRole } = render(<BooleanLoadingCard />);

    const switchElement = getByRole("checkbox");

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expect((switchElement as any).checked).toBe(false); // El switch está inicialmente en falso
    expect(switchElement).toBeDisabled(); // El switch está deshabilitado
  });
});
