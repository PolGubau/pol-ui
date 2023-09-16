import { IconNames } from "../components";

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
	| "visible";

export enum ButtonVariants {
	"filled" = "filled",
	"outlined" = "outlined",
	"text" = "text",
}

export type ButtonVariant = `${ButtonVariants}`;

// Basic justification for flexbox
export enum BaseJustifies {
	"left" = "left",
	"right" = "right",
	"normal" = "normal",
}

export type BaseJustify = `${BaseJustifies}`;

// Content distribution

export enum ContentDistributions {
	"around" = "space-around",
	"between" = "space-between",
	"evenly" = "space-evenly",
	"stretch" = "stretch",
}

export type ContentDistribution = `${ContentDistributions}`;

/* Self position 
 does not take left and right values 
 center;  Pack items around the center 
 start;  Pack items from the start 
 end; Pack items from the end 
 flex-start;  Pack flex items from the start 
 flex-end; Pack flex items from the end */
export enum ContentPositions {
	"center" = "center",
	"end" = "end",
	"flex-end" = "flex-end",
	"flex-start" = "flex-start",
	"start" = "start",
}

export type ContentPosition = `${ContentPositions}`;

/* self-start; Pack flex items from the start 
 self-end;  Pack flex items from the end */

export enum ExclusiveSelfPositions {
	"self-end" = "self-end",
	"self-start" = "self-start",
}
export type ExclusiveSelfPosition = `${ExclusiveSelfPositions}`;

export type SelfPosition = ExclusiveSelfPosition | ContentPosition;
/* 
·
·
·
·
Flex justify content types and anotations: 
*/
export const JustifyContents = {
	...BaseJustifies,
	...ContentDistributions,
	...ContentPositions,
	...Globals,
};
export type JustifyContent = Global | ContentDistribution | ContentPosition | BaseJustify;

/* 
·
·
·
·
Flex direction types and anotations: 
*/
export enum FlexDirections {
	"row" = "row",
	"column" = "column",
	"rowReverse" = "row-reverse",
	"columnReverse" = "column-reverse",
}
export type FlexDirection = `${FlexDirections}`;
export interface IFlexDirection {
	direction?: FlexDirection;
}
/* 
·
·
·
·
Flex Wrap types and anotations: 
*/
export enum FlexWraps {
	"nowrap" = "nowrap",
	"wrap" = "wrap",
	"wrapReverse" = "wrap-reverse",
}
export type FlexWrap = `${FlexWraps}`;
export interface IFlexWrap {
	wrap?: FlexWrap;
}
enum ExclusiveJustifyItems {
	"baseline" = "baseline",
	"legacy" = "legacy",
	"stretch" = "stretch",
}
export const JustifyItems = {
	...ExclusiveJustifyItems,
	...Globals,
	...ExclusiveSelfPositions,
	...ContentPositions,
	...BaseJustifies,
};

export type JustifyItem = Global | SelfPosition | BaseJustify | "baseline" | "legacy" | "stretch";

// Justify self
export type JustifySelf = Global | SelfPosition | "auto" | "baseline" | BaseJustify | "stretch";

/*
All posibilities for Align Items 
*/
export enum BasicAlign {
	"normal" = "normal",
	"stretch" = "stretch",
}
export type BasicAlignItem = `${BasicAlign}`;

/* Baseline alignment 
align-items: baseline;
align-items: first baseline;
align-items: last baseline;  Overflow alignment (for positional alignment only) 
align-items: safe center;
align-items: unsafe center;
*/
export enum BaselineAlign {
	"baseline" = "baseline",
	"first_baseline" = "first baseline",
	"last_baseline" = "last baseline",
	"safe_center" = "safe center",
	"unsafe_center" = "unsafe center",
}
export type BaselineAlignItem = `${BaselineAlign}`;

// Global values are specified with one of the following keywords: inherit, initial, unset, revert, or none, type and enum in default types file.

// Then:
export const AlignItems = {
	...BasicAlign,
	...ExclusiveSelfPositions,
	...ContentPositions,
	...BaselineAlign,
	...Globals,
};

export type AlignItem = BasicAlignItem | SelfPosition | BaselineAlignItem | Global;

export type IconName = `${IconNames}`;
export type IconType = IconName | React.JSX.Element;

export interface IconData {
	name: IconNames;
	icon: React.ReactNode;
}

export enum ModalCloseReason {
	Escape = "Escape",
	ClickOutside = "ClickOutside",
	Submit = "Submit",
	Cancel = "Cancel",
	ClickButton = "ClickButton",
}
export interface ModalProps {
	isOpen: boolean;
	handleClose?: (reason?: ModalCloseReason) => void;
	children?: React.ReactNode;
	title?: string;
	centered?: boolean;
	icon?: IconType;
	padding?: SizesWithNone;
	rounded?: SizesComplete;
	shadow?: Shadow;
	hasCloseButton?: boolean;
	maxWidth?: SizesWithFull;
	cancelButton?: {
		color?: ColorType;
		variant?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
	submitButton?: {
		color?: ColorType;
		variant?: ButtonVariant;
		icon?: IconType;
		text?: string;
		onClick?: () => Promise<void> | void;
	};
}

export enum ToastTypes {
	neutral = "neutral",
	success = "success",
	danger = "danger",
}
export type ToastVariant = `${ToastTypes}`;

export interface ToastProps {
	message: string;
	variant?: ToastVariant;
	duration?: number;
	action?: {
		label?: string;
		icon?: IconType;
		onClick: () => void;
	};
}
export type SelectOption =
	| { [key: string]: string | number | boolean | object | undefined | null }
	| number
	| string;
