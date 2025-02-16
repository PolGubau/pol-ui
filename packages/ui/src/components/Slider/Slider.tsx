"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import {
	type Colors,
	ColorsEnum,
	type DeepPartial,
	OrientationsEnum,
} from "../../types";
import type { SliderTheme } from "./theme";

export interface SliderProps
	extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
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

export const Slider = ({
	className,
	classNames,
	color = ColorsEnum.primary,
	theme: customTheme = {},
	orientation = OrientationsEnum.horizontal,
	...props
}: SliderProps) => {
	const theme = mergeDeep(getTheme().slider, customTheme);

	const [value, setValue] = React.useState(props.defaultValue || [0]);

	const onChange = (values: number[]) => {
		setValue(values);
		props.onValueChange?.(values);
	};

	return (
		<SliderPrimitive.Slider
			value={value}
			onValueChange={onChange}
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
				className={cn(
					theme.track.base,
					theme.track[orientation],
					classNames?.track,
				)}
			>
				<SliderPrimitive.Range
					data-orientation={orientation}
					className={cn(theme.range, `bg-${color}`, classNames?.range)}
				/>
			</SliderPrimitive.Track>

			{/*  */}
			{value.map((_, i) => (
				<SliderPrimitive.Thumb
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={i}
					data-orientation={orientation}
					aria-disabled={props.disabled}
					className={cn(
						`border-${color} ring-${color}`,
						theme.thumb,
						classNames?.thumb,
					)}
				/>
			))}
		</SliderPrimitive.Slider>
	);
};
