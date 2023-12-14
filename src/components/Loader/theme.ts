import type { LoaderTheme } from './Loader';

export const loaderTheme: LoaderTheme = {
  base: 'inline animate-spin text-gray-200 rotate-360',
  color: {
    error: 'fill-error',
    info: 'fill-info',
    success: 'fill-success',
    warning: 'fill-warning',
  },
 
  size: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  },
};
