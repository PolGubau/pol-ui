"use client"

import type { PropsWithChildren } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { twMerge } from "tailwind-merge"

import { mergeDeep } from "../../helpers"
import { usePerspective } from "../../hooks/use-perspective/use-perspective"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types"
import type { PerspectiveCardTheme } from "./theme"

export interface PerspectiveCardProps extends HTMLMotionProps<"div"> {
  className?: string
  wrapperClassName?: string
  theme?: DeepPartial<PerspectiveCardTheme>
}

/**
 * A card component with a perspective effect that responds to mouse movements.
 *
 * @component
 * @example
 * ```tsx
 * <PerspectiveCard>
 *   <div>Your Content Goes Here</div>
 * </PerspectiveCard>
 * ```
 *
 * @param {PropsWithChildren<PerspectiveCardProps>} props - The properties of the PerspectiveCard component.
 * @returns {JSX.Element} JSX.Element
 * @see {@link https://www.framer.com/motion/gestures/} Framer motion Gesture docs.
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const PerspectiveCard = ({
  children,
  className,
  wrapperClassName,
  theme: customTheme = {},
  ...props
}: PropsWithChildren<PerspectiveCardProps>): JSX.Element => {
  const { ref, parentWidth, rotateX, rotateY, handleMouse } = usePerspective()
  const theme = mergeDeep(getTheme().perspectiveCard, customTheme)

  return (
    <motion.div
      ref={ref}
      className={twMerge(theme.wrapper, wrapperClassName)}
      style={{
        perspective: parentWidth ?? 500,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className={twMerge(theme.base, className)}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
