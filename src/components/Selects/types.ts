import {
	JustifyContent,
	PaddingOneOrBothValues,
	Position,
	Size,
	ColorType,
	SizesComplete,
	ButtonVariant,
	IconType,
} from "../../types";

export interface BaseButtonProps {
	nullable?: boolean;
	disabled?: boolean;
	size?: Size;
	centered?: boolean;
	padding?: PaddingOneOrBothValues;
	justify?: JustifyContent;
	position?: Position;
	label?: string;
	fullWidth?: boolean;
	placeholder?: string;
	variant?: ButtonVariant;
	color?: ColorType;
	buttonIcon?: IconType;
	rounded?: SizesComplete;
	className?: string;
}

export const labelClasses = "block text-sm font-medium text-primary/80 mb-1";
export const popupStyles =
	"absolute mt-1 max-h-60 overflow-auto rounded-xl py-1 bg-background dark:bg-background-inverted text-background-inverted dark:text-background text-base shadow-lg ring-1 ring-background-inverted ring-opacity-5 focus:outline-none  z-50";
