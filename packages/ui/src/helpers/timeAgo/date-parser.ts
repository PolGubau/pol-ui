/**
 * Parses a given date input and returns a Date object.
 *
 * The input can be a string, number, or Date object. If the input is a valid date,
 * it returns the corresponding Date object. If the input is a string that does not
 * directly parse to a valid date, it attempts to parse the string as an ISO date.
 *
 * @param date - The date input to parse. Can be a string, number, or Date object.
 * @returns A Date object representing the parsed date.
 */

const datePattern = /(\d+)-(\d+)-(\d+)/;

export function dateParser(date: string | number | Date): Date {
  const parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }

  // Try custom parsing for non-ISO formats like "18-12-2024"
  const parts = String(date).match(datePattern); // Matches day-month-year format
  if (parts) {
    const [_, day, month, year] = parts;
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  }

  return new Date(Number.NaN); // Return an invalid date if no match is found
}
