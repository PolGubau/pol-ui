"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { type Colors, ColorsEnum, type DeepPartial, OrientationsEnum } from "../../types";
import { Tooltip } from "../Tooltip";
import type { SliderTheme } from "./theme";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
  tooltip?: boolean;
  classNames?: {
    root?: string;
    track?: string;
    range?: string;
    thumb?: string;
  };
  color?: Colors;
  theme?: DeepPartial<SliderTheme>;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      classNames,
      color = ColorsEnum.primary,
      theme: customTheme = {},
      orientation = OrientationsEnum.horizontal,
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().slider, customTheme);

    const [value, setValue] = React.useState(props.defaultValue || [0]);

    const [isDragging, setIsDragging] = React.useState(false);

    const onChange = (values: number[]) => {
      setValue(values);
      props.onValueChange?.(values);
    };

    const onDragStart = () => setIsDragging(true);
    const onDragEnd = () => {
      setTimeout(() => {
        setIsDragging(false);
      }, 1000);
    };

    return (
      <SliderPrimitive.Slider
        value={value}
        onValueChange={onChange}
        ref={ref}
        data-testid="slider"
        role="progressbar"
        className={cn(theme.base, classNames?.root, className)}
        data-orientation={orientation}
        orientation={orientation}
        disabled={props.disabled}
        data-disabled={props.disabled}
        {...props}
      >
        <SliderPrimitive.Track
          data-orientation={orientation}
          className={cn(theme.track.base, theme.track[orientation], classNames?.track)}
        >
          <SliderPrimitive.Range
            data-orientation={orientation}
            className={cn(theme.range, `bg-${color}`, classNames?.range)}
          />
        </SliderPrimitive.Track>

        {/*  */}
        {value.map((_, i) => (
          <Tooltip
            arrow={true}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
            label={value?.[i] ? value?.[i]?.toString() : ""}
            open={isDragging}
            disabled={props.disabled}
          >
            <SliderPrimitive.Thumb
              onPointerDown={onDragStart}
              onPointerUp={onDragEnd}
              aria-disabled={props.disabled}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              className={cn(`border-${color}ring-${color}`, theme.thumb, classNames?.thumb)}
            />
          </Tooltip>
        ))}
      </SliderPrimitive.Slider>
    );
  },
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
