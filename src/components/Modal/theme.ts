import type { IBoolean, Sizes } from '../../types'
import type { ModalPositions } from './Modal'
import type { ModalBodyTheme } from './ModalBody'
import type { ModalFooterTheme } from './ModalFooter'
import type { ModalHeaderTheme } from './ModalHeader'

export interface ModalTheme {
  root: ModalRootTheme
  content: ModalContentTheme
  body: ModalBodyTheme
  header: ModalHeaderTheme
  footer: ModalFooterTheme
}

export interface ModalRootTheme {
  base: string
  show: IBoolean
  sizes: Sizes
  positions: ModalPositions
}

export interface ModalContentTheme {
  base: string
  inner: string
}
export const modalTheme: ModalTheme = {
  root: {
    base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full cursor-pointer transition-all',
    show: {
      on: 'flex bg-secondary-900 bg-opacity-50 dark:bg-opacity-80',
      off: 'hidden',
    },
    sizes: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
    },
    positions: {
      'top-left': 'items-start justify-start',
      'top-center': 'items-start justify-center',
      'top-right': 'items-start justify-end',
      'center-left': 'items-center justify-start',
      center: 'items-center justify-center',
      'center-right': 'items-center justify-end',
      'bottom-right': 'items-end justify-end',
      'bottom-center': 'items-end justify-center',
      'bottom-left': 'items-end justify-start',
    },
  },
  content: {
    base: 'relative h-full w-full p-4 md:h-auto',
    inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]',
  },
  body: {
    base: 'p-6 flex-1 overflow-auto',
    popup: 'pt-0',
  },
  header: {
    base: 'flex items-center justify-between rounded-t dark:border-gray-600 border-b pl-5 py-3 pr-3',
    popup: 'p-2 border-b-0',
    title: 'text-xl font-medium text-gray-900 dark:text-white',
  },
  footer: {
    base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
    popup: 'border-t',
  },
}
