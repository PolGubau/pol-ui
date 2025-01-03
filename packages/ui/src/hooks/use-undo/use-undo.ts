"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseUndoHook<T> {
  value: T;
  onChange: (newValue: T) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

function useUndo<T extends string | Record<string, unknown>>(
  key: string,
  initialValue: T,
  debounceDelay = 400,
): UseUndoHook<T> {
  const [value, setValue] = useState<T>(initialValue);
  const historyRef = useRef<T[]>([initialValue]);
  const currentPositionRef = useRef<number>(0);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);
  const debounceTimerRef = useRef<number | null>(null);

  // Update canUndo and canRedo
  useEffect(() => {
    setCanUndo(currentPositionRef.current > 0);
    setCanRedo(currentPositionRef.current < historyRef.current.length - 1);
  }, [value]); // Depend on value to trigger updates after undo/redo

  // Load initial value from localStorage
  useEffect(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      try {
        const parsedValue = JSON.parse(savedValue) as T;
        setValue(parsedValue);
        historyRef.current = [parsedValue];
        currentPositionRef.current = 0;
      } catch (error) {
        console.error("Error parsing value from localStorage", error);
      }
    }
  }, [key]);

  const updateHistory = useCallback((newValue: T) => {
    const newHistory = [...historyRef.current.slice(0, currentPositionRef.current + 1), newValue];
    historyRef.current = newHistory;
    currentPositionRef.current = newHistory.length - 1;
  }, []);

  const onChange = useCallback(
    (newValue: T) => {
      setValue(newValue);

      if (debounceTimerRef.current !== null) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        if (typeof newValue === "string" && newValue.trim()) {
          updateHistory(newValue);
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      }, debounceDelay) as unknown as number;
    },
    [debounceDelay, updateHistory],
  );

  const undo = useCallback(() => {
    const newPosition = Math.max(currentPositionRef.current - 1, 0);
    if (newPosition !== currentPositionRef.current) {
      currentPositionRef.current = newPosition;
      const newValue = historyRef.current[newPosition];
      if (!newValue) {
        newValue && setValue(newValue);
      }
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, []);

  const redo = useCallback(() => {
    const newPosition = Math.min(currentPositionRef.current + 1, historyRef.current.length - 1);
    if (newPosition !== currentPositionRef.current) {
      currentPositionRef.current = newPosition;
      const newValue = historyRef.current[newPosition];
      if (!newValue) {
        newValue && setValue(newValue);
      }
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }, []);

  const clear = useCallback(() => {
    setValue(initialValue);
    historyRef.current = [initialValue];
    currentPositionRef.current = 0;
    localStorage.removeItem(key);
  }, [initialValue, key]);

  return { value, onChange, undo, redo, clear, canUndo, canRedo };
}

export { useUndo, type UseUndoHook };
