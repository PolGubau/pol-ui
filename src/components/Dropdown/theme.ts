import { Colors } from '../PoluiProvider'
import { MainSizesElastic, RoundedSizes } from '../PoluiProvider/PoluiTheme'

export interface DropdownTheme {
  root: {
    icon: string
    disabled: string
    base: string
    color: Colors
  }
  rounded: RoundedSizes
  size: MainSizesElastic
  item: {
    base: string
    color: Colors
  }
  floating: {
    base: string
  }
}

export const dropdownTheme: DropdownTheme = {
  root: {
    icon: 'ml-2 h-4 w-4',
    disabled: 'opacity-50 cursor-not-allowed',
    base: 'group flex items-stretch items-center justify-center text-center w-auto relative focus:z-10 focus:outline-none transition-all focus:ring-offset-2 focus:ring-offset-secondary-50 dark:focus:ring-offset-secondary-900 focus:ring-2 focus:ring-primary',
    color: {
      error: 'text-error-50 dark:text-error-900 bg-error enabled:hover:brightness-90  focus:ring-error ',
      info: 'text-info-50 dark:text-info-900 bg-info   enabled:hover:brightness-90  focus:ring-info  ',
      success: 'text-success-50 dark:text-success-900 bg-success  enabled:hover:brightness-90  focus:ring-success  ',
      warning: 'text-warning-50 dark:text-warning-900 bg-warning enabled:hover:brightness-90  focus:ring-warning',
      primary: 'text-primary-50 dark:text-primary-900 bg-primary enabled:hover:brightness-90  focus:ring-primary',
      secondary:
        'text-secondary-50 dark:text-secondary-900 bg-secondary enabled:hover:brightness-90  focus:ring-secondary',
    },
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
  item: {
    base: 'group z-10 flex items-center w-full px-2 py-1.5 text-sm text-left text-gray-700 outline-none focus:outline-none justify-between gap-6',
    color: {
      error: 'focus:bg-error/20 focus:text-error-900',
      info: 'focus:bg-info/20 focus:text-info-900',
      success: 'focus:bg-success/20 focus:text-success-900',
      warning: 'focus:bg-warning/20 focus:text-warning-900',
      primary: 'focus:bg-primary/20 focus:text-primary-900',
      secondary: 'focus:bg-secondary/20 focus:text-secondary-900',
    },
  },
  floating: {
    base: 'bg-secondary-50/70 min-w-[100px] overflow-hidden rounded-md shadow-lg outline-none focus:outline-none backdrop-filter backdrop-blur-md',
  },
}
