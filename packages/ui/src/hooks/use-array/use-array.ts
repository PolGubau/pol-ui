import { useState } from "react";

type Return<T> = {
  array: T[];
  set: (a: T[]) => void;
  push: (element: T) => void;
  filter: (callback: (element: T, index: number, array: T[]) => boolean) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
};

type OnChange<T> = (value: T) => void;

type UseArray = <T>(defaultValue: T[], callbackOnUpdate?: (array: T[]) => void) => Return<T>;

const useArray: UseArray = <T>(defaultValue: T[], callbackOnUpdate: OnChange<T[]> = () => {}) => {
  const [array, setArray] = useState(defaultValue);

  const set = (a: T[]) => {
    setArray(a);
    callbackOnUpdate(a);
  };

  function push(element: T) {
    setArray((a: T[]) => [...a, element]);
  }

  function filter(callback: (element: T, index: number, array: T[]) => boolean) {
    setArray((a: T[]) => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray((a: T[]) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
  }

  function remove(index: number) {
    setArray((a: T[]) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set, push, filter, update, remove, clear };
};

export default useArray;
