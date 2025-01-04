export type ClassValue =
	| string
	| number
	| boolean
	| null
	| undefined
	| ClassDictionary
	| ClassArray;
export type ClassDictionary = Record<string, unknown>;
export type ClassArray = ClassValue[];

/**
 * Helper function to recursively convert mixed input to a class string.
 * @param mix - The input to convert into a class string.
 * @returns The resulting class string.
 */
function toVal(mix: ClassValue): string {
	let result = "";

	if (
		typeof mix === "string" ||
		(typeof mix === "number" && !Number.isNaN(mix) && mix !== 0)
	) {
		result += mix;
	} else if (Array.isArray(mix)) {
		for (const item of mix) {
			const val = toVal(item);
			if (val) {
				result += (result ? " " : "") + val;
			}
		}
	} else if (typeof mix === "object" && mix !== null) {
		for (const key in mix) {
			if (mix[key]) {
				result += (result ? " " : "") + key;
			}
		}
	} else if (mix === true) {
		// Do nothing
	}

	return result;
}

export type ClsxFn = (...args: ClassValue[]) => string;
/**
 * Combines class names into a single string, filtering out falsy values.
 * @param args - List of class names, objects, or arrays to combine.
 * @returns A single string of combined class names.
 */
export const clsx: ClsxFn = (...args) => {
	return args
		.map(toVal) // Convert each argument to a string
		.filter(Boolean) // Remove falsy values
		.join(" "); // Combine into a single space-separated string
};
