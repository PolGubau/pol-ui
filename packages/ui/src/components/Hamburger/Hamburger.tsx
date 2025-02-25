"use client";

import type { SVGMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { type Colors, ColorsEnum, type DeepPartial, type RoundedSizes } from "../../types";
import type { IconButtonTheme } from "../IconButton";
import { Toggle } from "../Toggle";

export interface HamburgerProps extends Omit<React.ComponentProps<"button">, "color" | "onClick"> {
  open: boolean;
  color?: Colors;
  strokeWidth?: string | number;
  lineProps?: SVGMotionProps<SVGLineElement>;
  theme?: DeepPartial<IconButtonTheme>;
  disabled?: boolean;
  rounded?: RoundedSizes;
  outline?: boolean;
  width?: number;
  height?: number;
  className?: string;
  iconClassName?: string;
  /**
   * onClick event, the emitted event is the click event
   * @param e - the click event from the button
   * @returns  void
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 *
 * @name Hamburger
 * @description The Hamburger component is used to display a Hamburger icon that can be opened or closed, it can be used to display a menu or to trigger an action.
 * @returns
 */
export const Hamburger = ({
  open = false,
  width = 16,
  height = 16,
  strokeWidth = 3,
  lineProps = {},
  onClick,
  color = ColorsEnum.primary,
  theme: customTheme = {},
  className,
  iconClassName,
  ...props
}: HamburgerProps) => {
  const variant = open ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: "currentColor",
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { type: "spring", stiffness: 260, damping: 20 },
    strokeLinecap: "round",
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;
  const theme = mergeDeep(getTheme().Hamburger, customTheme);

  return (
    <Toggle onClick={onClick} active={open} {...props} className={className}>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        width={width}
        height={height}
        fill="none"
        className={cn(theme.base, theme.color[color], iconClassName)}
      >
        <title>{open ? "Close" : "Open"} menu</title>
        <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1={unitHeight / 2} y2={unitHeight / 2} variants={center} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1={unitHeight} y2={unitHeight} variants={bottom} {...lineProps} />
      </motion.svg>{" "}
    </Toggle>
  );
};
