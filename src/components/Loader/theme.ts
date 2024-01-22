import type { LoaderTheme } from './Loader'

export const loaderTheme: LoaderTheme = {
  base: 'inline-flex animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] object-center',

  color: {
    error: 'fill-error text-error',
    info: 'fill-info text-info',
    success: 'fill-success text-success',
    warning: 'fill-warning text-warning',
    primary: 'fill-primary text-primary',
    secondary: 'fill-secondary text-secondary',
  },

  size: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  },
}
