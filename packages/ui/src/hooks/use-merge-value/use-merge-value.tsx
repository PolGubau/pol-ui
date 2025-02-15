import { useCallback, useState } from "react";

interface UseMergeValueOptions<T> {
  value?: T;
  onChange?: (value: T) => void;
}

/**
 * A custom hook that manages a component's internal state while allowing
 * the use of an externally controlled value (`value` and `onChange`) if provided.
 *
 * @template T The type of the state.
 * @param defaultValue The initial default value if a controlled `value` is not provided.
 * @param options Options for providing a controlled `value` and an `onChange` handler.
 * @returns A tuple with the current state and the function to update it.
 */
export function useMergeValue<T>(defaultValue: T, options: UseMergeValueOptions<T> = {}): [T, (newValue: T) => void] {
  const { value, onChange } = options;

  // Internal state used if `value` is not provided.
  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  /**
   * Updates the current value. If `onChange` is defined, it uses it to notify changes.
   * Otherwise, it updates the internal state.
   */
  const setValue = useCallback(
    (newValue: T) => {
      if (onChange) {
        onChange(newValue); // If `onChange` is provided, delegate handling.
      } else {
        setInternalValue(newValue); // Otherwise, update the internal state.
      }
    },
    [onChange], // Only depends on `onChange`.
  );

  // Use `value` if it is defined; otherwise, use the internal state.
  // const currentValue = value !== undefined ? value : internalValue;
  // const currentValue = value ?? internalValue;
  const currentValue = value !== undefined ? value : (internalValue ?? defaultValue);

  return [currentValue, setValue];
}
