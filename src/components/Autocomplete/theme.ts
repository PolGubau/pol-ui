import type { IBoolean } from '../../types'

export interface AutocompleteTheme {
  base: string
  command: {
    base: string
    input: string
    item: string
    icon: {
      base: string
      selected: IBoolean
    }
  }
  button: {
    base: string
    remaining: string
    chevron: {
      base: string
      opened: string
    }
  }
}

export const autocompleteTheme: AutocompleteTheme = {
  base: 'p-0',
  command: {
    base: 'bg-secondary-50 min-w-[200px]',

    input: 'w-full h-10',
    item: 'aria-selected:bg-primary/30',
    icon: {
      base: 'ml-auto h-4 w-4',
      selected: {
        on: 'opacity-100',
        off: 'opacity-0',
      },
    },
  },
  button: {
    base: 'flex justify-between min-w-[200px] h-10',
    remaining: 'text-secondary w-8 h-8',
    chevron: {
      base: 'h-4 w-4 shrink-0 opacity-50 transition-all',
      opened: 'rotate-180',
    },
  },
}
