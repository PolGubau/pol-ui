import { CSSProperties } from "react";
import {
	Size,
	SizesWithNone,
	SizesComplete,
	ColorType,
	Tens,
	SizesWithFull,
	Shadow,
	Alignments,
	AspectRatios,
	JustifyContent,
	Position,
	Transition,
	Transitions,
	Sizes,
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
export const applyTextSize = (size?: Size) => {
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

export const applyPadding = (amount: SizesWithNone | { x: SizesWithNone; y: SizesWithNone }) => {
	if (typeof amount === "string") {
		return applySamePadding(amount);
	}
	return applyDifferentPadding(amount);
};

export const applyDifferentPadding = ({
	x = "none",
	y = "none",
}: {
	x?: SizesWithNone;
	y?: SizesWithNone;
}) => `${applyPaddingX(x)} ${applyPaddingY(y)}`;

export const applyFullWidth = (b?: boolean): string => {
	return b ? "w-full" : "w-fit";
};
export const applyDisabled = (b: boolean = false) => {
	return b ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
};

export enum ApplyCenteredOutput {
	true = "justify-center text-center",
	false = "justify-start text-left",
}
type ApplyCenteredOutputType = `${ApplyCenteredOutput}`;
export const applyCentered = (b: boolean = false): ApplyCenteredOutputType => {
	return b ? "justify-center text-center" : "justify-start text-left";
};
export const applyAlignCenter = (b: boolean = false) => {
	return b ? "items-center" : "items-start";
};

export const applyShyRounded = (round?: Size) => {
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
export const applyBgColor = (color?: ColorType) => {
	switch (color) {
		case "secondary":
			return "bg-secondary dark:bg-secondary-inverted";
		case "success":
			return "bg-success dark:bg-success-inverted";
		case "danger":
			return "bg-danger dark:bg-danger-inverted";
		case "accent":
			return "bg-accent dark:bg-accent-inverted";
		case "info":
			return "bg-info dark:bg-info-inverted";
		case "background":
			return "bg-background dark:bg-background-inverted";
		case "contrast":
			return "bg-background-inverted text-background dark:bg-background dark:text-background-inverted";
		default:
			return "bg-primary dark:bg-primary-inverted";
	}
};
export const applyBgColorInChecked = (color?: ColorType) => {
	switch (color) {
		case "secondary":
			return "checked:bg-secondary dark:checked:bg-secondary-inverted";
		case "success":
			return "checked:bg-success dark:checked:bg-success-inverted";
		case "danger":
			return "checked:bg-danger dark:checked:bg-danger-inverted";
		case "accent":
			return "checked:bg-accent dark:checked:bg-accent-inverted";
		case "info":
			return "checked:bg-info dark:checked:bg-info-inverted";
		case "background":
			return "checked:bg-background dark:checked:bg-background-inverted";
		case "contrast":
			return "checked:bg-background-inverted checked:text-background dark:checked:bg-background dark:checked:text-background-inverted";
		default:
			return "checked:bg-primary	 dark:checked:bg-primary-inverted";
	}
};
export const applyColor = (color?: ColorType) => {
	switch (color) {
		case "primary":
			return "text-primary dark:text-primary-inverted";
		case "secondary":
			return "text-secondary dark:text-secondary-inverted";
		case "success":
			return "text-success dark:text-success-inverted";
		case "danger":
			return "text-danger dark:text-danger-inverted";
		case "accent":
			return "text-accent dark:text-accent-inverted";
		case "info":
			return "text-info dark:text-info-inverted";
		case "background":
			return "text-background dark:text-background-inverted";
		case "contrast":
			return "text-contrast dark:text-contrast-inverted";
		default:
			return "text-default dark:text-default-inverted";
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

export const applyAspectRatio = (aspectRatio?: AspectRatios): CSSProperties => {
	if (!aspectRatio) return {};
	console.log("aspectRatio", aspectRatio);
	const aspectRatioParts = aspectRatio?.split(":") ?? [];

	if (aspectRatioParts.length !== 2) {
		throw new Error("Invalid aspect ratio format. Use 'width:height' (e.g., '16:9').");
	}

	const width = parseInt(aspectRatioParts[0]);
	const height = parseInt(aspectRatioParts[1]);

	if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
		throw new Error("Invalid aspect ratio values. Width and height must be positive numbers.");
	}

	return {
		aspectRatio: `${width}/${height}`,
	};
};

export const applyJustifyContent = (v?: JustifyContent) => {
	switch (v) {
		case "start":
			return "justify-start";
		case "end":
			return "justify-end";
		case "center":
			return "justify-center";
		case "space-between":
			return "justify-between";
		case "space-around":
			return "justify-around";
		case "space-evenly":
			return "justify-evenly";
		default:
			return "justify-start";
	}
};
export const applyPosition = (v?: Position) => {
	switch (v) {
		case "absolute":
			return "absolute";
		case "fixed":
			return "fixed";
		case "sticky":
			return "sticky";
		default:
			return "relative";
	}
};

export const applyTransitionDuration = (duration?: SizesWithNone) => {
	switch (duration) {
		case Sizes.xs:
			return "transition duration-75";
		case Sizes.sm:
			return "transition duration-100";
		case Sizes.lg:
			return "transition duration-300";
		case Sizes.xl:
			return "transition duration-500";
		default:
			return "transition duration-200";
	}
};

interface TransitionProps {
	transition?: Transition;
	duration?: SizesWithNone;
	out?: boolean;
}
export const applyTransition = ({
	transition = Transitions.none,
	duration = "md",
	out = false,
}: TransitionProps) => {
	const base = "transition animate-once animate-ease-out";
	const durationClass = applyTransitionDuration(duration);

	const transitions = {
		slideBottom: `animate-fade-up`,
		slideTop: `animate-fade-down`,
		slideLeft: `animate-fade-left`,
		slideRight: `animate-fade-right`,

		fade: `animate-fade`,
		flipUp: `animate-flip-up`,
		flipDown: `animate-flip-down`,

		none: ``,
	};

	const isReverse = out ? "animate-reverse" : "";

	const transitionClass = transitions[transition];

	return `${base} ${durationClass} ${transitionClass} ${isReverse}`;
};
