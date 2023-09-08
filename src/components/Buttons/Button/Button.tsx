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
	SizesWithNone,
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
	padding?: {
		x: SizesWithNone;
		y: SizesWithNone;
	};
	customRef?: React.RefObject<HTMLButtonElement>;
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
	size = "md",
	rounded = "lg",
	icon,
	iconPosition = "left",
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding = { x: "md", y: "sm" },
	style,
	customRef,
}) => {
	const ref = useRef<HTMLButtonElement>(null);
	const ripples = useRipple(ref);

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
				className,
			})}
		>
			{ripples}
			{icon && iconPosition === "left" && <Icon icon={icon} size={size} />}
			{children}
			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</button>
	);
};
export default Button;
