import {
	applyRounded,
	applyTextSize,
	applyFullWidth,
	applyDisabled,
	applyCentered,
	applyPadding,
} from "../../../style";
import { ColorTypes, Sizes, SizesComplete, SizesWithNone } from "./../../../types/index";
import { ButtonVariant } from "./Button";

// variant is the shape (filled, outlined, text, icon)
// color is the color of the button from a predefined list

export const applyButtonVariant = (variant: ButtonVariant, color: ColorTypes) => {
	switch (variant) {
		case "filled":
			switch (color) {
				case "secondary":
					return `bg-secondary text-background hover:bg-secondary/${"20"}`;
				case "success":
					return "bg-success text-background hover:bg-success/80";
				case "danger":
					return "bg-danger text-background hover:bg-danger/80";
				case "accent":
					return "bg-accent text-background hover:bg-accent/80";
				case "info":
					return "bg-info text-background hover:bg-info/80";
				case "background":
					return "bg-background text-contrast hover:bg-background/80";
				case "contrast":
					return "bg-contrast text-background hover:bg-contrast/80";
				default:
					return "bg-primary text-background hover:bg-primary/80";
			}
		case "outlined":
			switch (color) {
				case "secondary":
					return "bg-white text-secondary ring-1 ring-secondary hover:bg-secondary/10";
				case "success":
					return "bg-white text-success ring-1 ring-success hover:bg-success/10";
				case "danger":
					return "bg-white text-danger ring-1 ring-danger hover:bg-danger/10";
				case "accent":
					return "bg-white text-accent ring-1 ring-accent hover:bg-accent/10";
				case "info":
					return "bg-white text-info ring-1 ring-info hover:bg-info/10";
				case "background":
					return "bg-white text-background ring-1 ring-background hover:bg-background/10";
				case "contrast":
					return "bg-white text-contrast ring-1 ring-contrast hover:bg-contrast/10";
				default:
					return "bg-white text-primary ring-1 ring-primary hover:bg-primary/10";
			}
		case "text":
			switch (color) {
				case "secondary":
					return "bg-transparent text-secondary hover:bg-secondary/10";
				case "success":
					return "bg-transparent text-success hover:bg-success/10";
				case "danger":
					return "bg-transparent text-danger hover:bg-danger/10";
				case "accent":
					return "bg-transparent text-accent hover:bg-accent/10";
				case "info":
					return "bg-transparent text-info hover:bg-info/10";
				case "background":
					return "bg-transparent text-background hover:bg-background/10";
				case "contrast":
					return "bg-transparent text-contrast hover:bg-contrast/10";
				default:
					return "bg-transparent text-primary hover:bg-primary/10";
			}
	}
};

interface ButtonStylesProps {
	rounded: SizesComplete;
	size: Sizes;
	fullWidth: boolean;
	disabled: boolean;
	centered: boolean;
	padding: { x: SizesWithNone; y: SizesWithNone };
	variant: ButtonVariant;
	color: ColorTypes;
	className?: string;
}

export const buttonStyles = ({
	rounded,
	size,
	fullWidth,
	disabled,
	centered,
	padding,
	variant,
	color,
	className,
}: ButtonStylesProps) => {
	return `flex items-center gap-2 transition-all flex-nowrap 
	${applyRounded(rounded)}
	${applyTextSize(size)} 
	${applyFullWidth(fullWidth)} 
	${applyDisabled(disabled)}
	${applyCentered(centered)}	
	${applyPadding(padding)}
	${applyButtonVariant(variant, color)}
	${className}
	`;
};
