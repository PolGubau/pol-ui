import type { ElementType } from 'react'

export interface FooterTheme {
  brand: FooterBrandTheme
  groupLink: FooterLinkGroupTheme
  root: FooterRootTheme
}
export interface FooterLinkGroupTheme {
  title: string
  base: string
  col: string
  titleAs?: ElementType
}

export interface FooterBrandTheme {
  base: string
  img: string
  span: string
}

export interface FooterRootTheme {
  base: string
  container: string
}

export const footerTheme: FooterTheme = {
  root: {
    base: 'w-full rounded-lg bg-secondary-50 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between',
    container: 'w-full p-6',
  },
  groupLink: {
    title: 'text-md pb-2 font-semibold text-gray-800 first-letter:uppercase dark:text-secondary-100',
    base: 'flex flex-wrap text-sm text-gray-500 dark:text-secondary-300 gap-x-6 gap-y-4 items-center',
    col: 'flex-col',
  },

  brand: {
    base: 'mb-4 flex items-center sm:mb-0',
    img: 'mr-3 h-8',
    span: 'self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white',
  },
}
