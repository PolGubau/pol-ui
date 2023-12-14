import type { SpinnerTheme } from './Spinner';

export const spinnerTheme: SpinnerTheme = {
  base: 'inline animate-spin text-gray-200',
  color: {
    error: 'fill-error-600',
    info: 'fill-info-600',
    success: 'fill-success-500',
    warning: 'fill-warning-400',
  },
  light: {
    off: {
      base: 'dark:text-gray-600',
      color: {
        error: '',
         info: '',
         success: '',
        warning: '',
      },
    },
    on: {
      base: '',
      color: {
        error: '',
         info: '',
          success: '',
        warning: '',
      },
    },
  },
  size: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  },
};
