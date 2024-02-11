import type { IBoolean } from '../../types'

export interface CardTheme {
  root: CardRootTheme
  img: CardImageTheme
}

export interface CardRootTheme {
  base: string
  children: string
  horizontal: IBoolean
  href: string
}

export interface CardImageTheme {
  base: string
  horizontal: IBoolean
}
export const cardTheme: CardTheme = {
  root: {
    base: 'flex rounded-xl bg-secondary/10 shadow-md dark:bg-secondary-800',
    children: 'flex h-full flex-col justify-center gap-2 p-4',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row',
    },
    href: 'hover:bg-secondary-100 dark:hover:bg-secondary-700',
  },
  img: {
    base: '',
    horizontal: {
      off: 'rounded-t-xl',
      on: 'h-48 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
    },
  },
}
