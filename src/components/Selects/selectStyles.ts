import { ButtonStylesProps, buttonStyles } from "../Buttons/Button/Button.styles";

interface Props extends ButtonStylesProps {}

export const selectStyles = ({
	rounded,
	fullWidth,
	variant,
	color,
	size,
	disabled,
	centered,
	padding,
	justify,
	className,
	position,
}: Props): string => {
	const base = `
	${buttonStyles({
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
		position,
	})}
	
	`;

	return `${base}  `;
};
