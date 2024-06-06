import type { IBoolean } from '../../types'

export interface TabsTheme {
  base: string
  disabled: string
  navItem: {
    base: string
    text: string
    marker: {
      base: string
      active: IBoolean
      mode: {
        contained: string
        underlined: string
      }
    }
  }
}

export const tabsTheme: TabsTheme = {
  base: 'flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full [perspective:1000px] gap-1 p-px ',

  disabled: 'opacity-50 cursor-not-allowed',
  navItem: {
    base: 'relative px-3 py-1.5 rounded-full',
    text: 'relative flex text-secondary-900 dark:text-secondary-50',

    marker: {
      base: 'absolute inset-0 left-0 bottom-0 rounded-full',
      active: {
        on: 'bg-primary dark:bg-primary-400',
        off: '',
      },
      mode: {
        underlined: 'h-1 top-8',
        contained: 'h-full',
      },
    },
  },
}
