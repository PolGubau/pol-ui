// storageFunctions.test.ts
import { getLocalStorage, setToLocalStorage, removeFromLocalStorage } from "./storageFunctions";

// Mocking localStorage
const localStorageMock = (function () {
	let store: Record<string, string> = {};
	return {
		getItem: function (key: string) {
			return store[key] || null;
		},
		setItem: function (key: string, value: string) {
			store[key] = value.toString();
		},
		removeItem: function (key: string) {
			delete store[key];
		},
		clear: function () {
			store = {};
		},
	};
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Storage Functions", () => {
	beforeEach(() => {
		localStorageMock.clear();
	});

	it("the 3 functions should be defined", () => {
		expect(getLocalStorage).toBeDefined();
		expect(setToLocalStorage).toBeDefined();
		expect(removeFromLocalStorage).toBeDefined();
	});

	it("should get a value from localStorage", () => {
		const key = "testKey";
		const initialValue = "defaultValue";
		setToLocalStorage(key, initialValue);

		const retrievedValue = getLocalStorage(key, "fallbackValue");
		expect(retrievedValue).toBe(initialValue);
	});

	it("should set a value in localStorage", () => {
		const key = "testKey";
		const value = { some: "data" };
		setToLocalStorage(key, value);

		const retrievedValue = JSON.parse(localStorageMock.getItem(key)!);
		expect(retrievedValue).toEqual(value);
	});

	it("should remove a value from localStorage", () => {
		const key = "testKey";
		setToLocalStorage(key, "valueToRemove");

		removeFromLocalStorage(key);
		const retrievedValue = localStorageMock.getItem(key);
		expect(retrievedValue).toBeNull();
	});
});
