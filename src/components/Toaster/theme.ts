export interface ToastTheme {
  base: string
  title: string
  description: string
  success: string
  error: string
  info: string
  warning: string
  loading: string
  default: string
}

export const toastTheme: ToastTheme = {
  base: 'rounded-xl shadow-md w-full p-4 flex items-center bg-primary-50 text-900 dark:bg-primary-900 dark:text-primary-50',
  title: 'text-sm font-bold ml-2 flex flex-1',
  description: 'text-xs ml-2',

  success: 'bg-success-50 dark:bg-success-900 text-success-500',
  error: 'bg-error-50 dark:bg-error-900 text-error-500 ',
  info: 'bg-info-50 dark:bg-info-900 text-info-500 ',
  warning: 'bg-warning-50 dark:bg-warning-900 text-warning-500 ',
  loading: '',
  default: 'bg-primary-50 dark:bg-primary-900  text-primary-500 ',
}
