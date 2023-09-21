import React, { useRef } from "react";
import "../../../style/baseTheme.css";
import { Icon } from "../../Base/Icon";
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
	IconType,
	ButtonVariants,
	ColorTypes,
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
	color?: ColorType;
	size?: Size;
	rounded?: SizesComplete;
	icon?: IconType | string;
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
	buttonType?: "button" | "submit" | "reset";
	hideWhenLessThan?: number;
	loading?: boolean;
	loaderColor?: ColorType;
	loadOnClick?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	id,
	onClick,
	disabled = false,
	ariaLabel = "button",
	href,
	variant = ButtonVariants.filled,
	hideWhenLessThan = 0,
	color = ColorTypes.primary,
	size = Sizes.md,
	rounded = Sizes.lg,
	icon,
	iconPosition = Sides.left,
	autoFocus = false,
	fullWidth = false,
	centered = false,
	padding = { x: Sizes.md, y: Sizes.sm },
	style,
	customRef,
	justify = JustifyContents.start,
	rippleColor,
	rippleOpacity,
	rippleDuration,
	position = "relative",
	hasRipple = position !== "absolute" && position !== "fixed",
	buttonType = "button",
	loading = false,
	loaderColor = variant === ButtonVariants.text ? ColorTypes.primary : ColorTypes.background,
	loadOnClick = false,
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
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			autoFocus={autoFocus}
			id={id}
			onClick={handleClick}
			type={buttonType}
			style={style}
			className={buttonStyles({
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
		>
			{ripples}

			{isLoading && <Loader size={size} color={loaderColor} />}
			{icon && iconPosition === "left" && <Icon icon={icon} size={size} />}

			{children && shouldShowChildren && (
				<div className={`w-full flex gap-2 items-center  ${applyJustifyContent(justify) ?? ""}`}>
					{children}
				</div>
			)}

			{icon && iconPosition === "right" && <Icon icon={icon} size={size} />}
		</ButtonStyled>
	);
};
export default Button;
