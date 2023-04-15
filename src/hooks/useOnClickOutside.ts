import { useEffect, RefObject } from "react";

type EventHandler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: EventHandler
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}

export default useOnClickOutside;

// Path: src\hooks\useOnClickOutside.ts
/**
 * A custom hook that calls a callback function when a click or touch event occurs outside of a specified element.
 * @fileoverview This file contains the source code for the useOnClickOutside hook.
 * @param {RefObject<T>} ref - The reference to the element to check for clicks or touches outside of.
 * @param {EventHandler} callback - The callback function to call when a click or touch event occurs outside of the specified element.
 * @returns {void}
 * @template T - The type of the element to check for clicks or touches outside of.
 *
 * @example  const modalRef = useRef(null);   useOnClickOutside(modalRef, onClose);
 *
 *
 * Inspired by https://usehooks.com/useOnClickOutside/
 * @author Pol Gubau Amores
 * @version 0.0.42
 * @since 0.0.42
 *
 */
