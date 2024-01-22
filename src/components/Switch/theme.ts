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
  color: Colors
  checked: IBoolean
  handler: SwitchHandlerTheme
}

export interface SwitchHandlerTheme {
  base: string
  sizes: MainSizes
}

export const switchTheme: SwitchTheme = {
  root: {
    /**
     * @name Base of the whole swithc component (selector + label)
     */
    base: 'group relative flex items-center rounded-lg focus:outline-none transition-all',
    active: {
      on: 'cursor-pointer',
      off: 'cursor-not-allowed opacity-50',
    },
    label: 'ml-3 text-sm font-medium text-secondary-900 dark:text-secondary-300',
  },
  toggle: {
    base: 'rounded-full border group-focus:ring-2 group-focus:ring-primary/25 after:rounded-full flex items-center transition-all overflow-hidden',
    color: {
      error: 'bg-error border-error-900 after:bg-error-700',
      success: 'bg-success border-success-500 after:bg-success-700',
      warning: 'bg-warning border-warning-600 after:bg-warning-700',
      info: 'bg-info border-info-600 after:bg-info-700',
      primary: 'bg-primary border-primary-600 after:bg-primary-700',
      secondary: 'bg-secondary border-secondary-400 after:bg-secondary-700',
    },
    checked: {
      on: 'justify-end after:border-primary ',
      off: 'justify-start	border-secondary-800 bg-transparent dark:border-secondary-600 after:bg-secondary-500 opacity-50',
    },
    sizes: {
      xs: 'w-8 p-px h-5',
      sm: 'w-9 h-6 p-[2px]',
      md: 'w-12 h-7 p-[3px]',
      lg: 'w-14 h-7 p-1',
      xl: 'w-16 h-9 p-1',
    },
    handler: {
      base: 'shadow-sm w-4 h-4 bg-white rounded-full flex h-full aspect-square',
      sizes: {
        xs: 'w-8 p-px h-5',
        sm: 'w-9 h-6 p-[2px]',
        md: 'w-12 h-7 p-[3px]',
        lg: 'w-14 h-7 p-1',
        xl: 'w-16 h-9 p-1',
      },
    },
  },
}
