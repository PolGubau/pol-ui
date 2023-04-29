import { useState, useEffect } from "react";

/**
 * A custom hook that allows you to easily manage data in the browser's localStorage.
 *
 * @param {string} key - The key to use for storing the data in localStorage.
 * @param {any} initialValue - The initial value to use if the key is not found in localStorage.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - A tuple containing the current value and a function to update it.
 *
 * @example
 * const [value, setValue] = useLocalStorage("myValue", "Hello World");
 *
 * @example
 * const [value, setValue] = useLocalStorage("myValue", { name: "John Doe" });
 *
 * @author Pol Gubau Amores
 * @version 0.0.42
 * @since 0.0.42
 *
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Get the initial value from localStorage, or use the initial value passed in.
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Update localStorage whenever the value changes.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return the current value and a function to update it.
  return [value, setValue];
}

export default useLocalStorage;

/**
 * Example to get a value already stored in localStorage
 * @example
 * const [value, setValue] = useLocalStorage("myValue", "Hello World");
 * myValue -> Is the key to get the value
 * "Hello World" -> Is the initial value if the key is not found in localStorage
 *
 * Example to store a value in localStorage
 * @example
 * const [value, setValue] = useLocalStorage("myValue", "Hello World");
 * setValue("Hello World");
 * myValue -> Is the key to get the value
 * "Hello World" -> Is the value to store in localStorage
 * "Hello World" -> Is the initial value if the key is not found in localStorage
 * setValue("Hello World"); -> Is the function to update the value in localStorage
 */
