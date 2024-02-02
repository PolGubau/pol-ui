import type { IBoolean } from '../../types'
import type { SidebarCollapseTheme } from './SidebarCollapse'
import type { SidebarItemTheme } from './SidebarItem'
import type { SidebarItemGroupTheme } from './SidebarItemGroup'
import type { SidebarItemsTheme } from './SidebarItems'
import type { SidebarLogoTheme } from './SidebarLogo'

export interface SidebarTheme {
  root: {
    base: string
    collapsed: IBoolean
    inner: string
  }
  collapse: SidebarCollapseTheme
  item: SidebarItemTheme
  items: SidebarItemsTheme
  itemGroup: SidebarItemGroupTheme
  logo: SidebarLogoTheme
}
export const sidebarTheme: SidebarTheme = {
  root: {
    base: 'h-full w-fit bg-secondary-50 dark:bg-secondary-900 transition-all',
    collapsed: {
      on: 'w-fit',
      off: 'w-64',
    },
    inner: 'h-full overflow-y-auto overflow-x-hidden py-4 px-3 flex flex-col justify-between gap-6',
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    icon: {
      base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
      open: {
        off: '',
        on: 'text-gray-900',
      },
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left',
      icon: {
        base: 'h-6 w-6 transition ease-in-out delay-0',
        open: {
          on: 'rotate-180',
          off: '',
        },
      },
    },
    list: 'space-y-2 py-2',
  },

  item: {
    base: 'flex bg-secondary-50 dark:bg-secondary-900 items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:brightness-90 dark:text-white dark:hover:bg-gray-700',
    active: 'bg-primary-200 dark:bg-primary-700',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold',
    },
    content: {
      base: 'px-3 flex-1 whitespace-nowrap',
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
      active: 'text-gray-700 dark:text-gray-100',
    },
    label: '',
    listItem: '',
  },
  items: {
    base: '',
  },
  itemGroup: {
    base: 'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
  },
  logo: {
    base: 'mb-5 flex items-center pl-2.5',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
    },
    img: 'mr-3 h-6 sm:h-7',
  },
}
