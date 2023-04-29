/**
 * Converts a string to camel case.
 * @param {string} str - The string to convert.
 * @returns {string} The camel-cased string.
 */
export function toCamelCase(str: string): string {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 */
export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
/**
 * Converts a string to kebab case.
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-cased string.
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

/**
 * Converts a string to snake case.
 * @param {string} str - The string to convert.
 * @returns {string} The snake-cased string.
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();
}

/**
 * Converts a string to upper case.
 * @param {string} str - The string to convert.
 * @returns {string} The uppercased string.
 */
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

/**
 * Converts a string to lower case.
 * @param {string} str - The string to convert.
 * @returns {string} The lowercased string.
 */
export function toLowerCase(str: string): string {
  return str.toLowerCase();
}
/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Removes all whitespace from a string.
 * @param {string} str - The string to remove whitespace from.
 * @returns {string} The whitespace-free string.
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s/g, "");
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Truncates a string to a specified length.
 * @param {string} str - The string to truncate.
 * @param {number} length - The maximum length of the truncated string.
 * @param {string} suffix - Optional suffix to append to truncated string. Defaults to '...'.
 * @returns {string} The truncated string.
 */
export function truncateString(
  str: string,
  length: number,
  suffix: string = "..."
): string {
  return str.length > length
    ? str.substring(0, length - suffix.length) + suffix
    : str;
}


