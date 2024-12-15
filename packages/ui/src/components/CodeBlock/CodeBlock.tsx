"use client";

import type * as React from "react";

import { cn } from "../../helpers";
import { useBoolean } from "../../hooks";
import { Button } from "../Button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../Collapsible";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
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

  return (
    <Collapsible open={isOpened} onOpenChange={toggle} className="overflow-hidden">
      <div className={cn("relative overflow-hidden bg-secondary-50 dark:bg-secondary-900 ", className)} {...props}>
        <CollapsibleContent forceMount={true} className={cn("overflow-hidden", !isOpened && "max-h-32")}>
          <div className={cn("p-4 my-0 h-fit max-h-[500px] pb-[50px]", isOpened ? "overflow-auto" : "overflow-hidden")}>
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-end justify-center bg-gradient-to-b from-black/0 to-secondary-50 dark:to-secondary-900 p-2",
            isOpened ? "inset-x-0 bottom-0 h-24 pb-4" : "inset-0",
          )}
        >
          <CollapsibleTrigger asChild={true}>
            <Button className="h-8 text-xs">{isOpened ? labels.collapse : labels.expand}</Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}

export { CodeBlock, type CodeBlockProps };
