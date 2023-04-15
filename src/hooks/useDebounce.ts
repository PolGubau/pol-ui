import { useEffect, useState } from "react";

/**
 * A custom hook that debounces a value or function.
 *
 * @param {T | (() => T)} value - The value or function to debounce.
 * @param {number} delay - The amount of time (in milliseconds) to debounce the value or function.
 * @returns {T | undefined} - The debounced value or function.
 */
function useDebounce<T>(value: T | (() => T), delay: number): T | undefined {
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(
    undefined
  );

  useEffect(() => {
    // If the value is a function, invoke it to get the current value.
    const currentValue =
      typeof value === "function" ? (value as () => T)() : value;

    // Set a timeout to update the debounced value after the delay.
    const timeoutId = setTimeout(() => {
      setDebouncedValue(currentValue);
    }, delay);

    // Clear the timeout if the value or delay changes.
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
