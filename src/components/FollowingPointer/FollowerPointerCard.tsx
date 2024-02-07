// Core component that receives mouse positions and renders pointer and content

import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'

import type { MotionValue } from 'framer-motion'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export interface FollowerPointerCardProps extends React.PropsWithChildren {
  className?: string
  title?: string | React.ReactNode
}

export const FollowerPointerCard = ({ children, className, title }: PropsWithChildren<FollowerPointerCardProps>) => {
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
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: 'none',
      }}
      ref={ref}
      className={twMerge('relative', className)}
    >
      <AnimatePresence mode="wait">{isInside && <FollowPointer x={x} y={y} title={title} />}</AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>
  y: MotionValue<number>
  title: string | React.ReactNode
}) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
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
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-primary transform -rotate-[70deg] -translate-x-[8px] -translate-y-[6px] stroke-primary-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
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
        className={' whitespace-nowrap min-w-max text-xs rounded-full'}
      >
        {title}
      </motion.div>
    </motion.div>
  )
}
