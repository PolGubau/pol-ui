"use client";

import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

import { useLongPress } from "../../hooks";
import { Button, type ButtonProps } from "../Button";

interface LongPressProps extends ButtonProps {
  delay?: number;
  onLongPress: () => void;
}

const TimedButton = ({ onLongPress, delay = 1000, ...props }: LongPressProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const { onMouseDown, onTouchStart, onMouseUp, onTouchEnd } = useLongPress({
    delay,
    onLongPress,
  });

  const handleMouseDown = (e: React.MouseEvent | React.KeyboardEvent) => {
    setIsPressed(true);
    onMouseDown(e);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    onMouseUp();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    onTouchStart(e);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
    onTouchEnd();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      setIsPressed(true);
      onMouseDown(e);
    }
  };
  return (
    <Button
      {...props}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      onKeyUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
      rippleOptions={{ disabled: isPressed }}
      className="relative overflow-hidden "
    >
      <AnimatePresence>
        {isPressed && (
          <motion.div
            className="absolute left-0 h-full bg-black/15 z-0 rounded-r-full items-center"
            initial={{ width: "0%", x: "0%" }}
            animate={{ width: "100%", x: "0%", height: "200%" }}
            exit={{ width: "0%", x: "0%" }}
            transition={{ duration: delay / 1000 }}
          />
        )}
      </AnimatePresence>
      {props.children}
    </Button>
  );
};

export { TimedButton, type LongPressProps };
