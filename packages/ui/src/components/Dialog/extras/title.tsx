"use client";

import { Title } from "@radix-ui/react-dialog";
import { forwardRef } from "react";

import { cn } from "../../../helpers";

export const DialogTitle = forwardRef<React.ElementRef<typeof Title>, React.ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight text-black dark:text-white", className)}
      {...props}
    />
  ),
);
DialogTitle.displayName = Title.displayName;
