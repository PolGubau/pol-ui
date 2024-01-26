import type { Colors } from '../PoluiProvider'

export interface AlertTheme {
  base: string
  borderAccent: string
  color: Colors
  icon: string
  rounded: string
  wrapper: string
}

export const alertTheme: AlertTheme = {
  base: 'flex flex-col gap-2 p-4 text-sm',
  borderAccent: 'border-t-4',

  color: {
    info: 'text-info-700 bg-info-100 border-info-500 dark:bg-info-200 dark:text-info-800',
    gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
    error: 'text-error-700 bg-error-100 border-error-500 dark:bg-error-200 dark:text-error-800',
    success: 'text-success-700 bg-success-100 border-success-500 dark:bg-success-200 dark:text-success-800',
    warning: 'text-warning-700 bg-warning-100 border-warning-500 dark:bg-warning-200 dark:text-warning-800',
    primary: 'text-primary-700 bg-primary-100 border-primary-500 dark:bg-primary-200 dark:text-primary-800',
    secondary: 'text-secondary-700 bg-secondary-100 border-secondary-500 dark:bg-secondary-200 dark:text-secondary-800',
  },
  icon: 'mr-3 inline h-5 w-5 flex-shrink-0',
  rounded: 'rounded-lg',
  wrapper: 'flex items-center flex-1 justify-between',
}
