import {
	Sizes,
	SizesWithNone,
	SizesComplete,
	ColorTypes,
	Tens,
	SizesWithFull,
	Shadow,
	Alignments,
} from "../types";

export const applyMaxWidth = (size: SizesWithFull) => {
	switch (size) {
		case "xs":
			return "max-w-xs";
		case "sm":
			return "max-w-sm";
		case "md":
			return "max-w-md";
		case "lg":
			return "max-w-lg";
		case "xl":
			return "max-w-xl";
		case "full":
			return "max-w-full";
	}
};
export const applyShadow = (shadow: Shadow = "none") => {
	switch (shadow) {
		case "xs":
			return "shadow-sm";
		case "sm":
			return "shadow-md";
		case "md":
			return "shadow-lg";
		case "lg":
			return "shadow-xl";
		case "xl":
			return "shadow-2xl";
		case "inner":
			return "shadow-inner";
		case "outline":
			return "shadow-outline";
		default:
			return "shadow-none";
	}
};
export const applyTextSize = (size: Sizes = "md") => {
	switch (size) {
		case "xs":
			return "text-xs";
		case "sm":
			return "text-sm";
		case "md":
			return "text-md";
		case "lg":
			return "text-lg";
		case "xl":
			return "text-xl";
	}
};
export const applyMarginX = (x: SizesWithNone = "none") => {
	switch (x) {
		case "xs":
			return "mx-1";
		case "sm":
			return "mx-2";
		case "md":
			return "mx-4";
		case "lg":
			return "mx-8";
		case "xl":
			return "mx-16";
		default:
			return "mx-0";
	}
};
export const applyMarginY = (y: SizesWithNone = "none") => {
	switch (y) {
		case "xs":
			return "my-1";
		case "sm":
			return "my-2";
		case "md":
			return "my-4";
		case "lg":
			return "my-8";
		case "xl":
			return "my-16";
		default:
			return "my-0";
	}
};
export const applyMargin = ({ x = "none", y = "none" }: { x?: SizesWithNone; y?: SizesWithNone }) =>
	`${applyMarginX(x)} ${applyMarginY(y)}`;
export const applyPaddingX = (x: SizesWithNone = "none") => {
	switch (x) {
		case "xs":
			return "px-1";
		case "sm":
			return "px-2";
		case "md":
			return "px-4";
		case "lg":
			return "px-8";
		case "xl":
			return "px-16";
		default:
			return "px-0";
	}
};
export const applyPaddingY = (y: SizesWithNone = "none") => {
	switch (y) {
		case "xs":
			return "py-1";
		case "sm":
			return "py-2";
		case "md":
			return "py-4";
		case "lg":
			return "py-8";
		case "xl":
			return "py-16";
		default:
			return "py-0";
	}
};
export const applyPadding = ({
	x = "none",
	y = "none",
}: {
	x?: SizesWithNone;
	y?: SizesWithNone;
}) => `${applyPaddingX(x)} ${applyPaddingY(y)}`;
export const applyFullWidth = (b: boolean = false) => {
	return b ? "w-full" : "w-fit";
};
export const applyDisabled = (b: boolean = false) => {
	return b ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
};
export const applyCentered = (b: boolean = false) => {
	return b ? "justify-center text-center" : "justify-start text-left";
};
export const applyRounded = (round: SizesComplete = "none") => {
	switch (round) {
		case "xs":
			return "rounded-sm";
		case "sm":
			return "rounded-md";
		case "md":
			return "rounded-lg";
		case "lg":
			return "rounded-xl";
		case "xl":
			return "rounded-2xl";
		case "none":
			return "rounded-none";
		case "full":
			return "rounded-full";
	}
};
export const applyBgColor = (color: ColorTypes = "primary") => {
	switch (color) {
		case "secondary":
			return "bg-secondary";
		case "success":
			return "bg-success";
		case "danger":
			return "bg-danger";
		case "accent":
			return "bg-accent";
		case "info":
			return "bg-info";
		case "background":
			return "bg-background";
		case "contrast":
			return "bg-contrast";
		default:
			return "bg-primary";
	}
};
export const applyColor = (color: ColorTypes = "primary") => {
	switch (color) {
		case "secondary":
			return "text-secondary";
		case "success":
			return "text-success";
		case "danger":
			return "text-danger";
		case "accent":
			return "text-accent";
		case "info":
			return "text-info";
		case "background":
			return "text-background";
		case "contrast":
			return "text-contrast";
		default:
			return "text-primary";
	}
};
export const applyOpacity = (opacity: Tens = 100) => {
	switch (opacity) {
		case 0:
			return "opacity-0";
		case 10:
			return "opacity-10";
		case 20:
			return "opacity-20";
		case 30:
			return "opacity-30";
		case 40:
			return "opacity-40";
		case 50:
			return "opacity-50";
		case 60:
			return "opacity-60";
		case 70:
			return "opacity-70";
		case 80:
			return "opacity-80";
		case 90:
			return "opacity-90";
		default:
			return "opacity-100";
	}
};
export const applyAlignments = (v: Alignments) => {
	switch (v) {
		case "left":
			return "justify-start";
		case "right":
			return "justify-end";
		default:
			return "justify-center";
	}
};
