"use client";

import { motion } from "framer-motion";
import type React from "react";

import { cn } from "../../helpers";

interface ListeningAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  isListening: boolean;
  size?: number;
  scaleFactor?: number;
  itemClassName?: string;
  dotsAmount?: number;
  className?: string;
}

const ListeningAnimation: React.FC<ListeningAnimationProps> = ({
  isListening,
  size = 20,
  scaleFactor = 1.7,
  itemClassName,
  dotsAmount = 4,
  className,
  ...rest
}) => {
  return (
    <div className={cn("gap-2 flex w-[100px] justify-center items-center", className)} {...rest}>
      {[...Array(dotsAmount)].map((_, index) => (
        <motion.div
          key={index}
          className={cn("w-full aspect-square rounded-full bg-primary", itemClassName)}
          animate={
            isListening
              ? {
                  height: [size, size * scaleFactor, size],
                  opacity: [1, 0.7, 1],
                }
              : { scale: 1, opacity: 1 }
          }
          transition={
            isListening
              ? {
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.1,
                }
              : undefined
          }
        />
      ))}
    </div>
  );
};

export { ListeningAnimation };
export type { ListeningAnimationProps };
