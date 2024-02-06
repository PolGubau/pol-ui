import type { RoundedSizesTypes } from '../../types'

export type PopoverTheme = {
  base: string
  animation: string
  rounded: RoundedSizesTypes
}

export const popoverTheme: PopoverTheme = {
  base: 'z-50 min-w-72 rounded-md border bg-secondary-50 p-4 text-secondary-900 shadow-md outline-none',
  animation:
    'will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  rounded: {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    none: 'rounded-none',
    full: 'rounded-full',
  },
}
