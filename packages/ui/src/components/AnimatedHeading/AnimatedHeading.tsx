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

export interface AnimatedHeadingProps extends WithClassName, Pick<DynamicHeadingProps, "as"> {
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
  if (wordsAnimations.includes(animation)) {
    return (
      <AnimationsForWords animation={animatedHeadinganimations[animation]} as={as} theme={theme}>
        {children}
      </AnimationsForWords>
    );
  }
  if (lettersAnimations.includes(animation)) {
    return (
      <AnimationsForLetters animation={animatedHeadinganimations[animation]} as={as} theme={theme}>
        {children}
      </AnimationsForLetters>
    );
  }

  return "not implemented";
};

interface AnimationsItemProps extends WithClassName, Pick<AnimatedHeadingProps, "as" | "children"> {
  animation: (typeof AnimatedHeading.prototype.animations)[0];
  theme: AnimateHeadingTheme;
}
export const AnimationsForWholeSentence = ({ animation, children, as, className, theme }: AnimationsItemProps) => {
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

export const AnimationsForWords = ({ animation, children, className, theme, as }: AnimationsItemProps) => {
  const MotionHeading = motion(DynamicHeading);
  return (
    <MotionHeading as={as}>
      <motion.div
        variants={animation.container}
        initial="hidden"
        animate="show"
        className={cn(theme.base, theme.word, className)}
      >
        {children.split(" ").map((word) => (
          <motion.span key={word} variants={animation.item} className={cn(theme.word, theme.base, className)}>
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.div>
    </MotionHeading>
  );
};

export const AnimationsForLetters = ({ animation, children, className, theme }: AnimationsItemProps) => {
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
