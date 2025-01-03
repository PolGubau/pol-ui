"use client";

import { useEffect, useRef, useState } from "react";

interface MeasureResult<T extends Element> {
  ref: React.RefObject<T>;
  bounds: DOMRectReadOnly;
}

const useMeasure = <T extends Element = Element>(): MeasureResult<T> => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const ref = useRef<T>(null!);
  const [bounds, setBounds] = useState<DOMRectReadOnly>(new DOMRectReadOnly());

  useEffect(() => {
    let observer: ResizeObserver;

    if (ref.current) {
      observer = new ResizeObserver(([entry]) => {
        if (!entry) {
          return;
        }
        setBounds(entry.contentRect);
      });
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, bounds };
};

export { useMeasure, type MeasureResult };
