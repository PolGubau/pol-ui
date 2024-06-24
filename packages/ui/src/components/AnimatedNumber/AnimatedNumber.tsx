'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { DynamicHeading } from '../DynamicHeading'
import type { HeadingLevel } from '../../types'

export interface AnimatedNumberProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingLevel
  duration?: number
  from?: number
  until?: number
}

export default function AnimatedNumber({
  as = 'h6',
  from = 0,
  until = 100,
  duration = 2,
  ...rest
}: Readonly<AnimatedNumberProps>) {
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
