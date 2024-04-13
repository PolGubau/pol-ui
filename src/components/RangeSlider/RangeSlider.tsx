import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial, MainSizes } from '../../types/types'
import type { RangeSliderTheme } from './theme'
import { MainSizesEnum } from '../../types/enums'

export interface RangeSliderProps extends Omit<ComponentProps<'input'>, 'ref' | 'type' | 'size'> {
  size?: MainSizes
  theme?: DeepPartial<RangeSliderTheme>
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, size = MainSizesEnum.md, theme: customTheme = {}, ...props }, ref) => {
    const theme: RangeSliderTheme = mergeDeep(getTheme().rangeSlider, customTheme)

    return (
      <div data-testid="ui-range-slider" className={twMerge(theme.root.base, className)}>
        <div className={theme.field.base}>
          <input
            ref={ref}
            type="range"
            className={twMerge(theme.field.input.base, theme.field.input.sizes[size])}
            {...props}
          />
        </div>
      </div>
    )
  },
)

RangeSlider.displayName = 'RangeSlider'
