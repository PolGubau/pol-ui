"use client";

import { useEffect, useState } from "react";

import { useDebounce } from "../../hooks";
import { Input } from "../Input/Input";
import type { InputProps } from "../Input/props";

export interface DebouncedInputProps extends Omit<InputProps, "onChange" | "value"> {
  delay?: number;
  onChange: (value: string) => void;
  value: string;
}

/**
 * DebouncedInput component
 * @description The DebouncedInput component is used to create an input that debounces the value before calling the onChange callback, useful for search inputs
 * @returns React.FC<DebouncedInputProps>
 */
export const DebouncedInput = ({
  value: propValue,
  onChange: propOnChange,
  delay = 500,
  ref,
  ...props
}: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState<string>(propValue);
  const debouncedValue = useDebounce<string>(inputValue, delay);

  useEffect(() => {
    // Pass the debounced value to the propOnChange after the specified delay
    const timer = setTimeout(() => {
      propOnChange(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [debouncedValue, propOnChange, delay]);

  // Update local state when the propValue changes (e.g., parent re-renders)
  useEffect(() => {
    setInputValue(propValue);
  }, [propValue]);

  return (
    <Input
      {...props}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      ref={ref}
    />
  );
};
