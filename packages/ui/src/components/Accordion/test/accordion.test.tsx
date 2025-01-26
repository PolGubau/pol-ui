import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import type { AccordionProps } from "../accordion";
import * as stories from "../accordion.stories";
import {
  canBeUsedWithKeyboard,
  itsDisplayedAndWorks,
  shouldUseAriaLabel,
  shouldUseAriaLabelledBy,
  shouldUseId,
} from "./utils";

const { Default } = composeStories(stories);

describe("Accordion component", () => {
  it("should handle user interactions correctly", async () => {
    const { container } = render(<Default />);
    await itsDisplayedAndWorks(container, Default.args as AccordionProps);
  });
  it("should handle keyboards interactions correctly", async () => {
    const { container } = render(<Default />);
    await canBeUsedWithKeyboard(container, Default.args as AccordionProps);
  });
  describe("A11y tests", () => {
    it("should use aria-label", async () => {
      const { container } = render(<Default />);
      await shouldUseAriaLabel(container, Default.args as AccordionProps);
    });
    it("should use aria-labelledby", async () => {
      const { container } = render(<Default />);
      await shouldUseAriaLabelledBy(container, Default.args as AccordionProps);
    });
    it("should use id", async () => {
      const { container } = render(<Default />);
      await shouldUseId(container, Default.args as AccordionProps);
    });
  });
});
