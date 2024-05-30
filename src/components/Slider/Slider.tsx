import * as SliderPrimitive from '@radix-ui/react-slider'
import React from 'react'
import { cn, mergeDeep } from '../../helpers'
import type { Colors, DeepPartial } from '../../types/types'
import type { SliderTheme } from './theme'
import { getTheme } from '../../theme-store'
import { ColorsEnum } from '../../types'

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  theme?: DeepPartial<SliderTheme>
  color?: Colors
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, theme: customTheme = {}, color = ColorsEnum.primary, ...props }, ref) => {
    const theme: SliderTheme = mergeDeep(getTheme().slider, customTheme)

    return (
      <SliderPrimitive.Root ref={ref} className={cn(theme.base, className)} {...props}>
        <SliderPrimitive.Track className={theme.track}>
          <SliderPrimitive.Range className={cn(theme.range.base, theme.range.colors[color])} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={cn(theme.thumb.base, theme.thumb.colors[color])} />
      </SliderPrimitive.Root>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
