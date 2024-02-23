import type { Sizes } from '../../types'
import type { ModalPositions } from './Modal'

export interface ModalTheme {
  base: string
  show: string
  closeButton: string
  sizes: Sizes
  positions: ModalPositions
  content: string
}

export interface ModalRootTheme {}

export const modalTheme: ModalTheme = {
  base: 'fixed top-0 right-0 left-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full transition-all',
  show: 'flex bg-secondary-900 bg-opacity-50 dark:bg-opacity-80',

  closeButton: 'absolute top-3 right-3',
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
  content:
    'relative h-full w-[90vw] md:w-full  p-2 md:h-auto rounded-lg bg-secondary-50 shadow dark:bg-secondary-900 flex flex-col h-fit max-h-[90vh]',
}
