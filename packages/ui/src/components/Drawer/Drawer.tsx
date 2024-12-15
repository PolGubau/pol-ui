"use client";

import * as React from "react";
import { TbX } from "react-icons/tb";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../helpers";
import { type Direction, DirectionEnum } from "../../types";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

type DrawerTriggerProps = React.ComponentProps<typeof DrawerPrimitive.Trigger>;
type DrawerPortalProps = React.ComponentProps<typeof DrawerPrimitive.Portal>;
type DrawerCloseProps = React.ComponentProps<typeof DrawerPrimitive.Close>;
type DrawerOverlayProps = React.ComponentProps<typeof DrawerPrimitive.Overlay>;

const DrawerRoot = DrawerPrimitive.Root;
const DrawerTrigger = ({ ...props }: DrawerTriggerProps) => {
  return <DrawerPrimitive.Trigger {...props} />;
};
const DrawerPortal = ({ ...props }: DrawerPortalProps) => {
  return <DrawerPrimitive.Portal {...props} />;
};
const DrawerClose = ({ ...props }: DrawerCloseProps) => {
  return <DrawerPrimitive.Close {...props} />;
};

const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => (
  <DrawerPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
);

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  direction?: Direction;
  fillBackground?: boolean;
}

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
  ({ className, direction, children, fillBackground, ...props }, ref) => {
    const isVertical = direction === DirectionEnum.top || direction === DirectionEnum.bottom;
    const isHorizontal = direction === DirectionEnum.right || direction === DirectionEnum.left;

    return (
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 p-4 flex h-auto flex-col border bg-background dark:bg-secondary-900 overflow-y-auto overflow-hidden",
            {
              "bottom-0": direction !== DirectionEnum.top,
              "top-0": direction !== DirectionEnum.bottom,
              "right-0": direction !== DirectionEnum.left,
              "left-0": direction !== DirectionEnum.right,

              "rounded-t-3xl": direction === DirectionEnum.bottom,
              "rounded-b-3xl": direction === DirectionEnum.top,
              "rounded-l-3xl": direction === DirectionEnum.right,
              "rounded-r-3xl": direction === DirectionEnum.left,

              " max-h-[96%]": isVertical,
              " max-w-[96%]": isHorizontal,

              "h-full": isVertical && fillBackground,
              "w-full": isHorizontal && fillBackground,
            },
            className,
          )}
          {...props}
        >
          {direction === DirectionEnum.bottom && (
            <DrawerPrimitive.Handle className="mx-auto mb-2 h-2 w-[100px] rounded-full bg-secondary" />
          )}
          {direction === DirectionEnum.left && (
            <DrawerPrimitive.Close className="absolute top-0 right-0 m-1" aria-label="Close" asChild={true}>
              <IconButton size={"sm"}>
                <TbX size={15} />
              </IconButton>
            </DrawerPrimitive.Close>
          )}
          {direction === DirectionEnum.right && (
            <DrawerPrimitive.Close className="absolute top-0 left-0 m-1" aria-label="Close" asChild={true}>
              <IconButton size={"sm"}>
                <TbX size={15} />
              </IconButton>
            </DrawerPrimitive.Close>
          )}
          <div className="overflow-y-auto rounded-xl">{children}</div>
          {direction === DirectionEnum.top && (
            <DrawerPrimitive.Handle className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-secondary" />
          )}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    );
  },
);
DrawerContent.displayName = "DrawerContent";

//

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root> & {
  children: React.ReactNode;
  label?: string;
  trigger?: React.ReactNode;
  withoutTrigger?: boolean;
  className?: string;
};

const Drawer = ({ children, label = "Open Drawer", trigger, withoutTrigger, ...props }: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>;
  return (
    <DrawerRoot {...props}>
      {!withoutTrigger && <DrawerTrigger asChild={true}>{triggerNode}</DrawerTrigger>}
      <DrawerContent
        direction={props.direction ?? DirectionEnum.bottom}
        fillBackground={props.shouldScaleBackground}
        className={props.className}
      >
        {children}
      </DrawerContent>
    </DrawerRoot>
  );
};

const NestedDrawer = ({ children, label = "Open Drawer", trigger, ...props }: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>;
  return (
    <DrawerPrimitive.NestedRoot {...props}>
      <DrawerTrigger>{triggerNode}</DrawerTrigger>
      <DrawerContent direction={props.direction ?? DirectionEnum.bottom} fillBackground={props.shouldScaleBackground}>
        {children}
      </DrawerContent>
    </DrawerPrimitive.NestedRoot>
  );
};
export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
  NestedDrawer,
  type DrawerTriggerProps,
};
