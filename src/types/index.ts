export enum Size {
	"xs" = "xs",
	"sm" = "sm",
	"md" = "md",
	"lg" = "lg",
	"xl" = "xl",
}

export type Sizes = keyof typeof Size;

export type Identifier = string | number;
export type SizesWithNone = Sizes | "none";
export type SizesWithFull = Sizes | "full";
export type SizesComplete = Sizes | "none" | "full";

export type paddingOneOrBothValues =
	| SizesWithNone
	| {
			x: SizesWithNone;
			y: SizesWithNone;
	  };

export enum Sides {
	"right" = "right",
	"left" = "left",
}

export type Side = `${Sides}`;
export type Direction = "x" | "y";
export type Alignments = Side | "center";
export type Positions = "top" | "bottom" | Side;
export type Tens = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Shadow = SizesWithNone | "inner" | "outline";

export enum JustifyContents {
	"start" = "start",
	"end" = "end",
	"center" = "center",
	"between" = "between",
	"around" = "around",
	"evenly" = "evenly",
}
export type JustifyContent = `${JustifyContents}`;

export type Position = "relative" | "absolute" | "fixed" | "sticky";

export enum ColorType {
	"primary" = "primary",
	"secondary" = "secondary",
	"success" = "success",
	"danger" = "danger",
	"accent" = "accent",
	"info" = "info",
	"background" = "background",
	"contrast" = "contrast",
}

export type ColorTypes = keyof typeof ColorType;

export type BaseProps = {
	className?: string;
	style?: React.CSSProperties;
	id?: string;
	ariaLabel?: string;
};

export enum AspectRatio {
	SixteenNine = "16:9",
	FourThree = "4:3",
	OneOne = "1:1",
	ThreeTwo = "3:2",
	EightFive = "8:5",
}

export type AspectRatios = `${AspectRatio}`;

export interface Theme {
	background: string;
	contrast: string;
	primary: string;
	secondary: string;
	accent: string;
	success: string;
	danger: string;
	info: string;
	transparent: string;
}

export enum Transitions {
	"slideBottom" = "slideBottom",
	"slideTop" = "slideTop",
	"slideLeft" = "slideLeft",
	"slideRight" = "slideRight",
	"fade" = "fade",
	"flipUp" = "flipUp",
	"flipDown" = "flipDown",
	"none" = "none",
}

export type Transition = keyof typeof Transitions;
