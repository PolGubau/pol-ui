export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

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

export type Side = "right" | "left";
export type Direction = "x" | "y";
export type Alignments = Side | "center";
export type Positions = "top" | "bottom" | Side;
export type Tens = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Shadow = SizesWithNone | "inner" | "outline";

export type ColorTypes =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "accent"
	| "info"
	| "background"
	| "contrast";

export type BaseProps = {
	className?: string;
	style?: React.CSSProperties;
	id?: string;
	ariaLabel?: string;
};
export type AspectRatios = "1/1" | "3/2" | "4/3" | "16/9" | "21/9";
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
