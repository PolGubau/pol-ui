import type { ComponentPropsWithoutRef, ElementType } from 'react'
import type { DirectionHoverTheme } from './theme'
import type { RoundedSizes } from '../../types'

export type DirectionHoverProps<T extends ElementType = 'button'> = {
  imageUrl: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  rounded?: RoundedSizes
  alt?: string
  className?: string
  theme?: Partial<DirectionHoverTheme>
  speed?: number
} & ComponentPropsWithoutRef<T>

export const getDirection = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, obj: HTMLElement) => {
  const { width: w, height: h, left, top } = obj.getBoundingClientRect()
  const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
  const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
  const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
  return d
}
export const directionHoverVariants = (speed: number) => {
  return {
    initial: {
      x: 0,
    },
    exit: {
      x: 0,
      y: 0,
    },
    top: {
      y: speed,
    },
    bottom: {
      y: -speed,
    },
    left: {
      x: speed,
    },
    right: {
      x: -speed,
    },
  }
}
export const directionHoverTextVariants = (speed: number) => {
  return {
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
      y: -(speed / 5),
      opacity: 1,
    },
    bottom: {
      y: speed / 5,
      opacity: 1,
    },
    left: {
      x: -(speed / 5),
      opacity: 1,
    },
    right: {
      x: speed / 5,
      opacity: 1,
    },
  }
}
