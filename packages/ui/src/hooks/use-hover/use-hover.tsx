"use client";

import { type RefObject, useEffect } from "react";

import { useBoolean } from "../use-boolean";

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
  const { value, setFalse, setTrue } = useBoolean(false);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const handleMouseEnter = () => {
      setTrue();
    };
    const handleMouseLeave = () => {
      setFalse();
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef]);

  return value;
}
