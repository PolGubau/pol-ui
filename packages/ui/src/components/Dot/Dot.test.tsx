import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { cn } from "../../helpers";
import { ColorsEnum, MainSizesEnum } from "../../types";
import { Dot } from "./Dot";
vi.mock("../../helpers", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  cn: (...classes: any) => cn(...classes),
}));

describe("Dot Component", () => {
  it("should render with default size and color", () => {
    const { container } = render(<Dot />);

    expect(container.firstChild).toHaveClass("flex rounded-full w-3 h-3 bg-primary");
  });

  it("should render with the correct size classes", () => {
    const { container: smContainer } = render(<Dot size={MainSizesEnum.sm} />);
    const { container: lgContainer } = render(<Dot size={MainSizesEnum.lg} />);

    expect(smContainer.firstChild).toHaveClass("w-2 h-2");
    expect(lgContainer.firstChild).toHaveClass("w-4 h-4");
  });

  it("should render with the correct color classes", () => {
    const { container: primaryContainer } = render(<Dot color={ColorsEnum.primary} />);
    const { container: secondaryContainer } = render(<Dot color={ColorsEnum.secondary} />);

    expect(primaryContainer.firstChild).toHaveClass("bg-primary");
    expect(secondaryContainer.firstChild).toHaveClass("bg-secondary");
  });

  it("should apply additional classNames passed via props", () => {
    const { container } = render(<Dot className="custom-class" />);

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should propagate additional props to the div", () => {
    const { container } = render(<Dot data-testid="dot-component" />);

    expect(container.firstChild).toHaveAttribute("data-testid", "dot-component");
  });
});
