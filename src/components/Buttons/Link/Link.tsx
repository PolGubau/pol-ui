import React from "react";
import "../../../style/baseTheme.css";
import { Icon } from "../../Base/Icon";
import { BaseProps } from "../../../types";
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
	variant = "filled",
	color = "primary",
	size,
	rounded,
	icon,
	iconPosition = "left",
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
	hasRipple = position === "relative",
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
			onClick={(event) => onClick?.(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>)}
			style={style}
		>
			{icon && iconPosition === "left" && <Icon icon={icon} size={size} />}
			<div className="w-full">{children}</div>
			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</Button>
	);
};
export default Link;
