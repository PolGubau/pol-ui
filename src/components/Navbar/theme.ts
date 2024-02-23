import type { NavbarCollapseTheme } from './navbar-collapse'

export interface NavbarTheme {
  root: NavbarRootTheme
  collapse: NavbarCollapseTheme
  toggle: NavbarToggleTheme
}
export interface NavbarToggleTheme {
  base: string
}

export interface NavbarRootTheme {
  base: string
  inner: {
    base: string
  }
}
export const navbarTheme: NavbarTheme = {
  root: {
    base: 'px-2 py-2.5 flex gap-4 justify-between items-center sm:px-3 w-full sticky top-0 bg-secondary-50/80 dark:secondary-900/80 backdrop-filter backdrop-blur-md z-50',

    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between',
    },
  },

  collapse: {
    base: 'md:flex md:w-auto absolute md:relative top-20 shadow rounded-lg left-0 w-[90vw] mx-[5vw] md:mx-0 z-50 py-2 bg-secondary-50 dark:secondary-900',
    hidden: {
      on: 'hidden',
      off: '',
    },
  },

  toggle: {
    base: 'md:hidden',
  },
}
