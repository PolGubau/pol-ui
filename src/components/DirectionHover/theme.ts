import type { RoundedSizesElastic } from '../PoluiProvider/PoluiTheme'

export interface DirectionHoverTheme {
  base: string
  overlay: string
  background: {
    wrapper: string
    image: string
  }

  children: string

  rounded: RoundedSizesElastic
}

export const directionHoverTheme: DirectionHoverTheme = {
  base: 'md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative',
  overlay: 'group-hover/card:flex hidden absolute inset-0 w-full h-full bg-black/40 z-[1] transition duration-500',
  background: {
    wrapper: 'h-full w-full flex relative bg-primary/60 dark:bg-primary/60',
    image: 'h-full w-full object-cover scale-[1.15]',
  },
  children: 'text-white absolute bottom-4 left-4 z-[2]',
  rounded: {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
    none: 'rounded-none',
  },
}
