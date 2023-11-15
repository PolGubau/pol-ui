import { getLocalStorage, setToLocalStorage, removeFromLocalStorage } from "./storageFunctions";

describe("localStorage functions", () => {
	// Mocking localStorage
	const localStorageMock = (() => {
		let store: { [key: string]: string } = {};
		return {
			getItem: (key: string) => store[key] || null,
			setItem: (key: string, value: string) => {
				store[key] = value.toString();
			},
			removeItem: (key: string) => {
				delete store[key];
			},
			clear: () => {
				store = {};
			},
		};
	})();

	Object.defineProperty(window, "localStorage", { value: localStorageMock });

	afterEach(() => {
		localStorageMock.clear();
	});

	test("getLocalStorage returns initial value if key is not present", () => {
		const key = "testKey";
		const initialValue = "initial";
		const result = getLocalStorage(key, initialValue);
		expect(result).toBe(initialValue);
	});

	test("getLocalStorage returns stored value if key is present", () => {
		const key = "testKey";
		const storedValue = "stored";
		localStorageMock.setItem(key, JSON.stringify(storedValue));
		const result = getLocalStorage(key, "initial");
		expect(result).toBe(storedValue);
	});

	test("setToLocalStorage stores value correctly", () => {
		const key = "testKey";
		const value = "stored";
		setToLocalStorage(key, value);
		const storedValue = localStorageMock.getItem(key);
		expect(storedValue).toBe(JSON.stringify(value));
	});

	test("removeFromLocalStorage removes value correctly", () => {
		const key = "testKey";
		const value = "stored";
		localStorageMock.setItem(key, JSON.stringify(value));
		removeFromLocalStorage(key);
		const storedValue = localStorageMock.getItem(key);
		expect(storedValue).toBeNull();
	});
});
