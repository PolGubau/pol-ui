import { expect, within } from "@storybook/test";

import { shouldHaveClass } from "../../../tests/shared-tests/assertions";
import type { BadgeProps } from "../badge";

export const itsDisplayed = (ui: HTMLElement, props: BadgeProps) => {
  const canvas = within(ui);
  const badge = canvas.getByTestId("ui-badge");
  expect(badge).toHaveTextContent(String(props.children));
};
export const shouldHaveIcon = (ui: HTMLElement) => {
  const canvas = within(ui);
  const icon = canvas.getByTestId("ui-badge-icon");
  expect(icon).toBeInTheDocument();
};
export const shouldBeLink = (ui: HTMLElement, props: BadgeProps) => {
  const canvas = within(ui);
  const link = canvas.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", props.href);
};
export const shouldAcceptRoundessAndSize = (ui: HTMLElement, props: BadgeProps) => {
  const canvas = within(ui);
  const badge = canvas.getByTestId("ui-badge");
  shouldHaveClass(badge, `rounded-${props.rounded}`);
  shouldHaveClass(badge, "px-2 py-0.5");
};
