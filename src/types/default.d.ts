export type ValueOf<T> = T[keyof T];

export enum Globals {
	"inherit" = "inherit",
	"initial" = "initial",
	"revert" = "revert",
	"unset" = "unset",
	"moz-initial" = "-moz-initial",
	"revert-layer" = "revert-layer",
}

export type Global = `${Globals}`;

export enum Sizes {
	"xs" = "xs",
	"sm" = "sm",
	"md" = "md",
	"lg" = "lg",
	"xl" = "xl",
}

export type Size = `${Sizes}`;

export type Identifier = string | number;
export type SizesWithNone = Size | "none";
export type SizesWithFull = Size | "full";

export type SizesComplete = Size | "none" | "full";

export type PaddingOneOrBothValues =
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

export enum Directions {
	"x" = "x",
	"y" = "y",
}
export type Direction = `${Directions}`;

export type Alignments = Side | "center";

// 4 sides (Locations, Placement)
export type Positions = "top" | "bottom" | Side;

export type Tens = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Shadow = SizesWithNone | "inner" | "outline";

// css positions
export type Position = "relative" | "absolute" | "fixed" | "sticky";

export enum ColorTypes {
	"primary" = "primary",
	"secondary" = "secondary",
	"success" = "success",
	"danger" = "danger",
	"accent" = "accent",
	"info" = "info",
	"background" = "background",
	"contrast" = "contrast",
}

export type ColorType = keyof typeof ColorTypes;

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

export type Overflow =
	| Global
	| "-moz-hidden-unscrollable"
	| "auto"
	| "clip"
	| "hidden"
	| "scroll"
	| "visible"
	| (string & {});

export enum ButtonVariants {
	"filled" = "filled",
	"outlined" = "outlined",
	"text" = "text",
}

export type ButtonVariant = "filled" | "outlined" | "text";
