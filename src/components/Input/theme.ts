import type { InputTheme } from './themeTypes'

export const inputTheme: InputTheme = {
  root: {
    base: 'flex  w-full',
    labelPosition: {
      left: 'flex-row items-center gap-3',
      top: 'flex-col gap-1 w-full',
    },
  },
  base: 'flex rounded-lg',

  label: 'ml-2',

  addon:
    'inline-flex items-center rounded-l-md border-none border-secondary-300 bg-secondary-200 text-sm text-secondary-900 dark:border-secondary-600 dark:bg-secondary-600 dark:text-secondary-400',
  field: {
    base: 'relative w-full',
    icons: {
      base: ' absolute inset-y-0 flex items-center z-10',
      svg: 'text-secondary-800 dark:text-secondary-100 fill-secondary-800 dark:fill-secondary-100 z-10',
      left: 'left-0 pl-2',
      right: 'right-0 pr-2',
    },

    input: {
      base: 'block w-full group  disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-50   focus:ring-offset-2 focus:ring-offset-secondary-50 dark:focus:ring-offset-secondary-900 transition resize-none rounded-lg',
      border: {
        on: 'border-2 border-opacity-30 group-focus:border-opacity-100',
        off: '',
      },
      sizes: {
        xs: 'p-1.5 text-xs',
        sm: 'p-2 sm:text-xs',
        md: 'p-2.5 text-sm',
        lg: 'sm:text-md p-4',
        xl: 'sm:text-lg p-5',
      },
      colors: {
        primary:
          'bg-primary/30 border-primary text-primary-900 focus:ring-primary dark:border-primary-700 dark:text-primary-50 placeholder:primary-800 dark:placeholder-primary-300',
        secondary:
          'bg-secondary/30 border-secondary text-secondary-900 focus:ring-secondary-500 dark:border-secondary-600 dark:text-secondary-50 dark:placeholder-secondary-400  dark:focus:ring-secondary-500',
        info: 'bg-info/30 border-info text-info-900 focus:border-info-500 focus:ring-info-500 dark:border-info-600 dark:text-white dark:placeholder-info-400 dark:focus:border-info-500 dark:focus:ring-info-500',
        success:
          'bg-success/30 border-success text-success-900 focus:border-success-500 focus:ring-success-500 dark:border-success-600 dark:text-white dark:placeholder-success-400 dark:focus:border-success-500 dark:focus:ring-success-500',
        error:
          'bg-error/30 border-error text-error-900 focus:border-error-500 focus:ring-error-500 dark:border-error-600  dark:text-white dark:placeholder-error-400 dark:focus:border-error-500 dark:focus:ring-error-500',
        warning:
          'bg-warning/30 border-warning text-warning-900 focus:border-warning-500 focus:ring-warning-500 dark:border-warning-600 dark:text-white dark:placeholder-warning-400 dark:focus:border-warning-500 dark:focus:ring-warning-500',
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
      multiline: {
        on: 'resize-none h-full',
        off: '',
      },
    },
  },
}
