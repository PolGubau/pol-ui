import {
  toCamelCase,
  toTitleCase,
  toKebabCase,
  toSnakeCase,
  toUpperCase,
  toLowerCase,
} from "./textTransform";

describe("toCamelCase()", () => {
  it("should convert a hyphenated string to camel case", () => {
    expect(toCamelCase("some-hyphenated-string")).toBe("someHyphenatedString");
  });

  it("should convert an underscored string to camel case", () => {
    expect(toCamelCase("some_underscored_string")).toBe(
      "someUnderscoredString"
    );
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
    expect(toTitleCase("Some Title Case String")).toBe(
      "Some Title Case String"
    );
  });
});

describe("toKebabCase()", () => {
  it("should convert a camel-cased string to kebab case", () => {
    expect(toKebabCase("someCamelCasedString")).toBe("some-camel-cased-string");
  });

  it("should convert an underscored string to kebab case", () => {
    expect(toKebabCase("some_underscored_string")).toBe(
      "some-underscored-string"
    );
  });

  it("should not modify a string that is already in kebab case", () => {
    expect(toKebabCase("some-kebab-case-string")).toBe(
      "some-kebab-case-string"
    );
  });
});

describe("toSnakeCase()", () => {
  it("should convert a camel-cased string to snake case", () => {
    expect(toSnakeCase("someCamelCasedString")).toBe("some_camel_cased_string");
  });

  it("should convert a hyphenated string to snake case", () => {
    expect(toSnakeCase("some-hyphenated-string")).toBe(
      "some_hyphenated_string"
    );
  });

  it("should not modify a string that is already in snake case", () => {
    expect(toSnakeCase("some_snake_case_string")).toBe(
      "some_snake_case_string"
    );
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
