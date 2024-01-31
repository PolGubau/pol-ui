import type { ColorsType } from '../../types'

export interface HelperTextTheme {
  root: {
    base: string
    colors: ColorsType
  }
}

export const helperTextTheme: HelperTextTheme = {
  root: {
    base: 'mt-1 ml-2 text-xs',
    colors: {
      primary: 'text-primary-700 dark:text-primary-400',
      secondary: 'text-secondary-700 dark:text-secondary-400',
      info: 'text-info-700 dark:text-info-800',
      success: 'text-success-600 dark:text-success-500',
      error: 'text-error-600 dark:text-error-500',
      warning: 'text-warning-500 dark:text-warning-600',
    },
  },
}
