export interface DividerTheme {
  base: string
  orientation: {
    horizontal: string
    vertical: string
  }
}

export const dividerTheme: DividerTheme = {
  base: 'bg-secondary-200 dark:bg-secondary-800',
  orientation: {
    horizontal: 'w-full h-px sm:mx-auto my-2',
    vertical: 'h-auto w-px mx-2',
  },
}
