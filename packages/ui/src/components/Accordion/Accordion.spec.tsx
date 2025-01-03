import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { FC } from "react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";
import type { AccordionProps } from "./types";

describe("Components / Accordion", () => {
  describe("A11y", () => {
    it("should use `aria-label` if provided", () => {
      render(<TestAccordion aria-label="My accordion" />);
      expect(accordion()).toHaveAccessibleName("My accordion");
    });

    it('should use `aria-labelledby=""` in `Accordion.Content` if provided', () => {
      render(<TestAccordion />);
      expect(content()[0]).toHaveAccessibleName("Title");
      expect(content()[0]).toHaveAttribute("aria-labelledby", "accordion-title");
    });

    it('should use `role="button"` in `Accordion.Title`', () => {
      render(<TestAccordion />);
      for (const title of titles()) {
        expect(title).toBeInTheDocument();
      }
    });

    it('should use `id=""` if provided in `Accordion.Title`', () => {
      render(<TestAccordion aria-label="My accordion" />);
      expect(accordion()).toHaveAccessibleName("My accordion");
    });

    it("shouldn't include `arrowIcon` in `Accordion.Title` label", () => {
      render(<TestAccordion />);
      for (const title of titles()) {
        expect(title).toHaveAccessibleName("Title");
      }
    });
  });
  describe("Keyboard interactions", () => {
    it("should open focused panel without closing others on an `Accordion.Panel` with `alwaysOpen={true}`", async () => {
      const user = userEvent.setup();
      render(<TestAccordion alwaysOpen={true} />);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of titles()) {
        await user.tab();
      }

      await user.keyboard("[Space]");
      expect(titles()[0]).toBeVisible();
      expect(titles()[1]).toBeVisible();
    });

    it("should be possible to `Tab` out", async () => {
      const user = userEvent.setup();
      render(
        <>
          <TestAccordion />
          <button type="button">Outside button</button>
        </>,
      );

      const outsideButton = screen.getByText("Outside button");

      await waitFor(async () => {
        await user.tab();

        expect(outsideButton).toHaveFocus();
      });
    });

    it("should give each `Accordion.Title` focus in order while pressing `Tab`", async () => {
      const user = userEvent.setup();
      render(<TestAccordion />);

      for (const title of titles()) {
        await user.tab();

        expect(title).toHaveFocus();
      }
    });
  });
  describe("Props", () => {
    it('should use any HTML heading element in `Accordion.Title as=".."`', () => {
      render(<TestAccordion />);

      const firstHeading = headings()[0];
      const secondHeading = headings()[1];
      if (firstHeading && secondHeading) {
        expect(firstHeading.tagName.toLocaleLowerCase()).toEqual("h3");
        expect(secondHeading.tagName.toLocaleLowerCase()).toEqual("h2");
      }
    });
  });
});

const TestAccordion: FC<Omit<AccordionProps, "children">> = (props) => (
  <Accordion arrowIcon={HiOutlineArrowCircleDown} {...props}>
    <Accordion.Panel>
      <Accordion.Title as="h3" className="text-cyan-300" id="accordion-title">
        Title
      </Accordion.Title>
      <Accordion.Content aria-labelledby="accordion-title" className="text-cyan-300">
        <p>Content</p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Title</Accordion.Title>
      <Accordion.Content>
        <p>Content</p>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);
const accordion = () => screen.getByTestId("ui-accordion");
const content = () => screen.getAllByTestId("ui-accordion-content");
const headings = () => screen.getAllByTestId("ui-accordion-heading");
const titles = () => screen.getAllByRole("button");
