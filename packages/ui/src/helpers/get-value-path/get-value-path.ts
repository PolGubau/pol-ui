/**
 * Retrieve a value from a nested object path.
 * @param option - The object to extract the value from.
 * @param path - The string path to the desired property.
 * @returns The value as a string or null if not found.
 * @example getValueFromPath({ a: { b: 'c' } }, 'a.b') // 'c'
 */

import { get } from "../get/get";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Option = Record<string, any> | undefined | null;
export const getValueFromPath = (option: Option, path: string): string | null => {
  if (!option) {
    return null;
  }
  const keyValue = get(option, path);
  if (typeof keyValue === "string" || typeof keyValue === "number") {
    return keyValue.toString();
  }
  return null;
};
