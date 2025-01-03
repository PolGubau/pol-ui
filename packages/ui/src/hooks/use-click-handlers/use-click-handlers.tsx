"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseClickHandlersOptions {
  onDoubleClick?: () => void;
  onHoldClick?: () => void;
  holdTime?: number;
}

const useClickHandlers = ({ onDoubleClick, onHoldClick, holdTime = 500 }: UseClickHandlersOptions) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = useCallback(() => {
    setClickCount((prev) => prev + 1);
  }, []);

  const handleMouseDown = useCallback(() => {
    holdTimerRef.current = setTimeout(() => {
      if (onHoldClick) {
        onHoldClick();
      }
    }, holdTime);
  }, [onHoldClick, holdTime]);

  const handleMouseUp = useCallback(() => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (clickCount === 1) {
      timerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 300);
    } else if (clickCount === 2) {
      if (onDoubleClick) {
        onDoubleClick();
      }
      setClickCount(0);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [clickCount, onDoubleClick]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", handleClick);
      element.addEventListener("mousedown", handleMouseDown);
      element.addEventListener("mouseup", handleMouseUp);
      element.addEventListener("mouseleave", handleMouseUp);

      return () => {
        element.removeEventListener("click", handleClick);
        element.removeEventListener("mousedown", handleMouseDown);
        element.removeEventListener("mouseup", handleMouseUp);
        element.removeEventListener("mouseleave", handleMouseUp);
      };
    }
    return undefined;
  }, [handleClick, handleMouseDown, handleMouseUp]);

  return ref;
};

export { useClickHandlers };
