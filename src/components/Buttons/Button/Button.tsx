import React, { useRef } from "react";
import "../../../style/global.css";
import { Icon } from "../../Base/Icon";
import { buttonStyles, ButtonStyled } from "./Button.styles";
import {
	type BaseProps,
	Color,
	Side,
	Size,
	SizesComplete,
	PaddingOneOrBothValues,
	JustifyContent,
	Position,
	Sizes,
	JustifyContents,
	ButtonVariant,
	IconType,
	Variants,
	Colors,
	Sides,
} from "../../../types";
import useRipple from "../../../hooks/useRipple";
import { applyJustifyContent } from "../../../style";
import { useMediaQuery } from "../../../hooks";
import { Loader } from "../../DataDisplay";
export interface ButtonProps extends BaseProps {
	children?: React.ReactNode;
	onClick?: (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	color?: Color;
	size?: Size;
	rounded?: SizesComplete;
	icon?: IconType;
	iconSize?: number;
	iconPosition?: Side;
	autoFocus?: boolean;
	fullWidth?: boolean;
	centered?: boolean;
	padding?: PaddingOneOrBothValues;
	customRef?: React.RefObject<HTMLButtonElement>;
	hasRipple?: boolean;
	rippleColor?: Color;
	rippleOpacity?: number;
	rippleDuration?: number;
	justify?: JustifyContent;
	position?: Position;
	href?: string;
	buttonType?: "button" | "submit" | "reset";
	hideWhenLessThan?: number;
	loading?: boolean;
	loaderColor?: Color;
	onMouseMove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	loadOnClick?: boolean;
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	role?: string;
	download?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel,
	href,
	onMouseMove,
	onKeyDown,
	variant = Variants.filled,
	hideWhenLessThan = 0,
	color = Colors.primary,
	size = Sizes.md,
	iconSize = 15,
	rounded = Sizes.lg,
	icon,
	iconPosition = Sides.left,
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
	hasRipple = position !== "absolute" && position !== "fixed",
	buttonType = "button",
	loading = false,
	loaderColor = variant === Variants.text ? Colors.primary : Colors.background,
	loadOnClick = false,
	role = "button",
	download = false,
}) => {
	const isHidden = useMediaQuery(hideWhenLessThan);

	const [isLoading, setIsLoading] = React.useState(loading);

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
		if (loadOnClick) {
			setIsLoading(true);
		}

		if (onClick) {
			onClick(event);
		}

		window.history.pushState({}, "", href);
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	// Show children if:
	// 1. Always if doenst have icon
	// If has icon and screen less than hideWhenLessThan

	const shouldShowChildren = !icon || !isHidden;

	return (
		<ButtonStyled
			as={href ? "a" : "button"}
			ref={customRef ?? ref}
			href={href}
			download={download}
			role={role}
			onMouseMove={onMouseMove}
			onKeyDown={onKeyDown}
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			autoFocus={autoFocus}
			id={id}
			onClick={handleClick}
			type={buttonType}
			style={style}
			className={`${buttonStyles({
				loading,
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
			${children ? "w-fit" : "flex justify-center items-center aspect-square"}
			`}
		>
			{isLoading && <Loader size={iconSize} color={loaderColor} />}
			{icon && iconPosition === "left" && <Icon icon={icon} size={iconSize} />}
			{children && shouldShowChildren && (
				<div className={`w-full flex gap-2 items-center  ${applyJustifyContent(justify) ?? ""}`}>
					{children}
				</div>
			)}
			{icon && iconPosition === "right" && <Icon icon={icon} size={iconSize} />} {ripples}
		</ButtonStyled>
	);
};
export default Button;
