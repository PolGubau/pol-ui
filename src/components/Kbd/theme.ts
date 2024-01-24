export interface KbdTheme {
  root: KbdRootTheme
}

export interface KbdRootTheme {
  base: string
  icon: string
}
export const kbdTheme: KbdTheme = {
  root: {
    base: 'px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500',
    icon: 'inline-block',
  },
}
