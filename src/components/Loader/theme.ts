import type { LoaderTheme } from './Loader';

export const loaderTheme: LoaderTheme = {
  base: 'inline animate-spin text-gray-200',
  color: {
    error: 'fill-error-600',
    info: 'fill-info-600',
    success: 'fill-success-500',
    warning: 'fill-warning-400',
  },
 
  size: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  },
};
