import React from "react";
import "../../../style/baseTheme.scss";
import { Icon, IconType } from "../../Icon";
interface Props {
	onClick?: () => void;
	id?: string;
	className?: string;
	ariaLabel?: string;
	disabled?: boolean;
	type?: "main" | "normal" | "outlined" | "text";
	size?: "large" | "normal" | "small";
	icon?: IconType;
	rounded?: boolean;
}

const IconButton: React.FC<Props> = ({
	className,
	id,
	onClick,
	disabled = false,
	ariaLabel = "Icon Button",
	type = "normal",
	size = "normal",
	icon,
	rounded = true,
}) => {
	return (
		<button
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			id={id}
			onClick={onClick}
			className={`
			flex
 				cursor-pointer aspect-square
				
				${type === "main" ? "bg-accent  hover:bg-accent/50" : ""}
				${type === "normal" ? "bg-primary text-white hover:bg-primary/50" : ""}
				${type === "outlined" ? "bg-white    ring-1 ring-primary hover:bg-primary/30" : ""}
				${type === "text" ? "bg-transparent  hover:bg-primary/30" : ""}
				${disabled ? "opacity-50 cursor-not-allowed" : ""}
				transition-colors
 				${rounded ? "rounded-xl" : ""}
				${size === "large" ? "p-3 text-lg" : ""}
				${size === "normal" ? "p-2 text-base" : ""}
				${size === "small" ? "p-1.5 text-sm rounded-lg" : ""}
				${!rounded ? "rounded-none" : ""}
				
				
			 
				${className ?? ""}
 			`}
		>
			<Icon icon={icon} className="text-2xl" />
		</button>
	);
};
export default IconButton;
