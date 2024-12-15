"use client";
import { motion } from "framer-motion";
import type React from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers";
import { useBgColorTransition } from "../../hooks/use-sticky-scroll";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { StickyScrollTheme } from "./theme";

export interface StickyScrollProps extends React.PropsWithChildren {
  colors: string[];
  theme?: DeepPartial<StickyScrollTheme>;
  className?: string;
}
export const StickyScroll: React.FC<StickyScrollProps> = ({
  colors,
  children,
  theme: customTheme = {},
  className,
}: React.PropsWithChildren<StickyScrollProps>) => {
  const { color, ref } = useBgColorTransition(colors);
  const theme = mergeDeep(getTheme().stickyScroll, customTheme);

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: color,
      }}
      className={twMerge(theme.base, className)}
    >
      {children}
    </motion.div>
  );
};
