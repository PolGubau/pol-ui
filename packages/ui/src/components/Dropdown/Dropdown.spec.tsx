import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type FC, act } from "react";
import { describe, expect, it } from "vitest";
import { Dropdown, DropdownItem } from ".";
import type { DropdownProps } from "./Dropdown";

describe("Components / Dropdown", () => {
  describe("A11y", async () => {
    it('should use `role="menuitem"` in dropdown items', async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      await act(() => user.click(button()));

      expect(screen.getAllByRole("menuitem")).toHaveLength(4);
    });

    it("should not open when `disabled={true}`", async () => {
      const user = userEvent.setup();
      render(<TestDropdown disabled={true} />);

      expect(button()).toBeDisabled();

      await act(() => user.click(button()));
      expect(dropdown()).not.toBeInTheDocument();
    });
  });

  describe("Mouse interactions", () => {
    it("should collapse if item is clicked", async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      await act(() => user.click(button()));
      await act(() => userEvent.click(dropdownItem()));

      expect(dropdown()).not.toBeInTheDocument();
    });

    it("should collapse if CustomTriggerItem is clicked", async () => {
      const user = userEvent.setup();
      render(<TestDropdown trigger={<button type="button">A</button>} />);

      const button = screen.getAllByRole("button")[0];
      if (!button) {
        return;
      }

      await act(() => user.click(button));
      await act(() => userEvent.click(dropdownItem()));
      expect(dropdown()).not.toBeInTheDocument();
    });

    it("should always collapse when item is clicked", async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      await act(() => user.click(button()));
      await act(() => userEvent.click(dropdownItem()));

      expect(dropdown()).not.toBeInTheDocument();

      await act(() => user.click(button()));
      await act(() => userEvent.click(dropdownItem()));

      expect(dropdown()).not.toBeInTheDocument();
    });

    describe("Type of button", () => {
      it("should be of type `button`", () => {
        render(<TestDropdown />);
        expect(button()).toHaveAttribute("type", "button");
      });
    });
  });
  const TestDropdown: FC<Partial<DropdownProps>> = ({ disabled, trigger }) => (
    <div>
      <Dropdown label="Dropdown button" trigger={trigger} disabled={disabled}>
        <DropdownItem
          label="Undo"
          onClick={() => {
            console.info("Undo");
          }}
          shortcut="Ctrl+Z"
        />
        <DropdownItem label="Redo" disabled={true} />
        <DropdownItem label="Cut" />
        <DropdownItem label="Share" />
      </Dropdown>
    </div>
  );

  const button = () => screen.getByRole("button", { name: "Dropdown button" });

  const dropdown = () => screen.queryByTestId("ui-dropdown");

  const dropdownItem = () => screen.getByText("Undo");
});
