import { MotionValue, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useRef } from "react";
import {
	BaseProps,
	Color,
	Colors,
	PaddingOneOrBothValues,
	Shadow,
	Sizes,
	SizesComplete,
	SizesWithFull,
	Ten,
	Tens,
} from "../../../types";
import {
	applyBgColor,
	applyBgOpacity,
	applyMaxWidth,
	applyPadding,
	applyRounded,
	applyShadow,
} from "../../../style";
import { useRipple } from "../../../hooks";
import { motionRoundedGradient } from "../../../utils/styleUtils/motionRoundedGradient";

interface Props extends BaseProps {
	children: React.ReactNode;
	rounded?: SizesComplete;
	padding?: PaddingOneOrBothValues;

	// Light effect will come as a css color.
	// TODO: Make this a Color type
	lightColor?: string;

	// Size in pixels of the light effect.
	lightSize?: number;

	// Opacity of the light effect in percent.
	lightOpacity?: number;
	onClick?: () => void;
	rippleColor?: Color;
	rippleOpacity?: number;
	rippleDuration?: number;
	hasRipple?: boolean;

	// The transparency of the light effect when the mouse is over the card.
	shadow?: Shadow;
	bgColor?: Color;
	bgOpacity?: Ten;
	maxWidth?: SizesWithFull;
}

export default function Card({
	children,
	lightColor = "rgba(25, 14, 233, 0.25)",
	lightSize = 550,
	lightOpacity = 80,
	onClick = undefined,
	rounded = Sizes.lg,
	padding = Sizes.lg,
	rippleColor = Colors.secondary,
	rippleOpacity = 0.25,
	rippleDuration = 0.5,
	shadow = Sizes.xl,
	hasRipple = false,
	className = "",
	id,
	style,
	bgColor = Colors.primary,
	bgOpacity = Tens.ten,
	maxWidth = "full",
}: Props) {
	// In the card component, you can have a ripple effect when you click on it and a light effect that follows the mouse.

	// Taking the mouse position
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	//  The handleMouseMove function is called when the mouse moves over the card.
	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	//  The ref is used to get the size of the card.
	const ref = useRef<HTMLDivElement>(null);

	//  	The ripples are created with the useRipple hook.
	const ripples = useRipple({
		hasRipple: hasRipple,
		ref,
		duration: rippleDuration,
		color: rippleColor,
		opacity: rippleOpacity,
	});

	return (
		<div
			ref={ref}
			id={id}
			style={style}
			className={`group overflow-hidden relative ${applyMaxWidth(maxWidth)} ${applyRounded(
				rounded
			)}  ${applyPadding(padding)} border border-primary-inverted/50  
			
			${applyBgColor(bgColor)} 
			
			${applyBgOpacity(bgOpacity)}
			${applyShadow(shadow)} ${className}`}
			onMouseMove={handleMouseMove} // The handleMouseMove function is called when the mouse moves over the card.
			onClick={onClick}
		>
			<motion.div
				className={`pointer-events-none absolute -inset-px ${applyRounded(
					rounded
				)} opacity-0 transition duration-300 group-hover:opacity-100`}
				style={motionRoundedGradient({
					mouseX,
					mouseY,
					color: lightColor,
					opacity: lightOpacity,
					size: lightSize,
				})}
			/>

			{/* The ripples are created with the useRipple hook. */}
			{ripples}

			{/* Children will be the content of the card. */}
			{children}
		</div>
	);
}
