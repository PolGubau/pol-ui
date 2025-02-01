import { render, screen } from "@testing-library/react";
import { HiCheck } from "react-icons/hi";
import { describe, expect, it } from "vitest";
import { Badge, type BadgeProps } from "../badge-ui";

import { composeStories } from "@storybook/react";
import * as stories from "../badge-ui.stories";
import { itsDisplayed, shouldAcceptRoundessAndSize, shouldBeLink, shouldHaveIcon } from "./utils";

const { Default, WithIcon, AsLink, SmallAndRounded } = composeStories(stories);

describe("Accordion component", () => {
  it("should be rendered correctly", async () => {
    const { container } = render(<Default />);
    await itsDisplayed(container, Default.args as BadgeProps);
  });
  it("should handle links", async () => {
    const { container } = render(<AsLink />);
    await shouldBeLink(container, AsLink.args as BadgeProps);
  });
  it("should have custom styles", async () => {
    const { container } = render(<SmallAndRounded />);
    await shouldAcceptRoundessAndSize(container, SmallAndRounded.args as BadgeProps);
  });
  it("should handle icons", async () => {
    const { container } = render(<WithIcon />);
    await shouldHaveIcon(container);
  });
});

describe("Components / Badge", () => {
  describe("Rendering", () => {
    it('should render an `<a>` given `href=".."`', () => {
      render(
        <Badge href="/" icon={HiCheck}>
          A badge with a link
        </Badge>,
      );

      expect(link()).toBeInTheDocument();
      expect(link()).toHaveAttribute("href", "/");
    });
  });
});

const link = () => screen.getByRole("link");
