import { useEffect, useState } from "react";

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
export function useMergeValue<T>(defaultValue: T, options?: UseMergeValueOptions<T>) {
  const [internalValue, setInternalValue] = useState<T>(options?.value ?? defaultValue);

  useEffect(() => {
    if (options?.value !== undefined) {
      setInternalValue(options.value);
    }
  }, [options?.value]);

  const setValue = (val: T) => {
    if (options?.value === undefined) {
      setInternalValue(val);
    }
    options?.onChange?.(val);
  };

  return [internalValue, setValue] as const;
}
