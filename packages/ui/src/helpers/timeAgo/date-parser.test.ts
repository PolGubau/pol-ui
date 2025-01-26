import { describe, expect, it } from "vitest";
import { dateParser } from "./date-parser";

describe("dateParser", () => {
  it("should parse a valid Date object", () => {
    const dateInput = new Date(2024, 11, 18); // December 18, 2024
    const parsedDate = dateParser(dateInput);

    expect(parsedDate).toEqual(dateInput); // Should return the same date object
  });

  it("should parse a valid timestamp number", () => {
    const timestamp = 1715289600000; // Example timestamp corresponding to a date
    const parsedDate = dateParser(timestamp);

    expect(parsedDate).toEqual(new Date(timestamp)); // Should return the equivalent date
  });

  it("should parse a valid ISO date string", () => {
    const isoDateString = "2024-12-18T00:00:00Z";
    const parsedDate = dateParser(isoDateString);

    expect(parsedDate).toEqual(new Date(isoDateString)); // Should return the same parsed date
  });

  it("should parse an invalid date string as a valid date object", () => {
    const invalidDateString = "18-12-2024"; // This is not a valid ISO format
    const parsedDate = dateParser(invalidDateString);

    // Manually adjust the date parsing to reflect the correct interpretation
    const expectedDate = new Date(Date.UTC(2024, 11, 18)); // December 18, 2024

    expect(parsedDate).toEqual(expectedDate);
  });

  it("should return an invalid date for an unrecognized format", () => {
    const invalidDate = "invalid date string";
    const parsedDate = dateParser(invalidDate);

    expect(parsedDate).toEqual(new Date("invalid date string")); // Should return an invalid date object
  });

  it("should return the same date if already valid", () => {
    const validDateString = "2024-12-18";
    const parsedDate = dateParser(validDateString);

    expect(parsedDate).toEqual(new Date(validDateString)); // Should return the same parsed date
  });

  it("should handle edge cases like empty string or null", () => {
    const emptyString = "";
    const parsedEmpty = dateParser(emptyString);

    expect(parsedEmpty).toEqual(new Date("")); // Should return an invalid date

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const nullInput: any = null;
    const parsedNull = dateParser(nullInput);

    expect(parsedNull).toEqual(new Date(nullInput)); // Should return an invalid date
  });
});
