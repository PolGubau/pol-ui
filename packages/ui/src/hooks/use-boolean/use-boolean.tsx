"use client";

import { type Dispatch, type SetStateAction, useCallback, useMemo, useState } from "react";

interface UseBooleanOutput {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  isTrue: boolean;
  isFalse: boolean;
}

export function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);
  const isTrue = useMemo(() => value === true, [value]);
  const isFalse = useMemo(() => value === false, [value]);

  return { value, setValue, setTrue, setFalse, toggle, isTrue, isFalse };
}
