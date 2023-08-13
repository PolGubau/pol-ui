import React from "react";
import "../../style/baseTheme.scss";
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
}): JSX.Element => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		onClick?.();
	};

	return (
		<button
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			id={id}
			onClick={handleClick}
			className={`				
				cursor-pointer
				${type === "main" ? "bg-accent text-primary hover:bg-accent/50" : ""}
				${type === "normal" ? "bg-primary text-white hover:bg-primary/50" : ""}
				${type === "outlined" ? "bg-white text-primary   ring-1 ring-primary hover:bg-primary/30" : ""}
				${type === "text" ? "bg-white text-primary hover:bg-primary/30" : ""}
				${disabled ? "opacity-50 cursor-not-allowed" : ""}
				transition-colors
 				${rounded ? "rounded-xl" : ""}
				${size === "large" ? "px-4 py-2.5 text-lg" : ""}
				${size === "normal" ? "px-4 py-2 text-base" : ""}
				${size === "small" ? "px-3 py-2 text-sm rounded-lg" : ""}
			 				
				${!rounded ? "rounded-none" : ""}
				${className ?? ""}
 			`}
		>
			{prefix && <span className="mr-2">{prefix}</span>}
			{children}
			{suffix && <span className="ml-2">{suffix}</span>}
		</button>
	);
};
export default Button;
