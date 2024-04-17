import type { ColorsType, IBoolean, MainSizesType, RoundedSizesTypes } from '../../types'

export interface ButtonTheme {
  base: string
  fullSized: string
  color: ColorsType
  ring: {
    base: string
    colors: ColorsType
  }
  disabled: string
  loading: string
  loaderSlot: string
  loaderLeftPosition: MainSizesType
  inner: ButtonInnerTheme
  label: string
  outline: ButtonOutlineTheme
  rounded: RoundedSizesTypes
  size: MainSizesType
}

export interface ButtonInnerTheme {
  base: string
  outline: string
  loadingPadding: MainSizesType
}

export interface ButtonOutlineTheme extends IBoolean {
  outlineBase: string
  color: ColorsType
}

export const buttonTheme: ButtonTheme = {
  base: 'group flex items-stretch outline-none items-center justify-center text-center w-auto relative focus:z-10 focus:outline-none transition-all focus:ring-2	enabled:hover:brightness-90 text-white dark:text-black',
  fullSized: 'w-full',
  color: {
    error: 'bg-error ',
    info: 'bg-info   ',
    success: 'bg-success',
    warning: 'bg-warning',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  },
  ring: {
    base: 'enabled:focus:ring-2',
    colors: {
      error: 'ring-error-700 dark:ring-error-400',
      info: 'ring-info-700 dark:ring-info-400',
      success: 'ring-success-700 dark:ring-success-400',
      warning: 'ring-warning-700 dark:ring-warning-400',
      primary: 'ring-primary-700 dark:ring-primary-400',
      secondary: 'ring-secondary-700 dark:ring-secondary-400',
    },
  },
  disabled: 'cursor-not-allowed opacity-50',
  loading: 'cursor-wait',
  loaderSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
  loaderLeftPosition: {
    xs: 'left-2',
    sm: 'left-3',
    md: 'left-4',
    lg: 'left-5',
    xl: 'left-6',
  },
  inner: {
    base: 'flex gap-1 items-stretch items-center transition-all duration-200',

    outline: 'border border-transparent',
    loadingPadding: {
      xs: 'pl-8',
      sm: 'pl-10',
      md: 'pl-12',
      lg: 'pl-16',
      xl: 'pl-20',
    },
  },
  label: 'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full text-xs font-semibold',
  outline: {
    outlineBase: 'enabled:hover:brightness-90  dark:enabled:hover:brightness-125 ring ring-1 focus:ring-[3px]',
    color: {
      error: 'text-error-900 dark:text-error-50  ring-error',
      info: 'text-info-900 dark:text-info-50  ring-info',
      success: 'text-success-900 dark:text-success-50  ring-success',
      warning: 'text-warning-900 dark:text-warning-50  ring-warning',
      primary: 'text-primary-900 dark:text-primary-50  ring-primary',
      secondary: 'text-secondary-900 dark:text-secondary-50  ring-secondary',
    },
    off: '',
    on: 'flex justify-center bg-transparent  transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit w-full',
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
    xs: 'text-xs px-1.5 py-0.5',
    sm: 'text-sm px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-2.5',
    xl: 'text-base px-6 py-3.5',
  },
}
