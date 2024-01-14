import type { CheckboxTheme } from './Checkbox'

export const checkboxTheme: CheckboxTheme = {
  root: {
    base: 'h-4 w-4 rounded-xl focus:ring-2 bg-secondary-100 focus:outline-none dark:focus:ring-offset-black',
    color: {
      primary: 'focus:ring-primary text-primary',
      secondary: 'focus:ring-secondary text-secondary',
      error: 'focus:ring-error text-error',
      info: 'focus:ring-info text-info',
      success: 'focus:ring-success text-success',
      warning: 'focus:ring-warning text-warning',
    },
  },
}
