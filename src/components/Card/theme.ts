import type { CardTheme } from './Card'

export const cardTheme: CardTheme = {
  root: {
    base: 'flex rounded-lg border border-secondary-200 bg-white shadow-md dark:border-secondary-700 dark:bg-secondary-800',
    children: 'flex h-full flex-col justify-center gap-4 p-4',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row',
    },
    href: 'hover:bg-secondary-100 dark:hover:bg-secondary-700',
  },
  img: {
    base: '',
    horizontal: {
      off: 'rounded-t-lg',
      on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
    },
  },
}
