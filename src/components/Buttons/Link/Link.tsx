import React from "react";
import "../../../style/global.css";
import { BaseProps, Colors, Positions, Sides, Variants } from "../../../types";
import Button, { ButtonProps } from "../Button/Button";
interface Props extends BaseProps, ButtonProps {
	href: string;
}

const Link: React.FC<Props> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	href,
	variant = Variants.filled,
	color = Colors.primary,
	size,
	rounded,
	icon,
	iconPosition = Sides.left,
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding,
	style,
	customRef,
	justify,
	rippleColor,
	rippleOpacity,
	rippleDuration,
	position,
	hasRipple = position === Positions.relative,
	download = false,
}) => {
	return (
		<Button
			className={className}
			disabled={disabled}
			variant={variant}
			color={color}
			size={size}
			rounded={rounded}
			icon={icon}
			iconPosition={iconPosition}
			fullWidth={fullWidth}
			centered={centered}
			padding={padding}
			customRef={customRef}
			justify={justify}
			rippleColor={rippleColor}
			rippleOpacity={rippleOpacity}
			rippleDuration={rippleDuration}
			position={position}
			hasRipple={hasRipple}
			href={href}
			aria-label={ariaLabel}
			autoFocus={autoFocus}
			id={id}
			children={children}
			onClick={(event) => onClick?.(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>)}
			style={style}
			download={download}
		/>
	);
};
export default Link;
