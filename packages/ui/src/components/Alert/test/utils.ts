import { expect, within } from "@storybook/test";

import { shouldExist, shouldHaveClass } from "../../../tests/shared-tests/assertions";
import type { AlertProps } from "../alert";
import { alertTheme } from "../theme";

export const itsDisplayed = (ui: HTMLElement, props: AlertProps) => {
  const canvas = within(ui);
  const badge = canvas.getByRole("alert");
  shouldExist(badge);
  expect(badge).toHaveTextContent(String(props.children));

  const icon = canvas.getByTestId("ui-alert-icon");
  shouldExist(icon);
};

export const shouldCanDismiss = (ui: HTMLElement) => {
  const canvas = within(ui);

  const button = canvas.getByTestId("ui-alert-dismiss");
  shouldExist(button);
};
export const shouldBeBordered = (ui: HTMLElement) => {
  const canvas = within(ui);
  const badge = canvas.getByRole("alert");
  shouldExist(badge);
  expect(badge).toHaveClass("border-t-4");
  expect(badge).toHaveClass(alertTheme.borderAccent);
};
export const shouldSquare = (ui: HTMLElement) => {
  const canvas = within(ui);
  const badge = canvas.getByRole("alert");
  shouldExist(badge);
  shouldHaveClass(badge, "rounded-none");
};
