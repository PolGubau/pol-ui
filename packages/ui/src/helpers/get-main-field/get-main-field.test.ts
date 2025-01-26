import { describe, expect, it } from "vitest";
import { DEFAULT_KEYS } from "../../constants";
import { getMainField } from "./get-main-field";

describe("getMainField", () => {
  it("should return the first label from the predefined list found in the item", () => {
    const item = {
      displayName: "John Doe",
      name: "John",
      firstName: "John",
    };

    const result = getMainField(item);

    // Expect the first matching label 'displayName' to be returned
    expect(result).toEqual({ key: "displayName", value: "John Doe" });
  });

  it("should return the first label from the list if it is found in the item", () => {
    const item = {
      name: "Jane Doe",
      lastName: "Doe",
      locale: "en-US",
    };

    const result = getMainField(item);

    // Expect the first matching label 'name' to be returned
    expect(result).toEqual({ key: "name", value: "Jane Doe" });
  });

  it("should return the first key-value pair if no label is found in the item", () => {
    const item = {
      age: 30,
      country: "US",
    };

    const result = getMainField(item);

    // Expect the first key-value pair 'age' from the item since no label is found
    expect(result).toEqual({ key: "age", value: 30 });
  });

  it("if a item with more priority is null, undefined or empty, it will pass to the next one", () => {
    const item = {
      name: "",
      title: "Mr.",
    };

    const result = getMainField(item);

    // Even though the value for 'name' is falsy (empty string), it should still return 'name'
    expect(result).toEqual({ key: "title", value: "Mr." });
  });

  it("should return the first key-value pair if item is an empty object", () => {
    const item = {};

    const result = getMainField(item);

    // The result will return the first key-value pair of an empty object, if it exists
    expect(result).toEqual({ key: undefined, value: undefined });
  });

  it("should return the first key-value pair if DEFAULT_KEYS is empty", () => {
    // Temporarily change DEFAULT_KEYS to an empty array
    const originalDEFAULT_KEYS = DEFAULT_KEYS;
    DEFAULT_KEYS.length = 0;

    const item = {
      name: "Alice",
      title: "Dr.",
    };

    const result = getMainField(item);

    // Since the DEFAULT_KEYS array is empty, it should return the first item
    expect(result).toEqual({ key: "name", value: "Alice" });

    // Restore the original DEFAULT_KEYS array
    DEFAULT_KEYS.push(...originalDEFAULT_KEYS);
  });

  it("should return the first key-value pair from an object with deeply nested values", () => {
    const item = {
      profile: {
        firstName: "Anna",
        lastName: "Smith",
      },
    };

    const result = getMainField(item);

    // Since no label is found in the top-level object, it will return the first key-value pair, which is 'profile'
    expect(result).toEqual({ key: "profile", value: item.profile });
  });
});
