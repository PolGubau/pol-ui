import React from "react";
import "../../../style/baseTheme.css";
import { Icon, IconType } from "../../Base/Icon";
import {
	BaseProps,
	ColorTypes,
	Side,
	Sizes,
	SizesComplete,
	paddingOneOrBothValues,
} from "../../../types";
import { buttonStyles } from "../Button/Button.styles";
import { ButtonVariant } from "../Button/Button";
interface Props extends BaseProps {
	children?: React.ReactNode;
	href: string;
	variant?: ButtonVariant;
	color?: ColorTypes;
	size?: Sizes;
	rounded?: SizesComplete;
	icon?: IconType;
	iconPosition?: Side;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	padding?: paddingOneOrBothValues;
}

const Link: React.FC<Props> = ({
	className,
	children,
	id,
	href,
	ariaLabel = "button",
	variant = "filled",
	color = "primary",
	size = "md",
	rounded = "lg",
	icon,
	onClick,
	iconPosition = "left",
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding = { x: "md", y: "sm" },
	style,
}) => {
	const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
			style={style}
			className={buttonStyles({
				rounded,
				size,
				fullWidth,
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
		</a>
	);
};
export default Link;
