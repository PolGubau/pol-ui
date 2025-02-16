"use client";

import {
	AnimatePresence,
	type MotionProps,
	type Transition,
	type Variant,
	motion,
} from "framer-motion";

import { cn } from "../../helpers";

export type TransitionPanelProps = {
	children: React.ReactNode[];
	className?: string;
	transition?: Transition;
	activeIndex: number;
	variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

export function TransitionPanel({
	children,
	className,
	transition,
	variants,
	activeIndex,
	...motionProps
}: TransitionPanelProps) {
	return (
		<div className={cn("relative", className)}>
			<AnimatePresence
				initial={false}
				mode="popLayout"
				custom={motionProps.custom}
			>
				<motion.div
					key={activeIndex}
					variants={variants}
					transition={transition}
					initial="enter"
					animate="center"
					exit="exit"
					{...motionProps}
				>
					{children[activeIndex]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
