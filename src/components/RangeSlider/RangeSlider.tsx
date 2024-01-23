import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { InputSizes } from '../Input'

export interface RangeSliderTheme {
  root: RangeSliderRootTheme
  field: RangeSliderFieldTheme
}

export interface RangeSliderRootTheme {
  base: string
}

export interface RangeSliderFieldTheme {
  base: string
  input: {
    base: string
    sizes: InputSizes
  }
}

export interface RangeSliderProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
  sizing?: keyof InputSizes
  theme?: DeepPartial<RangeSliderTheme>
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, sizing = 'md', theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().rangeSlider, customTheme)

    return (
      <div data-testid="ui-range-slider" className={twMerge(theme.root.base, className)}>
        <div className={theme.field.base}>
          <input
            ref={ref}
            type="range"
            className={twMerge(theme.field.input.base, theme.field.input.sizes[sizing])}
            {...props}
          />
        </div>
      </div>
    )
  },
)

RangeSlider.displayName = 'RangeSlider'
