"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { TbX } from "react-icons/tb";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import type { PopoverTheme } from "./theme";

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

//
interface PopoverProps extends Omit<PopoverPrimitive.PopoverContentProps, "content"> {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  theme?: DeepPartial<PopoverTheme>;
  closeClassName?: string;
  closeIcon?: React.ReactNode;
  hasCloseButton?: boolean;
  trigger?: React.ReactNode;
  label?: string;
  disabled?: boolean;
}
const Popover = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal,
  trigger,
  label = "Open Menu",
  theme: customTheme = {},
  closeClassName,
  hasCloseButton = false,
  closeIcon = <TbX />,
  disabled = false,
  ...rest
}: PopoverProps) => {
  const theme = mergeDeep(getTheme().popover, customTheme);

  const triggerNode = trigger || <Button name={label}>{label}</Button>;

  return (
    <PopoverPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <PopoverTrigger>{triggerNode}</PopoverTrigger>
      {!disabled && (
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            {...rest}
            className={cn(theme.content.base, theme.content.animation, rest.className)}
            sideOffset={rest.sideOffset ?? 5}
          >
            {hasCloseButton && (
              <div className={theme.close}>
                <PopoverPrimitive.Close className={cn(closeClassName)} aria-label="Close" asChild={true}>
                  <IconButton>{closeIcon}</IconButton>
                </PopoverPrimitive.Close>
              </div>
            )}
            {children}
            <PopoverPrimitive.Arrow className="fill-background dark:fill-secondary-900" />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      )}
    </PopoverPrimitive.Root>
  );
};

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, type PopoverProps };
