import type { MainSizesType } from '../../types'

export interface RatingTheme {
  root: {
    base: string
  }
  star: {
    empty: string
    filled: string
    size: MainSizesType
  }
}

export const ratingTheme: RatingTheme = {
  root: {
    base: 'flex items-center',
  },
  star: {
    empty: 'text-secondary-300 dark:text-secondary-500',
    filled: 'text-yellow-400 fill-current',
    size: {
      xs: 'w-3 h-3',
      sm: 'w-5 h-5',
      md: 'w-7 h-7',
      lg: 'w-10 h-10',
      xl: 'w-14 h-14',
    },
  },
}
