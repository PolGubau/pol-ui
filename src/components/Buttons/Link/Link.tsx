import React from "react";
import "../../../style/baseTheme.scss";
import { Icon, IconType } from "../../Icon";
import { button } from "./Link.styles";
import { Side, Sizes } from "../../../common";
interface Props {
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
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
	href: string;
}

const Link: React.FC<Props> = ({
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
	href,
}) => {
	const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		if (onClick) {
			onClick(event);
		}

		window.history.pushState({}, "", href);
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<a
			href={href}
			aria-label={ariaLabel}
			autoFocus={autoFocus}
			id={id}
			onClick={handleLinkClick}
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
		</a>
	);
};
export default Link;
