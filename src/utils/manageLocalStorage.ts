// Function to get a value from localStorage
export function getLocalStorage(key: string, initialValue: any): any {
	const value = localStorage.getItem(key);
	if (!value) {
		setToLocalStorage(key, initialValue);
		return initialValue;
	}
	return JSON.parse(value);
}

// Function to set a value in localStorage
export function setToLocalStorage(key: string, value: any): void {
	localStorage.setItem(key, JSON.stringify(value));
}

// Function to remove a value from localStorage
export function removeFromLocalStorage(key: string): void {
	localStorage.removeItem(key);
}
