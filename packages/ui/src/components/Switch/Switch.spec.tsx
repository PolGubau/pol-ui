import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type FC, useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "../Input";
import { Switch } from "./Switch";

describe("Components / Toggle switch", () => {
  describe("A11y", () => {
    it('should have `role="switch"` by default', () => {
      render(<Switch checked={false} label="Enable" onChange={console.info} />);

      expect(toggleSwitch()).toBeInTheDocument();
    });

    it("should have an accessible name", () => {
      render(<Switch checked={false} label="Enable notifications" name="notifications" onChange={console.info} />);

      expect(toggleSwitch()).toHaveAccessibleName("Enable notifications");
    });
  });

  describe("Keyboard interaction", () => {
    it("should toggle when `Enter` is pressed", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Switch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard("[Enter]");
      expect(handleChange).toHaveBeenCalled();
    });
    it("should toggle true when the right arrow is pressed", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Switch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard("[ArrowRight]");
      expect(handleChange).toHaveBeenCalled();
    });
    it("should false true when the left arrow is pressed", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Switch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard("[ArrowLeft]");
      expect(handleChange).toHaveBeenCalled();
    });

    it("shouldn't submit surrounding form when `Enter` is pressed", async () => {
      const handleSubmit = vi.fn();
      const user = userEvent.setup();
      render(
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Switch checked={false} label="Enable notifications" name="notifications" onChange={console.info} />
        </form>,
      );

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard("[Enter]");

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it("should toggle when `Space` is pressed", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const TestSwitch: FC = () => {
        const [state, setState] = useState(false);

        return (
          <Switch
            checked={state}
            label="Enable notifications"
            name="notifications"
            onChange={(value) => {
              setState(value);
              handleChange(value);
            }}
          />
        );
      };
      render(<TestSwitch />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard("[Space]");

      expect(toggleSwitch()).toHaveAttribute("aria-checked", "true");

      await user.keyboard("[Space]");

      expect(toggleSwitch()).toHaveAttribute("aria-checked", "false");
    });

    it("should focus when `Tab` is pressed", async () => {
      const user = userEvent.setup();
      render(<Switch checked={false} label="Enable notifications" name="notifications" onChange={console.info} />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();
    });

    it("should allow the user to `Tab` away", async () => {
      const user = userEvent.setup();
      render(
        <form>
          <Switch checked={false} label="Enable notifications" name="notifications" onChange={console.info} />
          <Input type="text" />
        </form>,
      );

      await user.tab();
      await user.tab();

      expect(toggleSwitch()).not.toHaveFocus();
      expect(screen.getByRole("textbox")).toHaveFocus();
    });
  });

  describe("Props", () => {
    it("should allow HTML attributes for `<button>`s", () => {
      render(<Switch checked={false} label="Enable" onChange={console.info} type="submit" />);

      expect(toggleSwitch()).toHaveAttribute("type", "submit");
    });
  });
});

const toggleSwitch = () => screen.getByRole("switch");
