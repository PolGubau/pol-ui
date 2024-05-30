import type { IBoolean } from '../../types'
import type { SidebarCollapseTheme } from './SidebarCollapse'
import type { SidebarItemTheme } from './SidebarItem'
import type { SidebarLogoTheme } from './SidebarLogo'

export interface SidebarTheme {
  root: {
    base: string
    collapsed: IBoolean
    inner: string
  }
  collapse: SidebarCollapseTheme
  item: SidebarItemTheme
  itemGroup: string
  logo: SidebarLogoTheme
  closeButton: {
    base: string
    collapsed: string
    expanded: string
  }
}
export const sidebarTheme: SidebarTheme = {
  root: {
    base: 'h-full w-fit transition-all scrollbar-gutter bg-secondary-50 dark:bg-secondary-900',
    collapsed: {
      on: 'w-16',
      off: 'w-64',
    },
    inner: 'h-full overflow-y-auto overflow-x-hidden py-4 px-3 flex flex-col justify-between gap-6',
  },
  collapse: {
    button:
      'group flex w-full bg-secondary-50 dark:bg-secondary-900 items-center justify-center p-2 text-secondary-900 hover:brightness-90 dark:hover:brightness-125 dark:text-secondary-50',
    icon: {
      base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
      open: {
        off: '',
        on: '',
      },
    },
    rounded: {
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      none: '',
      full: 'rounded-full',
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left',
      icon: {
        base: 'h-6 w-6 shrink-0 transition-all transform origin-center',
        open: {
          off: ' rotate-0',
          on: 'rotate-180 ',
        },
      },
    },
    list: 'space-y-2 py-2 animate-slideDownIn',
  },

  item: {
    base: 'flex bg-secondary-50 dark:bg-secondary-900 items-center justify-center p-2 text-secondary-900 hover:brightness-90 dark:hover:brightness-125 dark:text-secondary-50',

    rounded: {
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      none: '',
      full: 'rounded-full',
    },

    active: 'bg-primary-200 dark:bg-primary-700  ',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold aspect-square flex justify-center items-center h-6',
    },
    content: {
      base: 'px-3 flex-1 whitespace-nowrap',
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
      active: ' ',
    },
    badge: '',
    listItem: '',
  },

  itemGroup:
    'mt-4 space-y-2 border-t border-secondary-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-secondary-700',

  logo: {
    base: 'mb-5 flex items-center pl-2.5',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
    },
    img: 'mr-3 h-6 sm:h-7',
  },
  closeButton: {
    base: 'flex h-fit w-full',
    collapsed: 'justify-center',
    expanded: 'justify-end',
  },
}
