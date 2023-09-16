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
	ColorType,
	JustifyContent,
	Size,
	SizesComplete,
	PaddingOneOrBothValues,
	Position,
	ButtonVariant,
	ColorTypes,
	ButtonVariants,
} from "./../../../types/index";

// variant is the shape (filled, outlined, text, icon)
// color is the color of the button from a predefined list

export const applyButtonVariant = ({
	variant = ButtonVariants.filled,
	color = ColorTypes.primary,
}: {
	variant?: ButtonVariant;
	color?: ColorType;
}): string => {
	switch (variant) {
		case ButtonVariants.outlined:
			switch (color) {
				case "secondary":
					return "text-secondary ring-1 ring-secondary hover:bg-secondary/10 dark:text-secondary-dark dark:hover:bg-secondary-dark/10 dark:ring-secondary-dark";
				case "success":
					return "text-success ring-1 ring-success hover:bg-success/10 dark:text-success-dark dark:hover:bg-success-dark/10 dark:ring-success-dark";
				case "danger":
					return "text-danger ring-1 ring-danger hover:bg-danger/10 dark:text-danger-dark dark:hover:bg-danger-dark/10 dark:ring-danger-dark";
				case "accent":
					return "text-accent ring-1 ring-accent hover:bg-accent/10 dark:text-accent-dark dark:hover:bg-accent-dark/10 dark:ring-accent-dark";
				case "info":
					return "text-info ring-1 ring-info hover:bg-info/10 dark:text-info-dark dark:hover:bg-info-dark/10 dark:ring-info-dark ";
				case "background":
					return "text-background ring-1 ring-background hover:bg-background/10 dark:text-background-dark dark:hover:bg-background-dark/10 dark:ring-background-dark";
				case "contrast":
					return "text-contrast ring-1 ring-contrast hover:bg-contrast/10 dark:text-contrast-dark dark:hover:bg-contrast-dark/10 dark:ring-contrast-dark";
				default:
					return "text-primary ring-1 ring-primary hover:bg-primary/10 dark:text-primary-dark dark:hover:bg-primary-dark/10 dark:ring-primary-dark";
			}
		case ButtonVariants.text:
			switch (color) {
				case "secondary":
					return "text-secondary hover:bg-secondary/10 dark:text-secondary-dark dark:hover:bg-secondary-dark/10 focus:ring-secondary/80 dark:focus:ring-secondary-dark/80 focus:bg-secondary/20 dark:focus:bg-secondary-dark/20";
				case "success":
					return "text-success hover:bg-success/10 dark:text-success-dark dark:hover:bg-success-dark/10 focus:ring-success/80 dark:focus:ring-success-dark/80 focus:bg-success/20 dark:focus:bg-success-dark/20";
				case "danger":
					return "text-danger hover:bg-danger/10 dark:text-danger-dark dark:hover:bg-danger-dark/10 focus:ring-danger/80 dark:focus:ring-danger-dark/80 focus:bg-danger/20 dark:focus:bg-danger-dark/20";
				case "accent":
					return "text-accent hover:bg-accent/10 dark:text-accent-dark dark:hover:bg-accent-dark/10 focus:ring-accent/80 dark:focus:ring-accent-dark/80 focus:bg-accent/20 dark:focus:bg-accent-dark/20";
				case "info":
					return "text-info hover:bg-info/10 dark:text-info-dark dark:hover:bg-info-dark/10 focus:ring-info/80 dark:focus:ring-info-dark/80 focus:bg-info/20 dark:focus:bg-info-dark/20";
				case "background":
					return "text-background hover:bg-background/10 dark:text-background-dark dark:hover:bg-background-dark/10 focus:ring-background/80 dark:focus:ring-background-dark/80 focus:bg-background/20 dark:focus:bg-background-dark/20";
				case "contrast":
					return "text-contrast hover:bg-contrast/10 dark:text-contrast-dark dark:hover:bg-contrast-dark/10 focus:ring-contrast/80 dark:focus:ring-contrast-dark/80 focus:bg-contrast/20 dark:focus:bg-contrast-dark/20";
				default:
					return "text-primary hover:bg-primary/10 dark:text-primary-dark dark:hover:bg-primary-dark/10 focus:ring-primary/80 dark:focus:ring-primary-dark/80 focus:bg-primary/20 dark:focus:bg-primary-dark/20";
			}
		default:
			switch (color) {
				case "secondary":
					return `bg-secondary text-background hover:bg-secondary/80 dark:bg-secondary-dark dark:text-background-dark dark:hover:bg-secondary-dark/80`;

				case "success":
					return "bg-success text-background hover:bg-success/80 dark:bg-success-dark dark:text-background-dark dark:hover:bg-success-dark/80";
				case "danger":
					return "bg-danger text-background hover:bg-danger/80 dark:bg-danger-dark dark:text-background-dark dark:hover:bg-danger-dark/80";
				case "accent":
					return "bg-accent text-background hover:bg-accent/80 dark:bg-accent-dark dark:text-background-dark dark:hover:bg-accent-dark/80";
				case "info":
					return "bg-info text-background hover:bg-info/80 dark:bg-info-dark dark:text-background-dark dark:hover:bg-info-dark/80";
				case "background":
					return "bg-background text-contrast hover:bg-background/80 dark:bg-background-dark dark:text-contrast-dark dark:hover:bg-background-dark/80";
				case "contrast":
					return "bg-contrast text-background hover:bg-contrast/80 dark:bg-contrast-dark dark:text-background-dark dark:hover:bg-contrast-dark/80";
				default:
					return "bg-primary text-background hover:bg-primary/80 dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-dark/80";
			}
	}
};

interface ButtonStylesProps {
	rounded: SizesComplete;
	size: Size;
	fullWidth: boolean;
	disabled?: boolean;
	centered: boolean;
	padding: PaddingOneOrBothValues;
	variant: ButtonVariant;
	color: ColorType;
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
	return `flex items-center gap-2 transition-all flex-nowrap justify-between min-h-10 ring-2 ring-transparent overflow-hidden focus:outline-none focus:ring-2  transition-all  
	
	focus:ring-offset-background dark:focus:ring-offset-background-dark
	
	focus:ring-primary/80 dark:focus:ring-primary-dark/80
	
	focus:ring-opacity-50
	
	${color === ColorTypes.accent && "focus:ring-accent/80 dark:focus:ring-accent-dark/80"}
	
	
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
