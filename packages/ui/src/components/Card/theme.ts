export interface CardTheme {
  base: string
  href: string
}

export const cardTheme: CardTheme = {
  base: "flex flex-col gap-2 rounded-xl bg-secondary/40 gap-2 p-4 group",

  href: "hover:bg-secondary-100 dark:hover:bg-secondary-700",
}
