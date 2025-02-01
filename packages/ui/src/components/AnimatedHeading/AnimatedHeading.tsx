"use client";

import { cn } from "../../helpers";
export type TextAnimation = "slide-right" | "slide-left" | "slide-top" | "slide-bottom" | "blur" | "grow-x" | "grow-y";

type AnimatedSplitTextProps = {
  animation?: TextAnimation;
  text: string;
  delay?: number;
  separator?: string;
  className?: string;
  wrapperClassName?: string;
};
export const AnimatedSplitText = ({
  animation = "slide-top",
  text,
  delay = 0.2,
  separator = " ",
  className,
  wrapperClassName,
}: AnimatedSplitTextProps) => {
  const animations: Record<TextAnimation, string> = {
    "slide-right": "animate-slide-in-right",
    "slide-left": "animate-slide-in-left",
    "slide-top": "animate-slide-in-top",
    "slide-bottom": "animate-slide-in-bottom",
    blur: "animate-blur",
    "grow-x": "animate-grow-x",
    "grow-y": "animate-grow-y",
  };
  return (
    <p className={cn("space-x-1", wrapperClassName)}>
      {text.split(separator).map((word, idx) => (
        <span
          key={`${word}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            idx
          }`}
          style={{
            animationDelay: `${idx * delay}s`,
            animationFillMode: "both",
          }}
          className={cn("inline-block", animations[animation], className)}
        >
          {word}
        </span>
      ))}
    </p>
  );
};
