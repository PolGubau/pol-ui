// sortingFunctions.test.ts
import { sortStrings, sortNumbers, sortDates } from "./sorters";

describe("Sorting Functions", () => {
	it("should sort an array of strings in ascending order", () => {
		const unsortedStrings = ["banana", "apple", "cherry", "date"];
		const sortedStrings = sortStrings(unsortedStrings);
		expect(sortedStrings).toEqual(["apple", "banana", "cherry", "date"]);
	});

	it("should sort an array of numbers in ascending order", () => {
		const unsortedNumbers = [9, 2, 5, 1, 7];
		const sortedNumbers = sortNumbers(unsortedNumbers);
		expect(sortedNumbers).toEqual([1, 2, 5, 7, 9]);
	});

	it("should sort an array of dates in ascending order", () => {
		const date1 = new Date("2023-08-15");
		const date2 = new Date("2023-08-16");
		const date3 = new Date("2023-08-14");
		const unsortedDates = [date1, date2, date3];
		const sortedDates = sortDates(unsortedDates);
		expect(sortedDates).toEqual([date3, date1, date2]);
	});
});
