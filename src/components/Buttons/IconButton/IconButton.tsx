import React from "react";
import "../../../style/baseTheme.css";
import { IconType } from "../../Base/Icon";
import { Button } from "../Button";
import { BaseProps, ColorTypes, Sizes, SizesComplete, SizesWithNone } from "../../../types";
import { ButtonVariant } from "../Button/Button";
interface Props extends BaseProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	color?: ColorTypes;
	size?: Sizes;
	rounded?: SizesComplete;
	icon?: IconType;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	padding?: SizesWithNone;
	ref?: React.RefObject<HTMLButtonElement>;
}

const IconButton: React.FC<Props> = ({
	className,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	variant = "filled",
	color = "primary",
	size = "md",
	rounded = "lg",
	icon,
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding = "sm",
	style,
	ref,
}) => {
	return (
		<Button
			aria-label={ariaLabel}
			disabled={disabled}
			id={id}
			style={style}
			onClick={onClick}
			className={`aspect-square  ${className}`}
			variant={variant}
			size={size}
			rounded={rounded}
			icon={icon}
			padding={{ x: padding, y: padding }}
			color={color}
			centered={centered}
			fullWidth={fullWidth}
			autoFocus={autoFocus}
			ref={ref}
		/>
	);
};
export default IconButton;
