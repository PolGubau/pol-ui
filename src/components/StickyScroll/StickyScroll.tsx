'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useBgColorTransition } from '../../hooks/use-sticky-scroll'
import type { DeepPartial } from '../../types'
import type { StickyScrollTheme } from './theme'
import { mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import { twMerge } from 'tailwind-merge'

export interface StickyScrollProps extends React.PropsWithChildren {
  colors: string[]
  theme?: DeepPartial<StickyScrollTheme>
  className?: string
}
export const StickyScroll: React.FC<StickyScrollProps> = ({
  colors,
  children,
  theme: customTheme = {},
  className,
}: React.PropsWithChildren<StickyScrollProps>) => {
  const { color, ref } = useBgColorTransition(colors)
  const theme = mergeDeep(getTheme().stickyScroll, customTheme)

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: color,
      }}
      className={twMerge(theme.base, className)}
    >
      {children}
    </motion.div>
  )
}
