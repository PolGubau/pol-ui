export const floatingLabelTheme = {
  input: {
    filled: {
      sm: 'peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-secondary-300 bg-secondary-50 px-2.5 pb-2.5 pt-5 text-xs text-secondary-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-secondary-600 dark:bg-secondary-700 dark:text-white dark:focus:border-blue-500',
      md: 'peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-secondary-300 bg-secondary-50 px-2.5 pb-2.5 pt-5 text-sm text-secondary-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-secondary-600 dark:bg-secondary-700 dark:text-white dark:focus:border-blue-500',
    },
    outlined: {
      sm: 'border-1 peer block w-full appearance-none rounded-lg border-secondary-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-secondary-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-secondary-600 dark:text-white dark:focus:border-blue-500',
      md: 'border-1 peer block w-full appearance-none rounded-lg border-secondary-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-secondary-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-secondary-600 dark:text-white dark:focus:border-blue-500',
    },
    standard: {
      sm: 'block py-2.5 px-0 w-full text-xs text-secondary-900 bg-transparent border-0 border-b-2 border-secondary-300 appearance-none dark:text-white dark:border-secondary-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
      md: 'block py-2.5 px-0 w-full text-sm text-secondary-900 bg-transparent border-0 border-b-2 border-secondary-300 appearance-none dark:text-white dark:border-secondary-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
    },
  },
  label: {
    default: {
      filled: {
        sm: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-secondary-500  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-secondary-400 peer-focus:dark:text-blue-500',
        md: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-secondary-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-secondary-400 peer-focus:dark:text-blue-500',
      },
      outlined: {
        sm: 'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-secondary-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-secondary-900 dark:text-secondary-400 peer-focus:dark:text-blue-500',
        md: 'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-secondary-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-secondary-900 dark:text-secondary-400 peer-focus:dark:text-blue-500',
      },
      standard: {
        sm: 'absolute text-xs text-secondary-500 dark:text-secondary-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
        md: 'absolute text-sm text-secondary-500 dark:text-secondary-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
      },
    },
    success: {
      filled: {
        sm: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500',
        md: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500',
      },
      outlined: {
        sm: 'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-secondary-900 dark:text-green-500',
        md: 'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-secondary-900 dark:text-green-500',
      },
      standard: {
        sm: 'absolute text-xs text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
        md: 'absolute text-sm text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
      },
    },
    error: {
      filled: {
        sm: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500',
        md: 'absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500',
      },
      outlined: {
        sm: 'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-secondary-900 dark:text-red-500',
        md: 'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-secondary-900 dark:text-red-500',
      },
      standard: {
        sm: 'absolute text-xs text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
        md: 'absolute text-sm text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
      },
    },
  },
  helperText: {
    default: 'mt-2 text-xs text-secondary-600 dark:text-secondary-400',
    success: 'mt-2 text-xs text-green-600 dark:text-green-400',
    error: 'mt-2 text-xs text-red-600 dark:text-red-400',
  },
}

export type FloatingLabelTheme = typeof floatingLabelTheme
