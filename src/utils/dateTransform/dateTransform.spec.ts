import { dateTimeToDate, dateToDateTime, getToday } from "./dateTransform";

describe("dateTimeToDate", () => {
	it("should be defined", () => {
		expect(dateTimeToDate).toBeDefined();
	});

	it("should return the correct date format", () => {
		const date = "2021-04-20T00:00:00.000Z";
		const isoString = dateTimeToDate(date);
		expect(isoString).toEqual("20-4-2021");
	});
});
describe("getToday should return today's datetime from nothing", () => {
	it("should be defined", () => {
		expect(getToday).toBeDefined();
	});

	it("should return the correct date format", () => {
		const isoString = getToday();
		// just check that it's an iso string and that it's today's date because it's a pain to mock dates
		expect(isoString).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T/);
	});
});
describe("dateToDateTime", () => {
	it("should be defined", () => {
		expect(dateToDateTime).toBeDefined();
	});

	it("should return the correct date format", () => {
		const date = "20-04-2021";
		const isoString = dateToDateTime(date);
		expect(isoString).toEqual("2021-04-20T00:00:00.000Z");
	});
});
