import React, { useRef } from "react";
import "../../../style/baseTheme.css";
import { Icon, IconType } from "../../Base/Icon";
import { buttonStyles } from "./Button.styles";
import {
	type BaseProps,
	ColorTypes,
	Side,
	Sizes,
	SizesComplete,
	paddingOneOrBothValues,
	JustifyContent,
	Position,
	Size,
} from "../../../types";
import useRipple from "../../../hooks/useRipple";
export type ButtonVariant = "filled" | "outlined" | "text";
interface Props extends BaseProps {
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	color?: ColorTypes;
	size?: Sizes;
	rounded?: SizesComplete;
	icon?: IconType;
	iconPosition?: Side;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	padding?: paddingOneOrBothValues;
	customRef?: React.RefObject<HTMLButtonElement>;
	hasRipple?: boolean;
	rippleColor?: ColorTypes;
	rippleOpacity?: number;
	rippleDuration?: number;
	justify?: JustifyContent;
	position?: Position;
}

const Button: React.FC<Props> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	variant = "filled",
	color = "primary",
	size = Size.md,
	rounded = Size.lg,
	icon,
	iconPosition = "left",
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding = { x: Size.md, y: Size.sm },
	style,
	customRef,
	justify = icon ? "between" : "center",
	rippleColor,
	rippleOpacity,
	rippleDuration,
	position = "relative",
	hasRipple = position === "relative",
}) => {
	const ref = useRef<HTMLButtonElement>(null);
	const ripples = useRipple({
		hasRipple,
		ref,
		duration: rippleDuration,
		color: rippleColor,
		opacity: rippleOpacity,
	});

	const handleClick = (e: any) => {
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<button
			ref={customRef ?? ref}
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			autoFocus={autoFocus}
			id={id}
			onClick={handleClick}
			style={style}
			className={buttonStyles({
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
		>
			{ripples}
			{icon && iconPosition === "left" && <Icon icon={icon} size={size} />}
			<div className="w-full">{children}</div>
			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</button>
	);
};
export default Button;
