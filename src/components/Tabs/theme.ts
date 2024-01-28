import type { IBoolean } from '../PoluiProvider'

export interface TabsTheme {
  base: string
  disabled: string
  navItem: {
    base: string
    text: string
    marker: {
      active: IBoolean
      base: string
    }
  }
}

export const tabTheme: TabsTheme = {
  base: 'flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full [perspective:1000px]',

  disabled: 'opacity-50 cursor-not-allowed',
  navItem: {
    base: 'relative px-4 py-2 rounded-full',
    text: 'relative block text-black dark:text-white',

    marker: {
      active: {
        on: 'bg-primary dark:bg-primary-400',
        off: '',
      },
      base: 'absolute inset-0 bottom-0 rounded-full',
    },
  },
}
