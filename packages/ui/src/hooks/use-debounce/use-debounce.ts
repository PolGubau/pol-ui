'use client';

import { useEffect, useState } from 'react';

/**
 * @name useDebounce
 * @description Debounce a value for a given delay
 * @param value <T> value to debounce 
 * @param delay <number> (optional) default 500
 * @returns <T> debounced value
 * @example
 * const [value, setValue] = useState<string>('');
 * const debouncedValue = useDebounce<string>(value, 1000);
 *  @example
 * const [value, setValue] = useState<string>('');
 * const debouncedValue = useDebounce<string>(value);
 * 
 * useEffect(() => {
 * console.log(debouncedValue);
 * }, [debouncedValue]);
 *  
 * 
 * @author Pol Gubau Amores - https://polgubau.com
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => { setDebouncedValue(value); }, delay ?? 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
