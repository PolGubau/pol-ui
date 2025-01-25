"use client";

// Core component that receives mouse positions and renders pointer and content

import type { PropsWithChildren } from "react";
import React, { useEffect, useState } from "react";

import type { MotionValue } from "framer-motion";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FollowerPointerTheme } from "./theme";

export interface FollowerPointerProps extends React.PropsWithChildren {
  className?: string;
  content?: string | React.ReactNode;
  icon?: React.ReactNode;
  theme?: DeepPartial<FollowerPointerTheme>;
}

/**
 *
 * @name FollowerPointer
 * @description The FollowerPointer component is used to display a pointer that follows the mouse and displays content, such as a tooltip or a popover. It is a decorative component that is used to enhance the user experience in certain scenarios.
 * @prop {string} [className] - The className of the FollowerPointer component.
 * @prop {string | React.ReactNode} [content] - The content to be displayed when the pointer is active.
 * @prop {React.ReactNode} [icon] - The icon to be displayed in the pointer.
 * @prop {DeepPartial<FollowerPointerTheme>} [theme] - The theme of the FollowerPointer component.
 * @example
 * <FollowerPointer content="Hello, world!">
 * <FollowerPointer content="Hello, world!">
 *
 * @returns
 */
export const FollowerPointer = ({
  children,
  className,
  content,
  icon,
  theme: customTheme = {},
}: PropsWithChildren<FollowerPointerProps>) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  const theme = mergeDeep(getTheme().followerPointer, customTheme);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      ref={ref}
      className={twMerge(theme.base, className)}
    >
      <AnimatePresence mode="wait">
        {isInside && <FollowPointer x={x} y={y} content={content} icon={icon} theme={theme} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  content,
  icon,
  theme,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  theme: DeepPartial<FollowerPointerTheme>;
}) => {
  const defaultIcon = icon ?? (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      viewBox="0 0 16 16"
      className={theme.icon}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pointer</title>
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
    </svg>
  );

  return (
    <motion.div
      className={theme.pointerWrapper}
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      {defaultIcon}

      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={theme.pointer}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};
