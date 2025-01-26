import { expect } from "@storybook/test";
/**
 * Assert that an element exists.
 * @param ui Container element.
 * @throws Error if the element does not exist.
 */
export const shouldExist = (ui: HTMLElement) => {
  expect(ui).toBeInTheDocument();
};

/**
 * Assert that an element has a specific value.
 * @param ui  Container element.
 * @param value Expected value of the element.
 */
export const shouldHaveThisValue = (ui: HTMLElement, value: string) => {
  expect(ui).toHaveValue(value);
};

/**
 * Assert that an element has an empty value.
 * @param ui Container element.
 */
export const shouldHaveEmptyValue = (ui: HTMLElement) => {
  shouldHaveThisValue(ui, "");
};
/**
 * Assert that an element has a specific CSS class.
 * @param ui Container element.
 * @param text Text of the element.
 * @param expectedClass Expected CSS class.
 */
export const shouldHaveClass = (ui: HTMLElement, expectedClass: string) => {
  expect(ui).toHaveClass(expectedClass);
};
