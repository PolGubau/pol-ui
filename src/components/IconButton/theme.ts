import type { ButtonGroupTheme } from '../Button/ButtonGroup/ButtonGroup'
import { Colors } from '../PoluiProvider'
import { MainSizes, RoundedSizes } from '../PoluiProvider/PoluiTheme'

export interface IconButtonTheme {
  base: string
  color: Colors
  disabled: string
  loading: string
  inner: ButtonInnerTheme
  rounded: RoundedSizes
  size: MainSizes
}

export interface ButtonInnerTheme {
  base: string
  outline: string
}

export const iconButtonTheme: IconButtonTheme = {
  base: 'group flex items-center justify-center text-center relative focus:z-10 focus:outline-none transition-all focus:ring-offset-2 focus:ring-offset-secondary-50 dark:focus:ring-offset-secondary-900 aspect-square transition-all h-fit w-fit',
  color: {
    error: 'text-error enabled:hover:brightness-90  enabled:hover:bg-error/20',
    info: 'text-info enabled:hover:brightness-90 enabled:hover:bg-error/20',
    success: 'text-success  enabled:hover:brightness-90  enabled:hover:bg-error/20 ',
    warning: 'text-warning enabled:hover:brightness-90   enabled:hover:bg-error/20',
    primary: 'text-primary enabled:hover:brightness-90 enabled:hover:bg-error/20  ',
    secondary: 'text-secondary  enabled:hover:brightness-90  enabled:hover:bg-error/20',
  },
  disabled: 'cursor-not-allowed opacity-50',
  loading: 'cursor-wait',

  inner: {
    base: 'flex gap-1 items-stretch items-center transition-all duration-200',
    outline: 'border border-transparent',
  },

  rounded: {
    xs: 'rounded-sm',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
    none: 'rounded-none',
  },
  size: {
    xs: 'text-sm px-1 h-6',
    sm: 'text-sm px-2 h-8',
    md: 'text-md px-3 h-10',
    lg: 'text-lg px-4 h-12',
    xl: 'text-xl p-6 h-16',
  },
}

export const buttonGroupTheme: ButtonGroupTheme = {
  base: 'inline-flex',
  position: {
    none: 'focus:ring-2',
    start: 'rounded-r-none',
    middle: 'rounded-none border-l-0 pl-0',
    end: 'rounded-l-none border-l-0 pl-0',
  },
}
