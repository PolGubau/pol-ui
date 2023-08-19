export type Identifier = string | number;
export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
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
