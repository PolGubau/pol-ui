import { userEvent, within } from "@storybook/test";

/**
 * Type text into a form field identified by its label.
 * @param ui Container element of the form.
 * @param labelText Label associated with the field.
 * @param valueToType Value to type.
 * @returns Modified Input HTML element.
 */
export const typeInField = async (ui: HTMLElement, labelText: string, valueToType: string) => {
  const canvas = within(ui);
  const input = canvas.getByLabelText(labelText);
  await userEvent.type(input, valueToType);
  return input;
};

/**
 * Click a (role) button by it's text.
 * @param ui Element that contains the button.
 * @param buttonText Text of the button.
 * @returns The button element.
 */
export const click = async (ui: HTMLElement) => {
  await userEvent.click(ui);
  return ui;
};
