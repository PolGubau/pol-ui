// storageFunctions.ts

/**
 * Function to get a value from localStorage
 * @param key The key for the value in localStorage
 * @param initialValue The initial value to set if key is not present
 * @returns The retrieved or initialized value
 */
export function getLocalStorage(key: string, initialValue: any): any {
	const value = localStorage.getItem(key);
	if (!value) {
		setToLocalStorage(key, initialValue);
		return initialValue;
	}
	return JSON.parse(value);
}

/**
 * Function to set a value in localStorage
 * @param key The key for the value in localStorage
 * @param value The value to set in localStorage
 */
export function setToLocalStorage(key: string, value: any): void {
	localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Function to remove a value from localStorage
 * @param key The key for the value in localStorage to be removed
 */
export function removeFromLocalStorage(key: string): void {
	localStorage.removeItem(key);
}
