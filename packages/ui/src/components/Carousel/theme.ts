import type { IBoolean } from '../../types'

export interface CarouselTheme {
  root: CarouselRootTheme
  indicators: CarouselIndicatorsTheme
  item: CarouselItemTheme
  control: CarouselControlTheme
  scrollContainer: CarouselScrollContainer
}

export interface CarouselRootTheme {
  base: string
  controlsBase: string
  leftControl: string
  rightControl: string
}

export interface CarouselIndicatorsTheme {
  active: IBoolean
  base: string
  wrapper: string
}

export interface CarouselItemTheme {
  base: string
  wrapper: IBoolean
}

export interface CarouselControlTheme {
  base: string
  icon: string
}

export interface CarouselScrollContainer {
  base: string
  snap: string
}
export const carouselTheme: CarouselTheme = {
  root: {
    base: 'relative h-full w-full',

    controlsBase: 'absolute top-0 flex h-full items-center justify-center px-4 focus:outline-none',

    leftControl: 'left-0',
    rightControl: 'right-0',
  },
  indicators: {
    active: {
      off: 'bg-primary-300 hover:bg-primary-400 dark:bg-primary-800 dark:hover:bg-primary-800',
      on: 'bg-primary dark:bg-primary-500',
    },
    base: 'h-3 w-3 rounded-full focus:outline-none transition-all focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-600 shadow-lg',
    wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
  },
  item: {
    base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    wrapper: {
      off: 'w-full flex-shrink-0 transform cursor-default snap-center',
      on: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    },
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary-400 group-hover:brightness-90 group-focus:outline-none group-focus:ring-4 group-focus:ring-secondary dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 transition-all',
    icon: 'h-5 w-5 text-secondary-600 dark:text-secondary-100 sm:h-6 sm:w-6 ',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-xl',
    snap: 'snap-x',
  },
}
