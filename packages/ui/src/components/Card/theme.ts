export interface CardTheme {
  root: CardRootTheme
}

export interface CardRootTheme {
  base: string
  href: string
}

export interface CardImageTheme {
  base: string
}
export const cardTheme: CardTheme = {
  root: {
    base: 'flex rounded-2xl bg-background-onPrimary dark:bg-secondary-800 h-full gap-2 p-4 group overflow-auto',
    href: 'hover:bg-secondary-100 dark:hover:bg-secondary-700',
  },
}
