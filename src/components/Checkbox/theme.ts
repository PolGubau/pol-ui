import type { CheckboxTheme } from './Checkbox';

export const checkboxTheme: CheckboxTheme = {
  root: {
    base: 'h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100',
    color: {
       primary: 'focus:ring-blue-600 dark:ring-offset-blue-600 dark:focus:ring-blue-600 text-blue-600',
      
      secondary: 'focus:ring-gray-600 dark:ring-offset-gray-600 dark:focus:ring-gray-600 text-gray-600',
      
     
      failure: 'focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900',
     
      info: 'focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800',
     
      success: 'focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800',
      warning: 'focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400',
     
    },
  },
};
