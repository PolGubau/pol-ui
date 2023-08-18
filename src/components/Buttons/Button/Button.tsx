import React from "react";
import "../../../style/baseTheme.scss";
import { Icon, IconType } from "../../Icon";
interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	id?: string;
	className?: string;
	ariaLabel?: string;
	disabled?: boolean;
	type?: "main" | "normal" | "outlined" | "text";
	size?: "large" | "normal" | "small";
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	rounded?: boolean;
	icon?: IconType;
	iconPosition?: "left" | "right";
	autoFocus?: boolean;
	fullWidth?: boolean;
}

const Button: React.FC<Props> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	type = "normal",
	size = "normal",
	prefix,
	suffix,
	rounded = true,
	icon,
	iconPosition = "left",
	autoFocus = false,
	fullWidth = false,
}) => {
	return (
		<button
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			autoFocus={autoFocus}
			id={id}
			onClick={onClick}
			className={`		
			flex items-center justify-center gap-2		
				cursor-pointer
				${type === "main" ? "bg-accent text-primary hover:bg-accent/50" : ""}
				${type === "normal" ? "bg-primary/60 text-white hover:bg-primary/80" : ""}
				${type === "outlined" ? "bg-white text-primary   ring-1 ring-primary hover:bg-primary/30" : ""}
				${type === "text" ? "bg-white text-primary hover:bg-primary/30" : ""}
				${disabled ? "opacity-50 cursor-not-allowed" : ""}
				transition-colors
 				${rounded ? "rounded-xl" : ""}
				${size === "large" ? "px-4 py-3 text-lg" : ""}
				${size === "normal" ? "px-4 py-2 text-base" : ""}
				${size === "small" ? "px-3 py-1.5 text-sm rounded-lg" : ""}
				${!rounded ? "rounded-none" : ""}
				
				
				${fullWidth ? "w-full" : "w-fit"}
				
				
				${className ?? ""}
 			`}
		>
			{prefix && <span>{prefix}</span>}
			{icon && iconPosition === "left" && <Icon icon={icon} />}
			{children}
			{icon && iconPosition === "right" && <Icon icon={icon} />}
			{suffix && <span>{suffix}</span>}
		</button>
	);
};
export default Button;
