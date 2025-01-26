import { describe, expect, it } from "vitest";
import { getValueFromPath } from "./get-value-path";

describe("getValueFromPath", () => {
  it("should return the correct value for a valid path", () => {
    const obj = { a: { b: "c" } };
    const result = getValueFromPath(obj, "a.b");
    expect(result).toBe("c");
  });

  it("should return null for a non-existent path", () => {
    const obj = { a: { b: "c" } };
    const result = getValueFromPath(obj, "a.d");
    expect(result).toBeNull();
  });

  it("should return the stringified number when the value is a number", () => {
    const obj = { a: { b: 123 } };
    const result = getValueFromPath(obj, "a.b");
    expect(result).toBe("123");
  });

  it("should return null if the value is neither a string nor a number", () => {
    const obj = { a: { b: { nested: [] } } };
    const result = getValueFromPath(obj, "a.b.nested");
    expect(result).toBeNull();
  });

  it("should handle undefined or null as the object", () => {
    const result1 = getValueFromPath(undefined, "a.b");
    const result2 = getValueFromPath(null, "a.b");
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });

  it("should return null if the path is empty", () => {
    const obj = { a: { b: "c" } };
    const result = getValueFromPath(obj, "");
    expect(result).toBeNull();
  });
});
