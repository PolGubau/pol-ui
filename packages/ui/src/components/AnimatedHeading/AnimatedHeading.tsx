"use client";
/**
 * @name AnimatedHeading
 * @description The AnimatedHeading component is used to animate the text of a heading with a variety of animations
 * @returns React.FC<AnimatedHeadingProps>
 *
 */
import { AnimatePresence, motion } from "framer-motion";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial, WithClassName } from "../../types";
import type { DynamicHeadingProps } from "../DynamicHeading";
import { DynamicHeading } from "../DynamicHeading";
import type { AnimateHeadingTheme } from "./theme";
import {
	AnimatedHeadingAnimationsEnum,
	type AnimatedHeadingsAnimation,
	animatedHeadinganimations,
	lettersAnimations,
	wholeSenteceAnimations,
	wordsAnimations,
} from "./types";

export interface AnimatedHeadingProps
	extends WithClassName,
		Pick<DynamicHeadingProps, "as"> {
	animation: AnimatedHeadingsAnimation;
	children: string;
	theme?: DeepPartial<AnimateHeadingTheme>;
}

/**
 * AnimatedHeading component
 * @description The AnimatedHeading component is used to animate the text of a heading with a variety of animations
 * @returns React.FC<AnimatedHeadingProps>
 */
export const AnimatedHeading = ({
	as,
	children,
	className,
	theme: customTheme = {},
	animation = AnimatedHeadingAnimationsEnum["fade-down"],
}: AnimatedHeadingProps) => {
	const theme = mergeDeep(getTheme().animatedText, customTheme);

	if (wholeSenteceAnimations.includes(animation)) {
		return (
			<AnimationsForWholeSentence
				className={className}
				animation={animatedHeadinganimations[animation]}
				as={as}
				theme={theme}
			>
				{children}
			</AnimationsForWholeSentence>
		);
	}
	// if (wordsAnimations.includes(animation)) {
	// 	return (
	// 		<AnimationsForWords
	// 			animation={animatedHeadinganimations[animation]}
	// 			as={as}
	// 			theme={theme}
	// 		>
	// 			{children}
	// 		</AnimationsForWords>
	// 	);
	// }
	if (lettersAnimations.includes(animation)) {
		return (
			<AnimationsForLetters
				animation={animatedHeadinganimations[animation]}
				as={as}
				theme={theme}
			>
				{children}
			</AnimationsForLetters>
		);
	}

	return "not implemented";
};

interface AnimationsItemProps
	extends WithClassName,
		Pick<AnimatedHeadingProps, "as" | "children"> {
	animation: (typeof AnimatedHeading.prototype.animations)[0];
	theme: AnimateHeadingTheme;
}
export const AnimationsForWholeSentence = ({
	animation,
	children,
	as,
	className,
	theme,
}: AnimationsItemProps) => {
	return (
		<motion.div
			initial="hidden"
			animate="show"
			viewport={{ once: true }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: 0.15,
					},
				},
			}}
		>
			<motion.div className={cn(theme.base, className)} variants={animation}>
				<DynamicHeading as={as}>{children}</DynamicHeading>
			</motion.div>
		</motion.div>
	);
};

export type TextAnimation = "slide-right" | "slide-left";
type AnimationsForWordsProps = {
	animation?: TextAnimation;
	text: string;
	delay?: number;
	separator?: string;
	suffix?: string;
	className?: string;
};
export const AnimationsForWords = ({
	animation = "slide-right",
	text,
	delay = 0.2,
	separator = " ",
	suffix = " ",
	className,
}: AnimationsForWordsProps) => {
	const animations: Record<TextAnimation, string> = {
		"slide-right": "animate-fade-in-right",
		"slide-left": "animate-fade-in-left",
	};
	return (
		<div>
			{text.split(separator).map((word, idx) => (
				<span
					key={word}
					style={{
						animationDelay: `${idx * delay}s`,
						animationFillMode: "both",
					}}
					className={cn(className, animations[animation])}
				>
					{word}
					{suffix}
				</span>
			))}
		</div>
	);
};

export const AnimationsForLetters = ({
	animation,
	children,
	className,
	theme,
}: AnimationsItemProps) => {
	return (
		<div className="flex flex-wrap">
			<AnimatePresence>
				{children.split("").map((char, i) => (
					<motion.p
						key={char}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={animation}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className={cn(theme.base, className)}
					>
						{char === " " ? <span>&nbsp;</span> : char}
					</motion.p>
				))}
			</AnimatePresence>
		</div>
	);
};
