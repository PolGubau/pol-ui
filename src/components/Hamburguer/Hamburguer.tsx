import React from 'react'
import type { Transition, SVGMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

export interface HamburguerProps extends SVGMotionProps<SVGSVGElement> {
  open?: boolean
  color?: string
  strokeWidth?: string | number
  transition?: Transition
  lineProps?: SVGMotionProps<SVGLineElement>
}

export const Hamburguer = ({
  open = false,
  width = 36,
  height = 36,
  strokeWidth = 5,
  color = 'currentColor',
  transition = { type: 'spring', stiffness: 260, damping: 20 },
  lineProps = {},
  ...props
}: HamburguerProps) => {
  const variant = open ? 'opened' : 'closed'
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    strokeLinecap: 'round',
    ...lineProps,
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      className="text-red-600 cursor-pointer"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line className={'text-blue-400'} x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1={unitHeight / 2} y2={unitHeight / 2} variants={center} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1={unitHeight} y2={unitHeight} variants={bottom} {...lineProps} />
    </motion.svg>
  )
}
