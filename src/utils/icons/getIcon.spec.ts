import { getIcon } from "./getIcon";

describe("getIcon function", () => {
	test("getIcon function returns a React Component if name exists", () => {
		const result = getIcon("check");
		expect(result).not.toBeNull();
	});
	test("getIcon function returns null if name doesn't exist", () => {
		const result = getIcon("test-000001");
		expect(result).toBeNull();
	});

	test("getIcon function returns null if name is empty", () => {
		const result = getIcon("");
		expect(result).toBeNull();
	});
});
