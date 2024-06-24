"use client"

import { useEffect, useRef, useState } from "react"

interface MeasureResult<T extends Element> {
  ref: React.RefObject<T>
  bounds: DOMRectReadOnly
}

const useMeasure = <T extends Element = Element>(): MeasureResult<T> => {
  const ref = useRef<T>(null)
  const [bounds, setBounds] = useState<DOMRectReadOnly>(new DOMRectReadOnly())

  useEffect(() => {
    let observer: ResizeObserver

    if (ref.current) {
      observer = new ResizeObserver(([entry]) => {
        setBounds(entry.contentRect)
      })
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, bounds }
}

export { useMeasure, type MeasureResult }
