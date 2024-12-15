import { describe, expect, it, test } from "vitest";
import {
  capitalize,
  formatString,
  randomString,
  removeWhitespace,
  reverseString,
  toCamelCase,
  toKebabCase,
  toLowerCase,
  toTitleCase,
  toUpperCase,
  truncateString,
} from "./text-transform";

describe("toCamelCase()", () => {
  it("should convert a hyphenated string to camel case", () => {
    expect(toCamelCase("some-hyphenated-string")).toBe("someHyphenatedString");
  });

  it("should convert an underscored string to camel case", () => {
    expect(toCamelCase("some_underscored_string")).toBe("someUnderscoredString");
  });

  it("should not modify a string that is already in camel case", () => {
    expect(toCamelCase("someCamelCaseString")).toBe("someCamelCaseString");
  });
});

describe("toTitleCase()", () => {
  it("should convert a lowercase string to title case", () => {
    expect(toTitleCase("some lowercase string")).toBe("Some Lowercase String");
  });

  it("should convert an uppercase string to title case", () => {
    expect(toTitleCase("SOME UPPERCASE STRING")).toBe("Some Uppercase String");
  });

  it("should not modify a string that is already in title case", () => {
    expect(toTitleCase("Some Title Case String")).toBe("Some Title Case String");
  });
});

describe("toKebabCase()", () => {
  it("should convert a camel-cased string to kebab case", () => {
    expect(toKebabCase("someCamelCasedString")).toBe("some-camel-cased-string");
  });

  it("should convert an underscored string to kebab case", () => {
    expect(toKebabCase("some_underscored_string")).toBe("some_underscored_string");
  });
});

describe("toUpperCase()", () => {
  it("should convert a string to uppercase", () => {
    expect(toUpperCase("some string")).toBe("SOME STRING");
  });

  it("should not modify a string that is already in uppercase", () => {
    expect(toUpperCase("SOME UPPERCASE STRING")).toBe("SOME UPPERCASE STRING");
  });
});

describe("toLowerCase()", () => {
  it("should convert a string to lowercase", () => {
    expect(toLowerCase("SOME STRING")).toBe("some string");
  });

  it("should not modify a string that is already in lowercase", () => {
    expect(toLowerCase("some lowercase string")).toBe("some lowercase string");
  });
});
describe("capitalize", () => {
  test("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  test("should return an empty string if input is empty", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("removeWhitespace", () => {
  test("should remove all whitespace from a string", () => {
    expect(removeWhitespace("Hello world")).toBe("Helloworld");
    expect(removeWhitespace("  Lorem   ipsum  ")).toBe("Loremipsum");
  });

  test("should return an empty string if input is empty", () => {
    expect(removeWhitespace("")).toBe("");
  });
});

describe("reverseString", () => {
  test("should reverse the characters in a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
  });

  test("should return an empty string if input is empty", () => {
    expect(reverseString("")).toBe("");
  });
});

describe("truncateString", () => {
  test("should truncate a string to the specified length", () => {
    expect(truncateString("Hello, world!", 5)).toBe("He...");
    expect(truncateString("Lorem ipsum dolor sit amet", 10, "...")).toBe("Lorem i...");
  });

  test("should not truncate if the string length is less than or equal to the specified length", () => {
    expect(truncateString("Hello, world!", 20)).toBe("Hello, world!");
    expect(truncateString("Lorem ipsum dolor sit amet", 30, "...")).toBe("Lorem ipsum dolor sit amet");
  });

  test("should return an empty string if input is empty", () => {
    expect(truncateString("", 5)).toBe("");
  });
});

describe("randomString", () => {
  it("should generate a random string of the specified length", () => {
    const length = 10;
    const result = randomString(length);

    expect(typeof result).toBe("string");
    expect(result).toHaveLength(length);
  });

  it("should generate unique strings for different calls", () => {
    const length = 10;
    const result1 = randomString(length);
    const result2 = randomString(length);

    expect(result1).not.toBe(result2);
  });
});

describe("formatString", () => {
  it("should convert a PascalCase string to normal with spaces and capitalize the first word", () => {
    const input = "CodeSystem";
    const expectedOutput = "Code System";
    const result = formatString(input);

    expect(result).toBe(expectedOutput);
  });

  it("should handle multiple capital letters correctly", () => {
    const input = "APIRequestHandler";
    const expectedOutput = "API Request Handler";
    const result = formatString(input);

    expect(result).toBe(expectedOutput);
  });

  it("should handle a single capital letter correctly", () => {
    const input = "X";
    const expectedOutput = "X";
    const result = formatString(input);

    expect(result).toBe(expectedOutput);
  });

  it("should handle an empty string correctly", () => {
    const input = "";
    const expectedOutput = "";
    const result = formatString(input);

    expect(result).toBe(expectedOutput);
  });
});
