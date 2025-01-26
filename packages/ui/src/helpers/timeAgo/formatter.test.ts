import { describe, expect, it } from "vitest";
import defaultFormatter from "./formatter";

describe("defaultFormatter", () => {
  it("should format correctly when the value is 1 (no plural unit)", () => {
    const result = defaultFormatter(1, "hour", "ago");

    expect(result).toBe("1 hour ago"); // Should not pluralize the unit
  });

  it("should format correctly when the value is greater than 1 (plural unit)", () => {
    const result = defaultFormatter(5, "hour", "ago");

    expect(result).toBe("5 hours ago"); // Should pluralize the unit
  });

  it("should format correctly with different suffixes", () => {
    const resultWithSuffix = defaultFormatter(3, "minute", "later");
    const resultWithEmptySuffix = defaultFormatter(3, "minute", "");

    expect(resultWithSuffix).toBe("3 minutes later"); // With 'later' suffix
    expect(resultWithEmptySuffix).toBe("3 minutes "); // With an empty suffix
  });

  it("should return the formatted string even for zero", () => {
    const result = defaultFormatter(0, "minute", "left");

    expect(result).toBe("0 minutes left"); // Even with 0, it should pluralize the unit
  });

  it("should handle edge case with large values", () => {
    const result = defaultFormatter(1000, "day", "from now");

    expect(result).toBe("1000 days from now"); // Should handle large numbers
  });
});
