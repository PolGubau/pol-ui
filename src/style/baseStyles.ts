import {
	Sizes,
	SizesWithNone,
	SizesComplete,
	ColorTypes,
	Tens,
	SizesWithFull,
	Shadow,
	Alignments,
	AspectRatios,
} from "../types";

export const applyMaxWidth = (size?: SizesWithFull) => {
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
		default:
			return "max-w-full";
	}
};
export const applyShadow = (shadow?: Shadow) => {
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
export const applyTextSize = (size?: Sizes) => {
	switch (size) {
		case "xs":
			return "text-xs";
		case "sm":
			return "text-sm";

		case "lg":
			return "text-lg";
		case "xl":
			return "text-xl";
		default:
			return "text-md";
	}
};
export const applyMarginX = (x?: SizesWithNone) => {
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
export const applyMarginY = (y?: SizesWithNone) => {
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

export const applySameMargin = (v: SizesWithNone = "none") =>
	`${applyMarginX(v)} ${applyMarginY(v)}`;
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

export const applySamePadding = (v: SizesWithNone = "none") =>
	`${applyPaddingX(v)} ${applyPaddingY(v)}`;
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
export const applyShyRounded = (round?: Sizes) => {
	switch (round) {
		case "xs":
			return "rounded-sm";
		case "sm":
			return "rounded-md";

		case "lg":
			return "rounded-xl";
		case "xl":
			return "rounded-2xl";

		default:
			return "rounded-lg";
	}
};
export const applyRounded = (round?: SizesComplete) => {
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

		case "full":
			return "rounded-full";

		default:
			return "rounded-none";
	}
};
export const applyRoundedLarge = (round?: SizesComplete) => {
	switch (round) {
		case "xs":
			return "rounded-lg";
		case "sm":
			return "rounded-xl";
		case "md":
			return "rounded-2xl";
		case "lg":
			return "rounded-2xl";
		case "xl":
			return "rounded-3xl";

		case "full":
			return "rounded-full";

		default:
			return "rounded-none";
	}
};
export const applyBgColor = (color?: ColorTypes) => {
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
export const applyBgColorInChecked = (color?: ColorTypes) => {
	switch (color) {
		case "secondary":
			return "checked:bg-secondary";
		case "success":
			return "checked:bg-success";
		case "danger":
			return "checked:bg-danger";
		case "accent":
			return "checked:bg-accent";
		case "info":
			return "checked:bg-info";
		case "background":
			return "checked:bg-background";
		case "contrast":
			return "checked:bg-contrast checked:text-background";
		default:
			return "checked:bg-primary";
	}
};
export const applyColor = (color?: ColorTypes) => {
	switch (color) {
		case "primary":
			return "text-primary";
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
			return "text-default";
	}
};
export const applyOpacity = (opacity?: Tens) => {
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
export const applyAlignments = (v?: Alignments) => {
	switch (v) {
		case "left":
			return "justify-start";
		case "right":
			return "justify-end";
		default:
			return "justify-center";
	}
};

export const applyAspectRatio = (ratio?: AspectRatios) => {
	switch (ratio) {
		case "1/1":
			return "aspect-w-1 aspect-h-1";
		case "3/2":
			return "aspect-w-3 aspect-h-2";
		case "4/3":
			return "aspect-w-4 aspect-h-3";
		case "16/9":
			return "aspect-w-16 aspect-h-9";
		case "21/9":
			return "aspect-w-21 aspect-h-9";
		default:
			return "aspect-none";
	}
};
