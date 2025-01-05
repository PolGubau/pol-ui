import { isObject } from "../is-object/is-object";

/**
 * Deep clone an object
 * A deep clone is a clone of the source object and all of its children, and their children, and so on.
 * @param source <T> - The source object to clone
 * @returns <T> - A deep clone of the source object
 */
export function cloneDeep<T>(source: T): T {
  if (!isObject(source)) {
    return source;
  }

  const output: Record<string, unknown> = {};

  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }

  return output as T;
}
