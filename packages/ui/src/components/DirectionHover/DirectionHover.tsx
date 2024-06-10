'use client'

import type { ElementType } from 'react'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { DirectionHoverTheme } from './theme'
import { DirectionEnum, RoundedSizesEnum } from '../../types/enums'
import type { DirectionHoverProps } from './types'
import { directionHoverTextVariants, directionHoverVariants, getDirection } from './types'
import type { Direction } from '../../types'

/**
 *
 * @name DirectionHover
 * @description The DirectionHover component is used to display a hover effect with a direction, useful for displaying a list of items in a small space.
 * @param {string} props.imageUrl - The image url
 * @param {React.ReactNode} props.children - The content of the hover
 * @param {string} props.childrenClassName - The class name of the content
 * @param {number} props.speed - The speed of the hover
 * @param {string} props.imageClassName - The class name of the image
 * @param {string} props.alt - The alt of the image
 * @param {string} props.className - The class name of the hover
 * @param {RoundedSizesEnum} props.rounded - The rounded size of the hover
 * @param {DeepPartial<DirectionHoverTheme>} props.theme - The theme of the hover
 * @returns React.FC<DirectionHoverProps<T>>
 *
 */
export const DirectionHover = <T extends ElementType = 'button'>({
  imageUrl,
  children,
  childrenClassName,
  speed = 20,
  imageClassName,
  alt,
  className,
  rounded = RoundedSizesEnum.md,
  theme: customTheme = {},
  ...props
}: DirectionHoverProps<T>) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [direction, setDirection] = useState<Direction>(DirectionEnum.left)
  const theme: DirectionHoverTheme = mergeDeep(getTheme().directionHover, customTheme)

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const direction = getDirection(event, ref.current)
    switch (direction) {
      case 0:
        setDirection(DirectionEnum.top)
        break
      case 1:
        setDirection(DirectionEnum.right)
        break
      case 2:
        setDirection(DirectionEnum.bottom)
        break
      case 3:
        setDirection(DirectionEnum.left)
        break
      default:
        setDirection(DirectionEnum.left)
        break
    }
  }

  return (
    <motion.button
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={twMerge(theme.base, theme.rounded[rounded], className)}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div className="relative h-full w-full" initial="initial" whileHover={direction} exit="exit">
          <motion.div className={theme.overlay} />
          <motion.div
            variants={directionHoverVariants(speed)}
            className={theme.background.wrapper}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >
            <div
              className={twMerge(theme.background.image, imageClassName)}
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
              aria-label={alt ?? 'From Direction hover component'}
            />
          </motion.div>
          <motion.div
            variants={directionHoverTextVariants(speed)}
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
    </motion.button>
  )
}
