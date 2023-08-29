import {
	toCamelCase,
	toKebabCase,
	capitalize,
	removeWhitespace,
	reverseString,
	truncateString,
	formatString,
	randomString,
	lowerAndNoSpace,
	shorten,
} from "./textTransform";

describe("String utility functions", () => {
	test("toCamelCase", () => {
		expect(toCamelCase("hello-world")).toBe("helloWorld");
		expect(toCamelCase("this_is_a_test")).toBe("thisIsATest");
	});

	test("toKebabCase", () => {
		expect(toKebabCase("helloWorld")).toBe("hello-world");
		expect(toKebabCase("thisIsATest")).toBe("this-is-atest");
	});

	test("capitalize", () => {
		expect(capitalize("hello")).toBe("Hello");
		expect(capitalize("world")).toBe("World");
	});

	test("removeWhitespace", () => {
		expect(removeWhitespace("  Hello  World  ")).toBe("HelloWorld");
		expect(removeWhitespace("   ")).toBe("");
	});

	test("reverseString", () => {
		expect(reverseString("hello")).toBe("olleh");
		expect(reverseString("world")).toBe("dlrow");
	});

	test("truncateString", () => {
		expect(truncateString("This is a long sentence.", 10)).toBe("This is...");
		expect(truncateString("Short text.", 20)).toBe("Short text.");
		expect(truncateString("", 5)).toBe("");
	});

	test("formatString", () => {
		expect(formatString("helloWorld")).toBe("Hello World");
		expect(formatString("thisIsATest")).toBe("This Is A Test");
		expect(formatString("")).toBe("");
	});

	test("randomString", () => {
		const randomStr = randomString(10);
		expect(randomStr).toHaveLength(10);
		const emptyRandomStr = randomString(0);
		expect(emptyRandomStr).toBe("");
	});

	test("lowerAndNoSpace", () => {
		expect(lowerAndNoSpace("  Hello  World  ")).toBe("helloworld");
		expect(lowerAndNoSpace("This is a test")).toBe("thisisatest");
		expect(lowerAndNoSpace("")).toBe("");
	});

	test("shorten", () => {
		const options = { separator: "__", termLength: 2 };
		expect(shorten("UserShoppingCart__order__market", options)).toBe("UsShCa__or__ma");
		expect(shorten("")).toBe("");
	});
});
