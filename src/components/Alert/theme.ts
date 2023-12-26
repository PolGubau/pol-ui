import type { AlertTheme } from './Alert'

export const alertTheme: AlertTheme = {
  base: 'flex flex-col gap-2 p-4 text-sm',
  borderAccent: 'border-t-4',
  closeButton: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    icon: 'w-5 h-5',
    color: {
      info: 'bg-info-100 text-info-500 hover:bg-info-200 focus:ring-info-400 dark:bg-info-200 dark:text-info-600 dark:hover:bg-info-300',

      error:
        'bg-error-100 text-error-500 hover:bg-error-200 focus:ring-error-400 dark:bg-error-200 dark:text-error-600 dark:hover:bg-error-300',
      success:
        'bg-success-100 text-success-500 hover:bg-success-200 focus:ring-success-400 dark:bg-success-200 dark:text-success-600 dark:hover:bg-success-300',
      warning:
        'bg-warning-100 text-warning-500 hover:bg-warning-200 focus:ring-warning-400 dark:bg-warning-200 dark:text-warning-600 dark:hover:bg-warning-300',
      primary:
        'bg-primary-100 text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:bg-primary-200 dark:text-primary-600 dark:hover:bg-primary-300',
      secondary:
        'bg-secondary-100 text-secondary-500 hover:bg-secondary-200 focus:ring-secondary-400 dark:bg-secondary-200 dark:text-secondary-600 dark:hover:bg-secondary-300',
    },
  },
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
  wrapper: 'flex items-center',
}
