import type { RoundedSizesTypes } from '../../types'

export type PopoverTheme = {
  base: string
  content: string
  animation: string
  rounded: RoundedSizesTypes
  closeButton: string
  trigger: {
    base: string
  }
}

export const popoverTheme: PopoverTheme = {
  base: '',
  content: 'z-50 min-w-72 rounded-md border bg-secondary-50 p-4 text-secondary-900 shadow-md outline-none',
  animation:
    'data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  closeButton:
    'absolute top-2 right-2 focus:outline-none focus:ring-2 focus:ring-primary-700 dark:focus:ring-primary-400 rounded-full',
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
  trigger: {
    base: 'focus:ring ring-primary-700 dark:ring-primary-400 focus:outline-none rounded-md',
  },
}
