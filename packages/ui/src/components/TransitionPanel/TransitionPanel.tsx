"use client";

import { AnimatePresence, type MotionProps, type Transition, type Variant, motion } from "framer-motion";

import { cn } from "../../helpers";

export type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

const defaultVariants = {
  enter: { opacity: 0, y: -50, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: 50, filter: "blur(4px)" },
};
const defaultTransition = { duration: 0.2, ease: "easeInOut" };

export function TransitionPanel({
  children,
  className,
  transition = defaultTransition,
  variants = defaultVariants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <div className={cn("relative", className)}>
      <AnimatePresence initial={false} mode="popLayout" custom={motionProps.custom}>
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
