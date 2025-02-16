"use client";

import { type HTMLAttributes, useRef } from "react";

import { cn } from "../../helpers";
import { useBoolean } from "../../hooks";
import { Button } from "../Button";

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  labels?: {
    expand?: string;
    collapse?: string;
  };
}

function CodeBlock({
  labels = { expand: "View Code", collapse: "Collapse" },
  className,
  children,
  ...props
}: CodeBlockProps) {
  const { value: isOpened, toggle } = useBoolean(false);
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden">
      <div className={cn("relative", className)} {...props}>
        <div
          ref={contentHeight}
          style={isOpened ? { height: contentHeight.current?.scrollHeight } : { height: "200px" }}
          className={cn("p-4 my-0 pb-[50px]  transition-height duration-300", {
            "h-auto max-h-[800px] overflow-auto": isOpened,
          })}
        >
          {children}
        </div>

        <div
          className={cn(
            "absolute flex items-end justify-center bg-gradient-to-b from-black/0 to-secondary-50 dark:to-secondary-900 p-2",
            isOpened ? "inset-x-0 bottom-0 h-24 pb-4" : "inset-0",
          )}
        >
          <Button className="h-8 text-xs" onClick={toggle}>
            {isOpened ? labels.collapse : labels.expand}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { CodeBlock, type CodeBlockProps };
