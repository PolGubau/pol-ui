"use client"

import { useEffect } from "react"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"

import type { HeadingLevel } from "../../types"
import { DynamicHeading } from "../DynamicHeading"

export interface GrowingNumberProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingLevel
  duration?: number
  from?: number
  until?: number
}

export default function GrowingNumber({
  as = "h6",
  from = 0,
  until = 100,
  duration = 2,
  ...rest
}: Readonly<GrowingNumberProps>) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, until, { duration })
    return animation.stop
  }, [count, duration, until])

  return (
    <DynamicHeading as={as} {...rest}>
      <motion.span>{rounded}</motion.span>
    </DynamicHeading>
  )
}
