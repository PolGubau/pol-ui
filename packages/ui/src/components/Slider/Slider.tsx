"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn, mergeDeep } from "../../helpers"
import { getTheme } from "../../theme-store"
import { Colors, ColorsEnum, DeepPartial, OrientationsEnum } from "../../types"
import { Tooltip } from "../Tooltip"
import { SliderTheme } from "./theme"

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string
  color?: Colors
  theme?: DeepPartial<SliderTheme>
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      color = ColorsEnum.primary,
      theme: customTheme = {},
      orientation = OrientationsEnum.horizontal,
      ...props
    },
    ref
  ) => {
    const theme = mergeDeep(getTheme().slider, customTheme)

    const [value, setValue] = React.useState(props.defaultValue || [0])

    const [isDragging, setIsDragging] = React.useState(false)

    const onChange = (values: number[]) => {
      setValue(values)
      props.onValueChange?.(values)
    }

    const onDragStart = () => setIsDragging(true)
    const onDragEnd = () => {
      setTimeout(() => {
        setIsDragging(false)
      }, 1000)
    }

    return (
      <SliderPrimitive.Slider
        value={value}
        onValueChange={onChange}
        ref={ref}
        className={cn(theme.base, className)}
        data-orientation={orientation}
        orientation={orientation}
        disabled={props.disabled}
        data-disabled={props.disabled}
        {...props}
      >
        {/*  */}
        <SliderPrimitive.Track
          data-orientation={orientation}
          className={cn(theme.track.base, theme.track[orientation])}
        >
          <SliderPrimitive.Range
            data-orientation={orientation}
            className={cn(theme.range, `bg-${color}`)}
          />
        </SliderPrimitive.Track>

        {/*  */}
        {value.map((_, i) => (
          <Tooltip
            arrow
            key={i}
            label={value[i] ? value[i].toString() : ""}
            open={isDragging}
            disabled={props.disabled}
          >
            <SliderPrimitive.Thumb
              onPointerDown={onDragStart}
              onPointerUp={onDragEnd}
              aria-disabled={props.disabled}
              key={i}
              className={cn(`border-${color} ring-${color}`, theme.thumb)}
            />
          </Tooltip>
        ))}
      </SliderPrimitive.Slider>
    )
  }
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
