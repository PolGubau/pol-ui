import {
	applyRounded,
	applyTextSize,
	applyFullWidth,
	applyDisabled,
	applyCentered,
	applyPadding,
	applyJustifyContent,
	applyPosition,
} from "../../../style";
import {
	ColorTypes,
	JustifyContent,
	Sizes,
	SizesComplete,
	PaddingOneOrBothValues,
	Position,
} from "./../../../types/index";
import { ButtonVariant } from "./Button";

// variant is the shape (filled, outlined, text, icon)
// color is the color of the button from a predefined list

export const applyButtonVariant = ({
	variant = "filled",
	color = "primary",
}: {
	variant?: ButtonVariant;
	color?: ColorTypes;
}): string => {
	switch (variant) {
		case "outlined":
			switch (color) {
				case "secondary":
					return "text-secondary ring-1 ring-secondary hover:bg-secondary/10";
				case "success":
					return "text-success ring-1 ring-success hover:bg-success/10";
				case "danger":
					return "text-danger ring-1 ring-danger hover:bg-danger/10";
				case "accent":
					return "text-accent ring-1 ring-accent hover:bg-accent/10";
				case "info":
					return "text-info ring-1 ring-info hover:bg-info/10";
				case "background":
					return "text-background ring-1 ring-background hover:bg-background/10";
				case "contrast":
					return "text-contrast ring-1 ring-contrast hover:bg-contrast/10";
				default:
					return "text-primary ring-1 ring-primary hover:bg-primary/10";
			}
		case "text":
			switch (color) {
				case "secondary":
					return "text-secondary hover:bg-secondary/10";
				case "success":
					return "text-success hover:bg-success/10";
				case "danger":
					return "text-danger hover:bg-danger/10";
				case "accent":
					return "text-accent hover:bg-accent/10";
				case "info":
					return "text-info hover:bg-info/10";
				case "background":
					return "text-background hover:bg-background/10";
				case "contrast":
					return "text-contrast hover:bg-contrast/10";
				default:
					return "text-primary hover:bg-primary/10";
			}
		default:
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
	}
};

interface ButtonStylesProps {
	rounded: SizesComplete;
	size: Sizes;
	fullWidth: boolean;
	disabled?: boolean;
	centered: boolean;
	padding: PaddingOneOrBothValues;
	variant: ButtonVariant;
	color: ColorTypes;
	className?: string;
	justify: JustifyContent;
	position: Position;
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
	justify,
	className,
	position = "relative",
}: ButtonStylesProps) => {
	return `flex items-center gap-2 transition-all flex-nowrap justify-between min-h-10 overflow-hidden 
	${applyRounded(rounded)}
	${applyPosition(position)}
	${applyTextSize(size)} 
	${applyFullWidth(fullWidth)} 
	${applyDisabled(disabled)}
	${applyCentered(centered)}	
	${applyPadding(padding)}
	${applyJustifyContent(justify)}
	${applyButtonVariant({ variant, color })}
	${className}
	`;
};
