"use client";

import { type RefObject, useEffect, useRef } from "react";
type Handler = (event: MouseEvent | TouchEvent) => void;

/**
 * @name useClickOutside
 * @description A custom hook that calls a callback function when a click or touch event occurs outside of a specified element.
 * @fileoverview This file contains the source code for the useOnClickOutside hook.
 * @param {RefObject<T>} handler - The reference to the element to check for clicks or touches outside of.
 * @param {EventHandler} events - The callback function to call when a click or touch event occurs outside of the specified element.
 * @returns {void}
 * @template T - The type of the element to check for clicks or touches outside of.
 * @example const modalRef = useRef(null);   useOnClickOutside(modalRef, onClose);

 */
function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: Handler,
  events: ("mousedown" | "mouseup" | "touchstart" | "touchend")[] = ["mousedown", "touchstart"],
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    for (const event of events) {
      document.addEventListener(event, listener);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, listener);
      }
    };
  }, [handler, events]);

  return ref;
}

export { useClickOutside };
