"use client";

import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { type VariantProps, cva } from "../../helpers/cva/cva";

import { cn, mergeRefs } from "../../helpers";
import { useRipple } from "../../hooks/use-ripple";
import type { RippleOptions } from "../../hooks/use-ripple/use-ripple";
import type { DeepPartial } from "../../types";
import { FocusEffect } from "../FocusEffect";
import { Loader } from "../Loader";
import type { ButtonTheme } from "./theme";

const variants = {
  variant: {
    filled: "shadow hover:shadow-lg focus:shadow-lg transition-shadow",
    outline: "border bg-transparent shadow hover:shadow-lg focus:shadow-lg transition-[colors, shadow]",
    ghost: "hover:bg-primary/60 transition-colors",
    link: "text-primary underline-offset-4 hover:underline focus:underline",
  },
  size: {
    md: "h-8 px-3 py-1",
    sm: "h-8 px-2 text-xs",
    xs: "h-7 px-1 text-xs",
    lg: "h-10 px-8",
    xl: "h-12 px-10",
  },
  color: {
    primary: "",
    secondary: "",
    error: "",
    info: "",
    success: "",
    warning: "",
  },
  rounded: {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  },
  fullSized: {
    true: "w-full",
    false: "",
  },
};
export type Variants = typeof variants;

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 relative group overflow-hidden gap-2 cursor-pointer",
  {
    variants: variants,
    compoundVariants: [
      {
        variant: "filled",
        className: "text-secondary-50 dark:text-secondary-900 hover:brightness-90",
      },
      {
        variant: ["link", "outline", "ghost"],
        className: "text-secondary-900 dark:text-secondary-50",
      },
      {
        variant: "filled",
        color: "primary",
        className: "bg-primary",
      },
      {
        variant: "filled",
        color: "secondary",
        className: "bg-secondary",
      },
      {
        variant: "filled",
        color: "success",
        className: "bg-success",
      },
      {
        variant: "filled",
        color: "error",
        className: "bg-error",
      },
      {
        variant: "filled",
        color: "info",
        className: "bg-info",
      },
      {
        variant: "filled",
        color: "warning",
        className: "bg-warning",
      },
      {
        variant: ["outline", "ghost"],
        color: "primary",
        className: "border-primary hover:bg-primary/30",
      },
      {
        variant: ["outline", "ghost"],
        color: "secondary",
        className: "border-secondary hover:bg-secondary/30",
      },
      {
        variant: ["outline", "ghost"],
        color: "error",
        className: "border-error hover:bg-error/30",
      },
      {
        variant: ["outline", "ghost"],
        color: "warning",
        className: "border-warning hover:bg-warning/30",
      },
      {
        variant: ["outline", "ghost"],
        color: "info",
        className: "border-info hover:bg-info/30",
      },
      {
        variant: ["outline", "ghost"],
        color: "success",
        className: "border-success hover:bg-success/30",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "md",
      color: "primary",
      fullSized: false,
      rounded: "xl",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label?: string;
  loading?: boolean;
  fullSized?: boolean;
  loader?: React.ReactNode;
  focusEffect?: boolean;
  theme?: DeepPartial<ButtonTheme>;
  rippleOptions?: Partial<RippleOptions>;
}

export type ButtonVariants = keyof typeof variants.variant;
export type VariantsEnum = keyof typeof variants;

export const Button = React.forwardRef<React.ElementRef<typeof Slot>, ButtonProps>(
  (
    {
      className,
      loader,
      loading,
      variant = "filled",
      rounded,
      fullSized = false,
      size,
      color,
      focusEffect = true,
      asChild = false,
      rippleOptions = {
        opacity: 0.2,
        duration: 700,
      },
      ...props
    },
    ref,
  ) => {
    const isDisabled = props.disabled ?? loading;
    const [ripple, event] = useRipple({
      disabled: isDisabled,
      ...rippleOptions,
    });
    // const refs = mergeRefs([ripple, ref])
    const Comp = asChild ? Slot : "button";

    const label = props.label ?? props.children;
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            fullSized,
            className,
            color,
            rounded,
          }),
        )}
        ref={mergeRefs([ripple, ref])}
        {...props}
        disabled={isDisabled}
        onClick={(e) => {
          if (props.onClick) {
            props.onClick(e as React.MouseEvent<HTMLButtonElement>);
          }
          event(e);
        }}
      >
        <>
          {loading
            ? (loader ?? (
                <>
                  <Loader size={size ?? "sm"} />
                  {label}
                </>
              ))
            : label}
          {focusEffect && <FocusEffect />}
        </>
      </Comp>
    );
  },
);
Button.displayName = "Button";
