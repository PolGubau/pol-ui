import type { BooleanEnum, ColorsType, RoundedSizesTypes } from '../../types'

export interface ToggleTheme {
  base: string
  rounded: RoundedSizesTypes
  active: Record<
    BooleanEnum,
    {
      base: string
      colors: ColorsType
    }
  >
}
export const toggleTheme: ToggleTheme = {
  base: 'flex items-center justify-center aspect-square h-10  text-black dark:text-white transition-colors focus:outline-none',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  },
  active: {
    on: {
      base: '',
      colors: {
        primary: 'bg-primary/60',
        secondary: 'bg-secondary/60',
        success: 'bg-success/60',
        info: 'bg-info/60',
        warning: 'bg-warning/60',
        error: 'bg-error/60',
      },
    },
    off: {
      base: '',
      colors: {
        primary: 'enabled:hover:bg-primary/20 enabled:focus:bg-primary/30',
        secondary: 'enabled:hover:bg-secondary/20 enabled:focus:bg-secondary/30',
        success: 'enabled:hover:bg-success/20 enabled:focus:bg-success/30',
        info: 'enabled:hover:bg-info/20 enabled:focus:bg-info/30',
        warning: 'enabled:hover:bg-warning/20 enabled:focus:bg-warning/30',
        error: 'enabled:hover:bg-error/20 enabled:focus:bg-error/30',
      },
    },
  },
}
