// sortingFunctions.ts

/**
 * Sorts an array of strings in ascending order.
 * @param arr Array of strings to be sorted
 * @returns Sorted array of strings
 */
export function sortStrings(arr: string[]): string[] {
	return arr.slice().sort((a, b) => a.localeCompare(b));
}

/**
 * Sorts an array of numbers in ascending order.
 * @param arr Array of numbers to be sorted
 * @returns Sorted array of numbers
 */
export function sortNumbers(arr: number[]): number[] {
	return arr.slice().sort((a, b) => a - b);
}

/**
 * Sorts an array of dates in ascending order.
 * @param arr Array of dates to be sorted
 * @returns Sorted array of dates
 */
export function sortDates(arr: Date[]): Date[] {
	return arr.slice().sort((a, b) => a.getTime() - b.getTime());
}
