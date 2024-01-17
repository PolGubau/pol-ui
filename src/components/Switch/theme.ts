import { IBoolean } from '../PoluiProvider'
import { Colors, MainSizes } from '../PoluiProvider/PoluiTheme'

export interface SwitchTheme {
  root: SwitchRootTheme
  toggle: SwitchToggleTheme
}

export interface SwitchRootTheme {
  base: string
  active: IBoolean
  label: string
}

export interface SwitchToggleTheme {
  base: string
  sizes: MainSizes
  checked: IBoolean & {
    color: Colors
  }
}

export const switchTheme: SwitchTheme = {
  root: {
    base: 'group relative flex items-center rounded-lg focus:outline-none transition-all',
    active: {
      on: 'cursor-pointer',
      off: 'cursor-not-allowed opacity-50',
    },
    label: 'ml-3 text-sm font-medium text-secondary-900 dark:text-secondary-300',
  },
  toggle: {
    base: 'rounded-full border group-focus:ring-2 group-focus:ring-primary/25 after:rounded-full',
    checked: {
      on: 'after:translate-x-full after:border-primary ',
      off: 'border-secondary-800 bg-transparent dark:border-secondary-600 after:bg-secondary-500',
      color: {
        error: 'bg-error border-error-900 after:bg-error-700',
        success: 'bg-success border-success-500 after:bg-success-700',
        warning: 'bg-warning border-warning-600 after:bg-warning-700',
        info: 'bg-info border-info-600 after:bg-info-700',
        primary: 'bg-primary border-primary-600 after:bg-primary-700',
        secondary: 'bg-secondary border-secondary-400 after:bg-secondary-700',
      },
    },
    sizes: {
      xs: 'w-7 h-3 after:absolute after:top-[1px] after:left-[1px] after:h-2 after:w-2 ',
      sm: 'w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4',
      md: 'w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 ',
      lg: 'w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6',
      xl: 'w-16 h-9 after:absolute after:top-0.7 after:left-[6px] after:h-8 after:w-8',
    },
  },
}
