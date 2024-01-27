import type { Colors } from '../PoluiProvider'

export interface LabelTheme {
  base: string
  colors: Colors
  disabled: string
}

export const labelTheme: LabelTheme = {
  base: 'text-sm font-medium',
  disabled: 'opacity-50',
  colors: {
    secondary: 'text-secondary-800 dark:text-secondary-200',
    primary: 'text-primary-800 dark:text-primary-200',
    info: 'text-info-800 dark:text-info-200',
    error: 'text-error-800 dark:text-error-200',
    warning: 'text-warning-800 dark:text-warning-200',
    success: 'text-success-800 dark:text-success-200',
  },
}
