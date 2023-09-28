import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useRef } from "react";
import {
	Color,
	Colors,
	PaddingOneOrBothValues,
	Shadow,
	Sizes,
	SizesComplete,
} from "../../../types";
import { applyPadding, applyRounded, applyShadow } from "../../../style";
import { useRipple } from "../../../hooks";

interface Props {
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
}

export default function Card({
	children,
	lightColor = "rgba(14, 165, 233, 0.25)",
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
			className={`group overflow-hidden relative max-w-md ${applyRounded(rounded)}  ${applyPadding(
				padding
			)} border border-primary-inverted/50  bg-primary/10 dark:bg-primary-inverted/10 ${applyShadow(
				shadow
			)}`}
			onMouseMove={handleMouseMove} // The handleMouseMove function is called when the mouse moves over the card.
			onClick={onClick}
		>
			<motion.div
				className={`pointer-events-none absolute -inset-px ${applyRounded(
					rounded
				)} opacity-0 transition duration-300 group-hover:opacity-100`}
				style={{
					background: useMotionTemplate`
            radial-gradient(
              ${lightSize}px circle at ${mouseX}px ${mouseY}px,
              ${lightColor},
              transparent ${lightOpacity}%
            )
          `,
				}}
			/>

			{/* The ripples are created with the useRipple hook. */}
			{ripples}

			{/* Children will be the content of the card. */}
			{children}
		</div>
	);
}
