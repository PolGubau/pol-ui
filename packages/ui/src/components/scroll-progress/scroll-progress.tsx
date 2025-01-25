"use client";

import { type SpringOptions, motion, useScroll, useSpring } from "framer-motion";

import { cn } from "../../helpers";

export interface ScrollProgressProps {
  className?: string;
  options?: SpringOptions;
}

/**
 * @name ScrollProgress
 *
 * @description An animated bar that indicates the scroll progress of the scroll
 *
 * @param className <string> Custom classes to add or override styles with tailwind.
 *
 * @param options <SpringOptions> Custom object from framer-motion to override or add the animation.
 *
 * @example 
 * ``` Default
 * <div className="m-4">
  <ScrollProgress {...props} />
  <strong className="font-bold flex items-center justify-center">
    Note: The scroll progress is shown below the navbar of the page.
  </strong>
  ...content of the website...
</div>
 * ```
 * 
 * @returns JSX Element
 */
export function ScrollProgress({ className, options }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    ...options,
    stiffness: options?.stiffness ?? 200,
    damping: options?.damping ?? 50,
    restDelta: options?.restDelta ?? 0.001,
  });

  return (
    <motion.div
      className={cn("fixed inset-x-0 top-0 z-[1000] left-0 h-1 origin-left bg-primary", className)}
      style={{
        scaleX,
      }}
    />
  );
}
