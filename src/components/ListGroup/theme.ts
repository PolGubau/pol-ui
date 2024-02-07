import type { IBoolean } from '../../types'

export interface ListGroupTheme {
  root: ListGroupRootTheme
  item: ListGroupItemTheme
}

export interface ListGroupItemTheme {
  base: string
  link: {
    base: string
    active: IBoolean
    disabled: IBoolean
    href: IBoolean
    icon: string
  }
}

export interface ListGroupRootTheme {
  base: string
}

export const listGroupTheme: ListGroupTheme = {
  root: {
    base: 'list-none rounded-lg border border-secondary-200 bg-secondary-50 text-sm font-medium text-secondary-900 dark:border-secondary-600 dark:bg-secondary-700 dark:text-white text-left',
  },
  item: {
    base: '[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0',
    link: {
      base: 'flex items-center w-full border-b border-secondary-200 py-2 px-4 dark:border-secondary-600',
      active: {
        off: 'hover:bg-secondary-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-secondary-600 dark:hover:bg-secondary-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-secondary-500',
        on: 'bg-cyan-700 text-white dark:bg-secondary-800',
      },
      disabled: {
        off: '',
        on: 'hover:bg-secondary-100 text-secondary-900 hover:text-secondary-900 focus:text-secondary-900 bg-secondary-100 cursor-not-allowed',
      },
      href: {
        off: '',
        on: '',
      },
      icon: 'mr-2 h-4 w-4 fill-current',
    },
  },
}
