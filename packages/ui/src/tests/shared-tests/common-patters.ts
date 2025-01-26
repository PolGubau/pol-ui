import { userEvent } from "@storybook/test";
// import userEvent from "@testing-library/user-event";
import { expect } from "@storybook/test";
/**
 * Clear an input field and check that it is empty.
 * @param ui Input element.
 * @returns The input element.
 * @throws If the input is not empty.
 *
 * @example
 * ```tsx
 * const { container } = render(<Input />);
 * const input = container.querySelector("input");
 * await clearAndCheckEmpty(input);
 * ```
 *
 */
export const clearAndCheckEmpty = async (ui: HTMLElement) => {
  await userEvent.clear(ui);
  expect(ui).toHaveValue("");
};

/**
 * Type text into a form field and check that the value is correct.
 * @param ui Input element.
 * @param valueToType Value to type.
 * @returns The input element.
 *
 *
 */
export const typeAndCheckValue = async (ui: HTMLElement, valueToType: string) => {
  await userEvent.type(ui, valueToType);
  await expect(ui).toHaveValue(valueToType);
};

export const getNormalizedText = (element: HTMLElement): string => {
  return element.textContent?.trim().replace(/\s+/g, " ") || "";
};

export const findMenuItemByNormalizedText = (container: HTMLElement, text: string): HTMLElement | null => {
  const elements = container.querySelectorAll("*"); // Selecciona todos los elementos dentro del contenedor
  for (const element of elements) {
    if (getNormalizedText(element as HTMLElement) === text) {
      return element as HTMLElement;
    }
  }
  return null;
};
