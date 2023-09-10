import React from "react";
import "../../../style/baseTheme.css";
import { Icon, IconType } from "../../Base/Icon";
import { Button } from "../Button";
import {
	BaseProps,
	ColorTypes,
	Position,
	Sizes,
	SizesComplete,
	SizesWithNone,
} from "../../../types";
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
	position?: Position;
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
	centered = true,
	padding = "sm",
	style,
	ref,
	position,
}) => {
	return (
		<Button
			centered={centered}
			aria-label={ariaLabel}
			disabled={disabled}
			id={id}
			style={style}
			onClick={onClick}
			className={`aspect-square ${className}`}
			variant={variant}
			size={size}
			rounded={rounded}
			padding={{ x: padding, y: padding }}
			color={color}
			fullWidth={fullWidth}
			autoFocus={autoFocus}
			position={position}
			customRef={ref}
		>
			<Icon icon={icon} />
		</Button>
	);
};
export default IconButton;
