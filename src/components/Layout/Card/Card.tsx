import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Color, Colors, PaddingOneOrBothValues, Sizes, SizesComplete } from "../../../types";
import { applyPadding, applyRounded } from "../../../style";
import { useRipple } from "../../../hooks";
interface Props {
	children: React.ReactNode;
	rounded?: SizesComplete;
	padding?: PaddingOneOrBothValues;
	lightColor?: string;
	lightSize?: number;
	onClick?: () => void | undefined;
	rippleColor?: Color;
	rippleOpacity?: number;
	rippleDuration?: number;
	hasRipple?: boolean;
	transparencyOnHover?: number;
}

export default function Card({
	children,
	lightColor = "rgba(14, 165, 233, 0.25)",
	lightSize = 650,
	onClick = undefined,
	rounded = Sizes.lg,
	padding = Sizes.lg,
	rippleColor = Colors.secondary,
	rippleOpacity = 0.25,
	rippleDuration = 0.5,
	hasRipple = Boolean(onClick),
}: Props) {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	const ref = useRef<HTMLDivElement>(null);

	const ripples = useRipple({
		hasRipple,
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
			)} border border-primary  bg-primary/10 shadow-2xl`}
			onMouseMove={handleMouseMove}
			onClick={onClick}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              ${lightSize}px circle at ${mouseX}px ${mouseY}px,
              ${lightColor},
              transparent 80%
            )
          `,
				}}
			/>
			{ripples}
			{children}
		</div>
	);
}
