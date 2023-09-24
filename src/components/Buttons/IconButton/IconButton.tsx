import React from "react";
import "../../../style/baseTheme.css";
import { Button } from "../Button";
import {
	BaseProps,
	ButtonVariant,
	Color,
	IconType,
	Position,
	Size,
	SizesComplete,
	SizesWithNone,
} from "../../../types";
interface Props extends BaseProps {
	onClick?: (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	color?: Color;
	size?: Size;
	rounded?: SizesComplete;
	icon: IconType;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	padding?: SizesWithNone;
	ref?: React.RefObject<HTMLButtonElement>;
	position?: Position;
	href?: string;
	loadOnClick?: boolean;
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
	href,
	style,
	ref,
	position,
	loadOnClick,
}) => {
	return (
		<Button
			href={href}
			centered={centered}
			aria-label={ariaLabel}
			disabled={disabled}
			id={id}
			style={style}
			loadOnClick={loadOnClick}
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
			icon={icon}
		/>
	);
};
export default IconButton;
