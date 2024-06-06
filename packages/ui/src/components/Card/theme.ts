import type { IBoolean } from '../../types'

export interface CardTheme {
  root: CardRootTheme
}

export interface CardRootTheme {
  base: string
  children: string
  href: string
}

export interface CardImageTheme {
  base: string
  horizontal: IBoolean
}
export const cardTheme: CardTheme = {
  root: {
    base: 'flex rounded-xl bg-secondary/10 shadow-md dark:bg-secondary-800  ',
    children: 'flex h-full flex-col justify-center gap-2 p-4',

    href: 'hover:bg-secondary-100 dark:hover:bg-secondary-700',
  },
}
