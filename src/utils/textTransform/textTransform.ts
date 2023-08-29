/**
 * Converts a string to camel case.
 * @param {string} str - The string to convert.
 * @returns {string} The camel-cased string.
 */
export function toCamelCase(str: string): string {
	return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
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

export function truncateString(str: string, length: number = 50, suffix: string = "..."): string {
	if (str.length === 0) return str;
	return str.length > length ? str.substring(0, length - suffix.length) + suffix : str;
}

export function formatString(str: string): string {
	const result = str.replace(/([a-z])([A-Z])/g, "$1 $2");
	return capitalize(result.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").trim());
}

export const randomString = (length: number): string => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let result = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}
	return result;
};

export const lowerAndNoSpace = (str: string): string => {
	return str.toLowerCase().replace(/\s/g, "");
};

export interface IShortenOptions {
	separator?: string;
	segmentLength?: number;
	termLength?: number;
}

export function shorten(value: string, options: IShortenOptions = {}): string {
	const { separator = "__", termLength = 2 } = options;

	const segments = value.split(separator);
	const shortSegments = segments.map((segment) => {
		const words = segment.split(/(?=[A-Z\xC0-\xDF])/); // Split camel-cased words
		const shortWords = words.map((word) => word.slice(0, termLength));
		return shortWords.join("");
	});

	return shortSegments.join(separator);
}
