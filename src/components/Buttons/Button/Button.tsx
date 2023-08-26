import React from "react";
import "../../../style/baseTheme.scss";
import { Icon, IconType } from "../../Icon";
import { buttonStyles } from "./Button.styles";
import {
	type BaseProps,
	ColorTypes,
	Side,
	Sizes,
	SizesComplete,
	SizesWithNone,
} from "../../../types";
export type ButtonVariant = "filled" | "outlined" | "text";
interface Props extends BaseProps {
	children?: React.ReactNode;
	onClick?: () => void;
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
	ref?: React.RefObject<HTMLButtonElement>;
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
	ref,
}) => {
	return (
		<button
			ref={ref}
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			autoFocus={autoFocus}
			id={id}
			onClick={onClick}
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
			{icon && iconPosition === "left" && <Icon icon={icon} size={size} />}
			{children}
			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</button>
	);
};
export default Button;
