import React, { useRef } from "react";
import "../../../style/baseTheme.css";
import { Icon, IconType } from "../../Base/Icon";
import { buttonStyles, ButtonStyled } from "./Button.styles";
import {
	type BaseProps,
	ColorType,
	Side,
	Size,
	SizesComplete,
	PaddingOneOrBothValues,
	JustifyContent,
	Position,
	Sizes,
	JustifyContents,
	ButtonVariant,
} from "../../../types";
import useRipple from "../../../hooks/useRipple";
import { applyJustifyContent } from "../../../style";
export interface ButtonProps extends BaseProps {
	children?: React.ReactNode;
	onClick?: (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	color?: ColorType;
	size?: Size;
	rounded?: SizesComplete;
	icon?: IconType;
	iconPosition?: Side;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	padding?: PaddingOneOrBothValues;
	customRef?: React.RefObject<HTMLButtonElement>;
	hasRipple?: boolean;
	rippleColor?: ColorType;
	rippleOpacity?: number;
	rippleDuration?: number;
	justify?: JustifyContent;
	position?: Position;
	href?: string;
}

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	href,
	variant = "filled",
	color = "primary",
	size = Sizes.md,
	rounded = Sizes.lg,
	icon,
	iconPosition = "left",
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding = { x: Sizes.md, y: Sizes.sm },
	style,
	customRef,
	justify = JustifyContents.center,
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

	const handleClick = (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (onClick) {
			onClick(event);
		}

		window.history.pushState({}, "", href);
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<ButtonStyled
			as={href ? "a" : "button"}
			ref={customRef ?? ref}
			href={href}
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
			<div className={`w-full flex gap-2 items-center ${applyJustifyContent(justify) ?? ""}`}>
				{children}
			</div>
			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</ButtonStyled>
	);
};
export default Button;
