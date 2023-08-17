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
/**
 * Builds abbreviated string from given string;
 */
export function abbreviate(str: string, abbrLettersCount: number = 1): string {
	const words = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").split(" ");
	return words.reduce((res, word) => {
		res += word.substr(0, abbrLettersCount);
		return res;
	}, "");
}

export interface IShortenOptions {
	/** String used to split "segments" of the alias/column name */
	separator?: string;
	/** Maximum length of any "segment" */
	segmentLength?: number;
	/** Length of any "term" in a "segment"; "OrderItem" is a segment, "Order" and "Items" are terms */
	termLength?: number;
}

/**
 * Shorten a given `input`. Useful for RDBMS imposing a limit on the
 * maximum length of aliases and column names in SQL queries.
 *
 * @param input String to be shortened.
 * @param options Default to `4` for segments length, `2` for terms length, `'__'` as a separator.
 *
 * @return Shortened `input`.
 *
 * @example
 * // returns: "UsShCa__orde__mark__dire"
 * shorten('UserShoppingCart__order__market__director')
 *
 * // returns: "cat_wit_ver_lon_nam_pos_wit_ver_lon_nam_pos_wit_ver_lon_nam"
 * shorten(
 *   'category_with_very_long_name_posts_with_very_long_name_post_with_very_long_name',
 *   { separator: '_', segmentLength: 3 }
 * )
 *
 * // equals: UsShCa__orde__mark_market_id
 * `${shorten('UserShoppingCart__order__market')}_market_id`
 */
export function shorten(input: string, options: IShortenOptions = {}): string {
	const { segmentLength = 4, separator = "__", termLength = 2 } = options;

	const segments = input.split(separator);
	const shortSegments = segments.reduce((acc: string[], val: string) => {
		// split the given segment into many terms based on an eventual camel cased name
		const segmentTerms = val.replace(/([a-z\xE0-\xFF])([A-Z\xC0-\xDF])/g, "$1 $2").split(" ");
		// "OrderItemList" becomes "OrItLi", while "company" becomes "comp"
		const length = segmentTerms.length > 1 ? termLength : segmentLength;
		const shortSegment = segmentTerms.map((term) => term.substr(0, length)).join("");

		acc.push(shortSegment);
		return acc;
	}, []);

	return shortSegments.join(separator);
}
