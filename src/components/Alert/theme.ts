import type { ColorsType } from '../../types'

export interface AlertTheme {
  base: string
  borderAccent: string
  color: ColorsType
  icon: string
  rounded: string
  wrapper: string
}

export const alertTheme: AlertTheme = {
  base: 'flex flex-col gap-2 p-4 text-sm',
  borderAccent: 'border-t-4',

  color: {
    info: 'text-info-900 bg-info-100 border-info dark:bg-info-200 dark:text-info-800',
    error: 'text-error-900 bg-error-100 border-error dark:bg-error-200 dark:text-error-800',
    success: 'text-success-900 bg-success-100 border-success dark:bg-success-200 dark:text-success-800',
    warning: 'text-warning-900 bg-warning-100 border-warning dark:bg-warning-200 dark:text-warning-800',
    primary: 'text-primary-900 bg-primary-100 border-primary dark:bg-primary-200 dark:text-primary-800',
    secondary: 'text-secondary-900 bg-secondary-100 border-secondary dark:bg-secondary-200 dark:text-secondary-800',
  },
  icon: 'mr-3 inline h-5 w-5 flex-shrink-0',
  rounded: 'rounded-lg',
  wrapper: 'flex items-center flex-1 ',
}
