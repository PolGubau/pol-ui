import styled from "styled-components";
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
	Color,
	JustifyContent,
	Size,
	SizesComplete,
	PaddingOneOrBothValues,
	Position,
	ButtonVariant,
	Colors,
	ButtonVariants,
	Sizes,
	JustifyContents,
} from "./../../../types/index";

// variant is the shape (filled, outlined, text, icon)
// color is the color of the button from a predefined list

export const applyButtonVariant = ({
	variant = ButtonVariants.filled,
	color = Colors.primary,
}: {
	variant?: ButtonVariant;
	color?: Color;
}): string => {
	switch (variant) {
		case ButtonVariants.outlined:
			switch (color) {
				case "secondary":
					return "text-secondary ring-1 hover:bg-secondary/10 dark:text-secondary-inverted dark:hover:bg-secondary-inverted/10 ";
				case "success":
					return "text-success ring-1  hover:bg-success/10 dark:text-success-inverted dark:hover:bg-success-inverted/10 ";
				case "danger":
					return "text-danger ring-1   hover:bg-danger/10 dark:text-danger-inverted dark:hover:bg-danger-inverted/10 ";
				case "accent":
					return "text-accent   ring-1 hover:bg-accent/10 dark:text-accent-inverted dark:hover:bg-accent-inverted/10 ";
				case "info":
					return "text-info ring-1    hover:bg-info/10 dark:text-info-inverted dark:hover:bg-info-inverted/10  ";
				case "background":
					return "text-background ring-1   hover:bg-background/10 dark:text-background-inverted dark:hover:bg-background-inverted/10 ";
				case "contrast":
					return "text-contrast ring-1  hover:bg-contrast/10 dark:text-contrast-inverted dark:hover:bg-contrast-inverted/10 ";
				default:
					return "text-primary ring-1  hover:bg-primary/10 dark:text-primary-inverted dark:hover:bg-primary-inverted/10 ";
			}
		case ButtonVariants.text:
			switch (color) {
				case "secondary":
					return "text-secondary hover:bg-secondary/10 dark:text-secondary-inverted dark:hover:bg-secondary-inverted/10 focus:ring-secondary/80 dark:focus:ring-secondary-inverted/80 focus:bg-secondary/20 dark:focus:bg-secondary-inverted/20";
				case "success":
					return "text-success hover:bg-success/10 dark:text-success-inverted dark:hover:bg-success-inverted/10 focus:ring-success/80 dark:focus:ring-success-inverted/80 focus:bg-success/20 dark:focus:bg-success-inverted/20";
				case "danger":
					return "text-danger hover:bg-danger/10 dark:text-danger-inverted dark:hover:bg-danger-inverted/10 focus:ring-danger/80 dark:focus:ring-danger-inverted/80 focus:bg-danger/20 dark:focus:bg-danger-inverted/20";
				case "accent":
					return "text-accent hover:bg-accent/10 dark:text-accent-inverted dark:hover:bg-accent-inverted/10 focus:ring-accent/80 dark:focus:ring-accent-inverted/80 focus:bg-accent/20 dark:focus:bg-accent-inverted/20";
				case "info":
					return "text-info hover:bg-info/10 dark:text-info-inverted dark:hover:bg-info-inverted/10 focus:ring-info/80 dark:focus:ring-info-inverted/80 focus:bg-info/20 dark:focus:bg-info-inverted/20";

				case "background":
					return "text-background hover:bg-background/10 dark:text-background-inverted dark:hover:bg-background-inverted/10 focus:ring-background/80 dark:focus:ring-background-inverted/80 focus:bg-background/20 dark:focus:bg-background-inverted/20";

				case "contrast":
					return "text-contrast hover:bg-contrast/10 dark:text-contrast-inverted dark:hover:bg-contrast-inverted/10 focus:ring-contrast/80 dark:focus:ring-contrast-inverted/80 focus:bg-contrast/20 dark:focus:bg-contrast-inverted/20";
				default:
					return "text-primary dark:text-primary-inverted hover:bg-primary/10 dark:hover:bg-primary-inverted/10 focus:ring-primary/80 dark:focus:ring-primary-inverted/80 focus:bg-primary/20 dark:focus:bg-primary-inverted/20";
			}
		default:
			switch (color) {
				case "secondary":
					return `bg-secondary text-background hover:bg-secondary/80 dark:bg-secondary-inverted dark:text-background-inverted dark:hover:bg-secondary-inverted/80`;

				case "success":
					return "bg-success text-background hover:bg-success/80 dark:bg-success-inverted dark:text-background-inverted dark:hover:bg-success-inverted/80";
				case "danger":
					return "bg-danger text-background hover:bg-danger/80 dark:bg-danger-inverted dark:text-background-inverted dark:hover:bg-danger-inverted/80";
				case "accent":
					return "bg-accent text-background hover:bg-accent/80 dark:bg-accent-inverted dark:text-background-inverted dark:hover:bg-accent-inverted/80";
				case "info":
					return "bg-info text-background hover:bg-info/80 dark:bg-info-inverted dark:text-background-inverted dark:hover:bg-info-inverted/80";
				case "background":
					return "bg-background text-contrast hover:bg-background/80 dark:bg-background-inverted dark:text-contrast-inverted dark:hover:bg-background-inverted/80";
				case "contrast":
					return "bg-contrast text-background hover:bg-contrast/80 dark:bg-contrast-inverted dark:text-background-inverted dark:hover:bg-contrast-inverted/80";
				default:
					return "bg-primary text-background hover:bg-primary/80 dark:bg-primary-inverted dark:text-background-inverted dark:hover:bg-primary-inverted/80";
			}
	}
};

