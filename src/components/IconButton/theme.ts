import type { ColorsType, MainSizesType, RoundedSizesTypes } from '../../types'

export interface IconButtonTheme {
  base: string
  color: ColorsType
  disabled: string
  loading: string
  inner: ButtonInnerTheme
  rounded: RoundedSizesTypes
  size: MainSizesType
}
export interface ButtonInnerTheme {
  base: string
  outline: string
}
export const iconButtonTheme: IconButtonTheme = {
  base: 'group flex items-center justify-center text-center relative focus:z-10 outline-none transition-all aspect-square h-fit w-fit',
  color: {
    error: 'text-error-700 enabled:hover:bg-error/20 focus:bg-error/40',
    info: 'text-info-700 enabled:hover:bg-info/20 focus:bg-info/40 ',
    success: 'text-success-700 enabled:hover:bg-success/20 focus:bg-success/40 ',
    warning: 'text-warning-700 enabled:hover:bg-warning/20 focus:bg-warning/40',
    primary: 'text-primary-700 enabled:hover:bg-primary/20 focus:bg-primary/40  ',
    secondary: 'text-secondary-700 enabled:hover:bg-secondary/20 focus:bg-secondary/40',
  },
  disabled: 'cursor-not-allowed opacity-50',
  loading: 'cursor-wait flex items-center justify-center',

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
