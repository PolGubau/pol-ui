import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AiOutlineLoading } from "react-icons/ai";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Components / Button", () => {
  describe("A11y", () => {
    it('should have `role="button"` by default', () => {
      render(<Button>Hi there</Button>);

      expect(button()).toBeInTheDocument();
    });

    it("should be able to use any other role permitted for `<button>`s", () => {
      render(<Button role="menuitem">Hi there</Button>);

      const button = screen.getByRole("menuitem");

      expect(button).toBeInTheDocument();
    });
  });

  describe("Keyboard interactions", () => {
    it("should trigger `onClick` when `Space` is pressed", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(<Button onClick={onClick}>Hi there</Button>);

      await user.click(button());

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should focus when `Tab` is pressed", async () => {
      const user = userEvent.setup();
      render(<Button>Hi there</Button>);

      await user.tab();

      expect(button()).toHaveFocus();
    });

    it("should be possible to `Tab` out", async () => {
      const user = userEvent.setup();
      render(
        <>
          <Button>Hi there</Button>
          <Button>Hello there</Button>
          <button type="submit">Submit</button>
        </>,
      );

      await user.tab();

      expect(buttons()[0]).toHaveFocus();

      await user.tab();

      expect(buttons()[1]).toHaveFocus();

      await user.tab();

      expect(buttons()[2]).toHaveFocus();
    });
  });

  describe("Props", () => {
    it("should allow HTML attributes for `<button>`s", () => {
      render(
        <Button formAction="post.php" type="submit">
          Hi there
        </Button>,
      );

      expect(button()).toHaveAttribute("formAction", "post.php");
      expect(button()).toHaveAttribute("type", "submit");
    });

    it("should be disabled when `disabled={true}`", () => {
      render(<Button disabled={true}>Hi there</Button>);

      expect(button()).toBeDisabled();
    });

    it("should show <Loader /> when `loading={true}`", () => {
      render(<Button loading={true}>Hi there</Button>);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should show custom Loader when `loading={true}` and `loader` is present", () => {
      render(
        <Button loading={true} loader={<AiOutlineLoading data-testid="Loader" />}>
          Hi there
        </Button>,
      );

      expect(screen.getByTestId("Loader")).toBeInTheDocument();
    });
  });

  describe("Rendering", () => {
    it("should render when `children={0}`", () => {
      render(<Button>0</Button>);

      expect(button()).toHaveTextContent("0");
    });

    it("should render when `children={undefined}`", () => {
      render(<Button label="Something or other" />);

      expect(button()).toHaveTextContent("Something or other");
    });
  });
});

const button = () => screen.getByRole("button");

const buttons = () => screen.getAllByRole("button");
