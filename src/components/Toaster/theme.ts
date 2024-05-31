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
  base: 'rounded-xl shadow-md w-full p-3 flex items-center',
  title: 'text-sm font-semibold ml-2 flex flex-1',
  description: 'text-xs ml-2',
  success: 'bg-success-50 dark:bg-success-900 text-success-900',
  error: 'bg-error-50 dark:bg-error-900 text-error-900 ',
  info: 'bg-info-50 dark:bg-info-900 text-info-900 ',
  warning: 'bg-warning-50 dark:bg-warning-900 text-warning-900 ',
  loading: '',
  default: 'bg-secondary-50 dark:bg-secondary-900 text-secondary-900 ',
}
