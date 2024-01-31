import type { MainSizesType } from '../../types'

export interface RangeSliderTheme {
  root: { base: string }
  field: {
    base: string
    input: {
      base: string
      sizes: MainSizesType
    }
  }
}
export const rangeSliderTheme: RangeSliderTheme = {
  root: {
    base: 'flex',
  },
  field: {
    base: 'relative w-full',
    input: {
      base: 'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
      sizes: {
        xs: 'h-0.5 range-xs',
        sm: 'h-1 range-sm',
        md: 'h-2',
        lg: 'h-3 range-lg',
        xl: 'h-4 range-xl',
      },
    },
  },
}
