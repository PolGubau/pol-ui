"use client";

import { AnimatePresence, MotionConfig, type MotionProps, motion } from "framer-motion";
import type React from "react";
import { useEffect, useId, useRef } from "react";

import { cn } from "../../helpers";
import { useBoolean } from "../../hooks";
import { useClickOutside } from "../../hooks/use-click-outside";
import { buttonVariants } from "../Button";

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};

type ChildrenPassedProps = {
  onClose: () => void;
};

interface OverButtonProps {
  children: (props: ChildrenPassedProps) => React.ReactNode;
  //   all motion.div props
  trigger?: React.HTMLProps<HTMLDivElement> & MotionProps;
}

export function OverButton({ children, trigger }: OverButtonProps) {
  const uniqueId = useId();
  const { addEventListener, removeEventListener } = document;
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { value, setFalse, setTrue } = useBoolean(false);

  useClickOutside(formContainerRef, () => {
    setFalse();
  });
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFalse();
      }
    };
    addEventListener("keydown", handleKeyDown);
    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <MotionConfig transition={TRANSITION}>
      <div className="relative flex items-center justify-center">
        <motion.div
          {...trigger}
          layoutId={`popover-${uniqueId}`}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            trigger?.className,
          )}
          style={{
            borderRadius: 8,
          }}
          onClick={setTrue}
        >
          {trigger?.children ?? "Add Note"}
        </motion.div>

        <AnimatePresence mode="wait">
          {value && (
            <motion.div
              ref={formContainerRef}
              layoutId={`popover-${uniqueId}`}
              className="absolute sm:max-h-[80vw] h-[200px] w-[364px] overflow-hidden border border-zinc-950/10 bg-white outline-none dark:bg-zinc-700 z-10"
              style={{
                borderRadius: 12,
              }}
            >
              {children({
                onClose: setFalse,
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