export interface ButtonStylesProps {
	rounded?: SizesComplete;
	size?: Size;
	fullWidth?: boolean;
	disabled?: boolean;
	centered?: boolean;
	padding?: PaddingOneOrBothValues;
	variant?: ButtonVariant;
	color?: Color;
	className?: string;
	justify?: JustifyContent;
	position?: Position;
	loading?: boolean;
}

export const buttonStyles = ({
	rounded = Sizes.lg,
	size = Sizes.md,
	fullWidth = false,
	disabled = false,
	centered = false,
	padding = { x: Sizes.md, y: Sizes.sm },
	variant = ButtonVariants.filled,
	color = Colors.primary,
	justify = JustifyContents.center,
	className = "",
	loading = false,
	position = "relative",
}: ButtonStylesProps) => {
	return `flex items-center gap-2 transition-all flex-nowrap min-h-10 overflow-hidden focus-within:outline-none focus-within:ring-2 transition-all  h-10
	
	focus-within:ring-opacity-50 
	focus-within:ring-offset-2 
	focus-within:ring-offset-transparent
	dark:focus-within:ring-offset-transparent
	
	
	
	
	${color === Colors.success ? "ring-success dark:ring-success-inverted" : ""}
	${color === Colors.danger ? "ring-danger dark:ring-danger-inverted" : ""}
	${color === Colors.info ? "ring-info dark:ring-info-inverted" : ""}
	${color === Colors.secondary ? "ring-secondary dark:ring-secondary-inverted" : ""}
	${color === Colors.accent ? "ring-accent dark:ring-accent-inverted" : ""}
	${color === Colors.primary ? "ring-primary dark:ring-primary-inverted" : ""}
	${color === Colors.secondary ? "ring-secondary dark:ring-secondary-inverted" : ""}
 	
	
	${loading ? "cursor-wait opacity-90" : "cursor-pointer"}
	${applyRounded(rounded)}
	${applyPosition(position)}
	${applyTextSize(size)} 
	${applyFullWidth(fullWidth)} 
	${applyCentered(centered)}	
	${applyPadding(padding)}
	${applyJustifyContent(justify)}
	${applyButtonVariant({ variant, color })}	
	${applyDisabled(disabled)}

	${className}
	`;
};

export const ButtonStyled = styled.button``;
