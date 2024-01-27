'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DirectionHoverTheme } from './theme'
import type { RoundedSizesElastic } from '../PoluiProvider/PoluiTheme'
import { RoundedSizesEnum } from '../../types/enums'

export interface DirectionHoverProps {
  imageUrl: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  rounded?: keyof RoundedSizesElastic
  alt?: string
  className?: string
  theme: Partial<DirectionHoverTheme>
}

export const DirectionHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  alt,
  className,
  rounded = RoundedSizesEnum.md,
  theme: customTheme,
}: DirectionHoverProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [direction, setDirection] = useState<'top' | 'bottom' | 'left' | 'right' | string>('left')

  const theme: DirectionHoverTheme = mergeDeep(getTheme().directionHover, customTheme)

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return
    const direction = getDirection(event, ref.current)
    switch (direction) {
      case 0:
        setDirection('top')
        break
      case 1:
        setDirection('right')
        break
      case 2:
        setDirection('bottom')
        break
      case 3:
        setDirection('left')
        break
      default:
        setDirection('left')
        break
    }
  }

  const getDirection = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={twMerge(theme.base, theme.rounded[rounded], className)}
    >
      <AnimatePresence mode="wait">
        <motion.div className="relative h-full w-full" initial="initial" whileHover={direction} exit="exit">
          <motion.div className={theme.overlay} />
          <motion.div
            variants={variants}
            className={theme.background.wrapper}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >
            <img
              alt={alt ?? 'From Direction hover component'}
              className={twMerge(theme.background.image, imageClassName)}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className={twMerge(theme.children, childrenClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
}
