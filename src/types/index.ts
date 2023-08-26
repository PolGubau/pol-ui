export type Identifier = string | number;
export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
export type SizesWithNone = Sizes | "none";
export type SizesWithFull = Sizes | "full";
export type SizesComplete = Sizes | "none" | "full";
export type Side = "right" | "left";
export type Direction = "x" | "y";
export type Alignments = Side | "center";
export type Tens = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
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
