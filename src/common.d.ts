export type Identifier = string | number;
export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
export type SizesWithNone = Sizes | "none";
export type SizesWithFull = Sizes | "full";
export type SizesComplete = Sizes | "none" | "full";
export type Side = "right" | "left";
export type ColorTypes =
	| "success"
	| "danger"
	| "accent"
	| "warning"
	| "info"
	| "dark"
	| "light"
	| "default";

export type BasicProps = {
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	id?: string;
};

export type ID = {
	id: Identifier;
};
export interface AnyButId extends ID {
	[key: string]: any;
}
export interface anyObject {
	[key: string]: any;
}
export type Rounded = "circular" | "square" | "rounded";
 export type Alignments = "left" | "center" | "right";
export type Spacings = "none" | "small" | "medium" | "large" | "auto";
export type Opacities = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
