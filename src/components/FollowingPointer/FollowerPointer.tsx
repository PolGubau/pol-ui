// Core component that receives mouse positions and renders pointer and content

import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'

import type { MotionValue } from 'framer-motion'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { FollowerPointerTheme } from './theme'

export interface FollowerPointerProps extends React.PropsWithChildren {
  className?: string
  title?: string | React.ReactNode
  icon?: React.ReactNode | undefined
  theme?: DeepPartial<FollowerPointerTheme>
}

export const FollowerPointer = ({
  children,
  className,
  title,
  icon,
  theme: customTheme = {},
}: PropsWithChildren<FollowerPointerProps>) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false) // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      x.set(e.clientX - rect.left + scrollX)
      y.set(e.clientY - rect.top + scrollY)
    }
  }
  const handleMouseLeave = () => {
    setIsInside(false)
  }

  const handleMouseEnter = () => {
    setIsInside(true)
  }
  const theme = mergeDeep(getTheme().followerPointer, customTheme)

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      ref={ref}
      className={twMerge(theme.base, className)}
    >
      <AnimatePresence mode="wait">
        {isInside && <FollowPointer x={x} y={y} title={title} icon={icon} theme={theme} />}
      </AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  title,
  icon,
  theme,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
  title: string | React.ReactNode
  icon?: React.ReactNode
  theme: DeepPartial<FollowerPointerTheme>
}) => {
  const defaultIcon = icon ?? (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      viewBox="0 0 16 16"
      className={theme.icon}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
  )

  return (
    <motion.div
      className={theme.pointerWrapper}
      style={{
        top: y,
        left: x,
        pointerEvents: 'none',
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      {defaultIcon}

      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={theme.pointer}
      >
        {title}
      </motion.div>
    </motion.div>
  )
}
