export interface CommandTheme {
  root: {
    base: string
  }
  empty: {
    base: string
  }
  group: {
    base: string
    header: string
  }
  list: {
    base: string
  }
  input: {
    base: string
    icon: string
    input: string
  }

  item: {
    base: string
  }
}

export const commandTheme: CommandTheme = {
  root: {
    base: 'flex h-full w-full flex-col overflow-hidden rounded-md bg-secondary-50 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-50',
  },
  empty: {
    base: 'py-4 text-center text-sm',
  },
  group: {
    base: 'overflow-hidden text-secondary-900 py-1',
    header: 'font-medium text-xs px-4 py-1.5 text-secondary-800 dark:text-secondary-400',
  },
  list: {
    base: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
  },
  input: {
    base: 'flex p-2 items-center border-b dark:border-secondary-800 border-secondary-200 px-3',
    icon: 'mr-2 h-4 w-4 shrink-0 opacity-50',
    input:
      'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-secondary-600 placeholder:dark:text-secondary-500 disabled:cursor-not-allowed disabled:opacity-50',
  },

  item: {
    base: 'flex flex-1 w-full relative cursor-pointer select-none items-center px-6 py-2 text-secondary-700 dark:text-secondary-50 text-sm outline-none aria-selected:bg-secondary-300/80 dark:aria-selected:bg-secondary-900/80  aria-selected:text-secondary-900 dark:aria-selected:text-secondary-50',
  },
}
