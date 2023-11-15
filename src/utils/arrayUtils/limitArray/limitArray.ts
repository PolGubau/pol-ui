// Function to limit an array to a certain number of elements (first or last)

export const limitArray = <T>(arr: T[], limit: number, first: boolean = true): T[] => {
	if (limit < 0) return [];
	if (limit === 0) return arr;
	if (limit >= arr.length) return arr;

	return first ? arr.slice(0, limit) : arr.slice(-limit);
};

// Function to get an array of strings and return a string with the elements separated by commas and (...) if the array is longer than the limit, if and is true, the last element will be preceded by "and"

export const arrayToString = (arr: string[], limit: number = 3, and?: string): string => {
	if (arr.length === 0) return "";
	if (arr.length === 1) return arr[0];
	if (arr.length === 2) return arr.join(" and ");

	const limitedArray = limitArray(arr, limit, true);

	const hiddenElements = arr.length - limit;

	const plusPart = and
		? ` ${and} ${arr.length - limit} more`
		: hiddenElements > 0
		? ` +${hiddenElements}`
		: "";

	const string = `${limitedArray.join(", ")}${
		and ? `, ${and} ${arr.length - limit} more` : plusPart
	}`;

	return string;
};
