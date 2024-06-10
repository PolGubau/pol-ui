"use client"

import { useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"

/**
 * Hook for transitioning background color based on scroll position.
 *
 * @param colors - An array of color values representing the gradient.
 * @returns An object with the active color and a ref to the target element.
 *
 * @example
 * ```tsx
 * const { color, ref } = useBgColorTransition(['#ff0000', '#00ff00', '#0000ff']);
 * ```
 */
export const useBgColorTransition = (colors: string[]) => {
  const [activeColor, setActiveColor] = useState(colors[0])
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollY } = useScroll({})

  useMotionValueEvent(scrollY, "change", (latest) => {
    const amountColors = colors.length
    if (!ref.current) return
    const step = ref.current.offsetHeight / amountColors

    const index = Math.floor(latest / step)

    if (index >= amountColors) {
      setActiveColor(colors[amountColors - 1])
      return
    }

    setActiveColor(colors[index])
  })

  return { color: activeColor, ref }
}
