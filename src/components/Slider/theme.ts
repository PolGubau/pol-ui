import type { ColorsType } from '../../types'

export interface SliderTheme {
  base: string
  track: string
  range: {
    base: string
    colors: ColorsType
  }
  thumb: {
    base: string
    colors: ColorsType
  }
}
export const sliderTheme: SliderTheme = {
  base: 'relative flex w-full touch-none select-none items-center',
  track: 'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary-200 dark:bg-secondary-800',
  range: {
    base: 'absolute h-full',
    colors: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      error: 'bg-error',
      warning: 'bg-warning',
      info: 'bg-info',
    },
  },
  thumb: {
    base: 'block h-5 w-5 rounded-full border-2 bg-secondary-50 dark:bg-secondary-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-secondary-50 dark:ring-offset-secondary-900',
    colors: {
      primary: 'border-primary ring-primary dark:ring-primary',
      secondary: 'border-secondary ring-secondary dark:ring-secondary',
      success: 'border-success ring-success dark:ring-success',
      error: 'border-error ring-error dark:ring-error',
      warning: 'border-warning ring-warning dark:ring-warning',
      info: 'border-info ring-info dark:ring-info',
    },
  },
}
