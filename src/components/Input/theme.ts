import { InputTheme } from './InputTypes'

export const inputTheme: InputTheme = {
  base: 'flex',
  addon:
    'inline-flex items-center rounded-l-md border-none border-secondary-300 bg-secondary-200 px-3 text-sm text-secondary-900 dark:border-secondary-600 dark:bg-secondary-600 dark:text-secondary-400',
  field: {
    base: 'relative w-full',
    icons: {
      base: 'pointer-events-none absolute inset-y-0 flex items-center',
      svg: 'h-5 w-5 text-secondary-500 dark:text-secondary-400',
      left: 'left-0 pl-3',
      right: 'right-0 pr-3',
    },

    input: {
      base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-50 dark:focus:ring-opacity-100 dark:ring-offset-0 dark:ring-2 dark:ring-offset-transparent dark:text-white',
      sizes: {
        xs: 'p-1.5 text-xs',
        sm: 'p-2 sm:text-xs',
        md: 'p-2.5 text-sm',
        lg: 'sm:text-md p-4',
        xl: 'sm:text-lg p-5',
      },
      colors: {
        primary:
          'bg-primary-50 border-primary-300 text-primary-900 focus:border-primary-500 focus:ring-primary-500 dark:border-primary-600 dark:bg-primary-700 dark:text-primary-50 dark:placeholder-primary-400 dark:focus:border-primary-500 dark:focus:ring-primary-500',
        secondary:
          'bg-secondary-50 border-secondary-300 text-secondary-900 focus:border-secondary-500 focus:ring-secondary-500 dark:border-secondary-600 dark:bg-secondary-700 dark:text-white dark:placeholder-secondary-400 dark:focus:border-secondary-500 dark:focus:ring-secondary-500',
        info: 'border-info-500 bg-info-50 text-info-900 placeholder-info-700 focus:border-info-500 focus:ring-info-500 dark:border-info-400 dark:bg-info-100 dark:focus:border-info-500 dark:focus:ring-info-500',
        error:
          'border-error-500 bg-error-50 text-error-900 placeholder-error-700 focus:border-error-500 focus:ring-error-500 dark:border-error-400 dark:bg-error-100 dark:focus:border-error-500 dark:focus:ring-error-500',
        warning:
          'border-warning-500 bg-warning-50 text-warning-900 placeholder-warning-700 focus:border-warning-500 focus:ring-warning-500 dark:border-warning-400 dark:bg-warning-100 dark:focus:border-warning-500 dark:focus:ring-warning-500',
        success:
          'border-success-500 bg-success-50 text-success-900 placeholder-success-700 focus:border-success-500 focus:ring-success-500 dark:border-success-400 dark:bg-success-100 dark:focus:border-success-500 dark:focus:ring-success-500',
      },
      label: {
        base: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-secondary-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-secondary-400 peer-focus:dark:text-blue-500',
      },
      withRightIcon: {
        on: 'pr-10',
        off: '',
      },
      withIcon: {
        on: 'pl-10',
        off: '',
      },
      withAddon: {
        on: 'rounded-r-lg',
        off: 'rounded-lg',
      },
      withShadow: {
        on: 'shadow-sm dark:shadow-sm-light',
        off: '',
      },
    },
  },
}
