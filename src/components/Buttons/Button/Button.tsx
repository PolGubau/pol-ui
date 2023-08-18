import React from "react";
import "../../../style/baseTheme.scss";
import { Icon, IconType } from "../../Icon";
import { button } from "./Button.styles";
import { Side, Sizes } from "../../../common";
interface Props {
	children?: React.ReactNode;
	onClick?: () => void;
	id?: string;
	className?: string;
	ariaLabel?: string;
	disabled?: boolean;
	type?: "main" | "normal" | "outlined" | "text";
	size?: Sizes;
	rounded?: boolean;
	icon?: IconType;
	iconPosition?: Side;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	onlyIcon?: boolean;
}

const Button: React.FC<Props> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	type = "normal",
	size = "md",
	rounded = true,
	icon,
	iconPosition = "left",
	autoFocus = false,
	fullWidth = false,
	centered = false,
	onlyIcon = false,
}) => {
	return (
		<button
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			autoFocus={autoFocus}
			id={id}
			onClick={onClick}
			className={`${button({
				type,
				size,
				rounded,
				fullWidth,
				centered,
				onlyIcon,
				disabled,
			})}	${className}`}
		>
			{icon && iconPosition === "left" && <Icon icon={icon} size={size} />}
			{!onlyIcon && children}
			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</button>
	);
};
export default Button;

// ${size === "large" ? "px-4 py-3 text-lg" : ""}
// 				   ${size === "normal" ? "px-4 py-2 text-base" : ""}
// 				  ${size === "small" ? "px-3 py-1.5 text-sm rounded-lg" : ""}
