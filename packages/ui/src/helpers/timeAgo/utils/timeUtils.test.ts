import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { dateParser } from "../date-parser";
import { DAY, HOUR, MINUTE, MONTH, WEEK, YEAR, calculateElapsedTime } from "./timeUtils";

vi.mock("../date-parser", () => ({
  dateParser: vi.fn(),
}));

describe("calculateElapsedTime", () => {
  const currentTime = Date.now();

  beforeEach(() => {
    // Reset mock before each test
    (dateParser as Mock).mockClear();
  });

  it("should return the correct elapsed time in seconds", () => {
    const now = currentTime;
    const pastDate = now - 30 * 1000; // 30 seconds ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([30, "second", "ago"]);
  });

  it("should return the correct elapsed time in minutes", () => {
    const now = currentTime;
    const pastDate = now - 5 * MINUTE * 1000; // 5 minutes ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([5, "minute", "ago"]);
  });

  it("should return the correct elapsed time in hours", () => {
    const now = currentTime;
    const pastDate = now - 3 * HOUR * 1000; // 3 hours ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([3, "hour", "ago"]);
  });

  it("should return the correct elapsed time in days", () => {
    const now = currentTime;
    const pastDate = now - 2 * DAY * 1000; // 2 days ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([2, "day", "ago"]);
  });

  it("should return the correct elapsed time in weeks", () => {
    const now = currentTime;
    const pastDate = now - 3 * WEEK * 1000; // 3 weeks ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([3, "week", "ago"]);
  });

  it("should return the correct elapsed time in months", () => {
    const now = currentTime;
    const pastDate = now - 2 * MONTH * 1000; // 2 months ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([2, "month", "ago"]);
  });

  it("should return the correct elapsed time in years", () => {
    const now = currentTime;
    const pastDate = now - 1 * YEAR * 1000; // 1 year ago
    (dateParser as Mock).mockReturnValueOnce(new Date(pastDate));

    const result = calculateElapsedTime(pastDate, now);
    expect(result).toEqual([1, "year", "ago"]);
  });

  it("should return the same array if the index is out of bounds", () => {
    const now = currentTime;
    const invalidDate = "invalid date"; // Invalid date
    (dateParser as Mock).mockReturnValueOnce(null);

    const result = calculateElapsedTime(invalidDate, now);
    expect(result).toEqual([0, "", "ago"]);
  });

  it("should handle future dates (from now)", () => {
    const now = currentTime;
    const futureDate = now + 5 * MINUTE * 1000; // 5 minutes from now
    (dateParser as Mock).mockReturnValueOnce(new Date(futureDate));

    const result = calculateElapsedTime(futureDate, now);
    expect(result).toEqual([5, "minute", "from now"]);
  });

  it("should return the same array if the date is invalid", () => {
    const now = currentTime;
    const invalidDate = "invalid date"; // Invalid date
    (dateParser as Mock).mockReturnValueOnce(null);

    const result = calculateElapsedTime(invalidDate, now);
    expect(result).toEqual([0, "", "ago"]);
  });
});
