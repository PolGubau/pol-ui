import { cleanup, fireEvent, render } from "@testing-library/react";
import type { RefObject } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useClickOutside } from "./use-click-outside";

afterEach(() => {
  cleanup();
});

describe("useClickOutside Hook", () => {
  const TestComponent = ({
    onClickOutside,
    events,
  }: {
    onClickOutside: () => void;
    events?: ("mousedown" | "mouseup" | "touchstart" | "touchend")[];
  }) => {
    const ref = useClickOutside(onClickOutside, events);
    return (
      <div>
        <div ref={ref as RefObject<HTMLDivElement>} data-testid="inside">
          Inside
        </div>
        <div data-testid="outside">Outside</div>
      </div>
    );
  };

  it("should call handler when clicking outside the element", () => {
    const handleClickOutside = vi.fn();

    const { getByTestId } = render(<TestComponent onClickOutside={handleClickOutside} />);

    fireEvent.mouseDown(getByTestId("outside"));

    expect(handleClickOutside).toHaveBeenCalled();
  });

  it("should NOT call handler when clicking inside the element", () => {
    const handleClickOutside = vi.fn();

    const { getByTestId } = render(<TestComponent onClickOutside={handleClickOutside} />);

    fireEvent.mouseDown(getByTestId("inside"));

    expect(handleClickOutside).not.toHaveBeenCalled();
  });

  it("should call handler when clicking outside with mouseup event", () => {
    const handleClickOutside = vi.fn();

    const { getByTestId } = render(<TestComponent onClickOutside={handleClickOutside} events={["mouseup"]} />);

    fireEvent.mouseUp(getByTestId("outside"));

    expect(handleClickOutside).toHaveBeenCalled();
  });

  it("should call handler when tapping outside with touchstart event", () => {
    const handleClickOutside = vi.fn();

    const { getByTestId } = render(<TestComponent onClickOutside={handleClickOutside} />);

    fireEvent.touchStart(getByTestId("outside"));

    expect(handleClickOutside).toHaveBeenCalled();
  });

  it("should remove event listeners on unmount", () => {
    const handleClickOutside = vi.fn();
    const addSpy = vi.spyOn(document, "addEventListener");
    const removeSpy = vi.spyOn(document, "removeEventListener");

    const { unmount } = render(<TestComponent onClickOutside={handleClickOutside} />);

    expect(addSpy).toHaveBeenCalled();

    unmount();

    expect(removeSpy).toHaveBeenCalled();
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it("should NOT call handler when clicking a child of the referenced element", () => {
    const handleClickOutside = vi.fn();

    const { getByTestId } = render(<TestComponent onClickOutside={handleClickOutside} />);

    const insideElement = getByTestId("inside");
    const child = document.createElement("span");
    insideElement.appendChild(child);

    fireEvent.mouseDown(child);

    expect(handleClickOutside).not.toHaveBeenCalled();
  });

  it("should call handler when clicking outside with custom events", () => {
    const handleClickOutside = vi.fn();

    const { getByTestId } = render(<TestComponent onClickOutside={handleClickOutside} events={["mouseup"]} />);

    fireEvent.mouseUp(getByTestId("outside"));

    expect(handleClickOutside).toHaveBeenCalled();
  });
});
