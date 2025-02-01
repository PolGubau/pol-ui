import { expect, within } from "@storybook/test";
import { shouldExist, shouldHaveClass, shouldHaveEmptyValue } from "../../../tests/shared-tests/assertions";
import { clearAndCheckEmpty, typeAndCheckValue } from "../../../tests/shared-tests/common-patters";
import { ColorsEnum } from "../../../types";
import type { InputProps } from "../props";
import { inputTheme } from "../theme";
import { customExampleInputLabelClasses } from "./props";

export const testInputLogic = async (ui: HTMLElement, props: InputProps) => {
  const canvas = within(ui);
  const input = canvas.getByLabelText(props.label);

  shouldExist(input);
  shouldHaveEmptyValue(input);
  await typeAndCheckValue(input, "Hello, world!");
  await clearAndCheckEmpty(input);
};

export const shouldHandleError = (ui: HTMLElement, props: InputProps) => {
  const canvas = within(ui);

  const input = canvas.getByLabelText(props.label);

  shouldExist(input);
  shouldHaveEmptyValue(input);

  const hasErrorText = canvas.getByText(props.error ?? "");
  shouldExist(hasErrorText);
  shouldHaveClass(hasErrorText, `text-${ColorsEnum.error}`);

  // the label should also have the "text-error" class
  const label = canvas.getAllByText(props.label)[0];
  shouldHaveClass(label, `text-${ColorsEnum.error}`);
};

export const shouldHaveIcon = (ui: HTMLElement, props: InputProps) => {
  const canvas = within(ui);

  const input = canvas.getByLabelText(props.label);

  // input should exist
  shouldExist(input);

  // input shold be empty
  shouldHaveEmptyValue(input);

  const icon = canvas.getByTestId("icon");
  shouldExist(icon);
};
export const shouldBeRequired = (ui: HTMLElement, props: InputProps) => {
  // if the input is required, the label should have a star (*)
  // example {label: "Username", required: true} -> label should be "Username *"

  const canvas = within(ui);
  // get the props.label text and its a label
  const textToMatch = `${props.label} *`;
  const label = canvas.getByRole("textbox", { name: textToMatch });
  shouldExist(label);
};

export const shouldHaveCustomLabelClasses = (ui: HTMLElement, props: InputProps) => {
  const canvas = within(ui);
  const label = canvas.getAllByText(props.label)[0];

  shouldHaveClass(label, customExampleInputLabelClasses);
};

export const shouldHaveHelperText = (ui: HTMLElement, props: InputProps) => {
  const canvas = within(ui);
  const helperText = canvas.getByText((props.helperText as string) ?? "");
  shouldExist(helperText);
};

export const helperTextClassesShouldBeCorrect = (ui: HTMLElement, props: InputProps) => {
  const canvas = within(ui);
  const helperText = canvas.getByText((props.helperText as string) ?? "");
  shouldHaveClass(helperText, inputTheme.helperText.base);
};

// ui is the container of all the inputs (one for each color)
export const justErrorLabelColored = (ui: HTMLElement) => {
  const canvas = within(ui);

  const errorLabel = canvas.getAllByText("error")[0];
  const primaryLabel = canvas.getAllByText("primary")[0];
  shouldExist(errorLabel);

  shouldHaveClass(errorLabel, inputTheme.label.colors.error);
  /**
   * The test above should be enough to test the error label, but if the problem is in the inputTheme, let's test at least the label text color
   */
  shouldHaveClass(errorLabel, "text-error");
  expect(primaryLabel).not.toHaveClass("text-error");
  expect(primaryLabel).not.toHaveClass("text-primary");
};
