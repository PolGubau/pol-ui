import { applyFullWidth, applyRounded } from "../../style";
import { ColorTypes, SizesComplete } from "../../types";
import { ButtonVariant } from "../Buttons/Button/Button";
import { applyButtonVariant } from "../Buttons/Button/Button.styles";

interface Props {
	rounded?: SizesComplete;
	fullWidth?: boolean;
	variant?: ButtonVariant;
	color?: ColorTypes;
}

export const selectStyles = ({ rounded, fullWidth, variant, color }: Props): string => {
	const base = `relative 
					cursor-pointer 
					rounded-xl
					p-2
					pl-3    
					pr-8 text-left 
					transition-all
					focus:outline-none 
					focus-visible:border-accent
					focus-visible:ring-2 
					focus-visible:ring-white 
					focus-visible:ring-opacity-75 
					focus-visible:ring-offset-2 
					focus-visible:ring-offset-accent 
					active:ring-2
					active:ring-offset-2
					active:ring-offset-accent
					active:ring-white
					sm:text-sm
					`;

	const roundedClass = applyRounded(rounded);
	const fullWidthClass = applyFullWidth(fullWidth);
	const variantClass = applyButtonVariant({ variant, color });

	return `${base} ${roundedClass} ${fullWidthClass} ${variantClass}`;
};
