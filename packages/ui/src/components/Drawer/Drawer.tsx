"use client"

import * as React from "react"
import { TbX } from "react-icons/tb"
import { Drawer as D } from "vaul"

import { cn } from "../../helpers"
import { Direction, DirectionEnum } from "../../types"
import { Button } from "../Button"
import { CommonPopupContentProps, DialogOverlay } from "../Dialog"
import { IconButton } from "../IconButton"

const DrawerRoot = D.Root
const DrawerTrigger = D.Trigger
const DrawerPortal = D.Portal
const DrawerClose = D.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof D.Overlay>,
  React.ComponentPropsWithoutRef<typeof D.Overlay>
>(({ className, ...props }, ref) => (
  <D.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = D.Overlay.displayName

export type DrawerContentProps = React.ComponentPropsWithoutRef<
  typeof D.Content
> &
  CommonPopupContentProps & {
    direction?: Direction
    fillBackground?: boolean
    withOverlay?: boolean
  }

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof D.Content>,
  DrawerContentProps
>(
  (
    {
      className,
      direction = "bottom",
      children,
      fillBackground,
      overlayProps,
      withOverlay = true,
      ...props
    },
    ref
  ) => {
    const isVertical =
      direction === DirectionEnum.top || direction === DirectionEnum.bottom
    const isHorizontal =
      direction === DirectionEnum.right || direction === DirectionEnum.left

    return (
      <DrawerPortal>
        {withOverlay && <DialogOverlay {...overlayProps} />}{" "}
        <D.Content
          ref={ref}
          className={cn(
            "fixed z-50 p-4 flex h-fit flex-col border bg-secondary-50 dark:bg-secondary-900 ",
            {
              "bottom-0": direction !== DirectionEnum.top,
              "top-0": direction !== DirectionEnum.bottom,
              "right-0": direction !== DirectionEnum.left,
              "left-0": direction !== DirectionEnum.right,

              "rounded-t-[10px]": direction === DirectionEnum.bottom,
              "rounded-b-[10px]": direction === DirectionEnum.top,
              "rounded-l-[10px]": direction === DirectionEnum.right,
              "rounded-r-[10px]": direction === DirectionEnum.left,

              " max-h-[96%]": isVertical,
              " max-w-[96%]": isHorizontal,

              "h-full": isVertical && fillBackground,
              "w-full": isHorizontal && fillBackground,
            },
            className
          )}
          {...props}
        >
          {direction === DirectionEnum.bottom && (
            <D.Handle className="mx-auto mb-2 h-2 w-[100px] rounded-full bg-secondary" />
          )}
          {direction === DirectionEnum.left && (
            <D.Close
              className="absolute top-0 right-0 m-1"
              aria-label="Close"
              asChild
            >
              <IconButton>
                <TbX />
              </IconButton>
            </D.Close>
          )}
          {direction === DirectionEnum.right && (
            <D.Close
              className="absolute top-0 left-0 m-1"
              aria-label="Close"
              asChild
            >
              <IconButton>
                <TbX />
              </IconButton>
            </D.Close>
          )}
          {children}
          {direction === DirectionEnum.top && (
            <D.Handle className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-secondary" />
          )}
        </D.Content>
      </DrawerPortal>
    )
  }
)
DrawerContent.displayName = "DrawerContent"

//

export type DrawerProps = React.ComponentProps<typeof D.Root> & {
  children: React.ReactNode
  label?: string
  trigger?: React.ReactNode
  withoutTrigger?: boolean
  contentProps?: DrawerContentProps
  triggerProps?: React.ComponentProps<typeof D.Trigger>
  className?: string
}

const Drawer = ({
  children,
  label = "Open Drawer",
  trigger,
  contentProps,
  triggerProps,
  className,
  withoutTrigger,
  ...props
}: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>
  return (
    <DrawerRoot {...props}>
      {!withoutTrigger && (
        <DrawerTrigger asChild {...triggerProps}>
          {triggerNode}
        </DrawerTrigger>
      )}
      <DrawerContent
        {...contentProps}
        fillBackground={props.shouldScaleBackground}
      >
        {children}
      </DrawerContent>
    </DrawerRoot>
  )
}

const NestedDrawer = ({
  children,
  label = "Open Drawer",
  trigger,
  ...props
}: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>
  return (
    <D.NestedRoot {...props}>
      <DrawerTrigger>{triggerNode}</DrawerTrigger>
      <DrawerContent
        direction={props.direction ?? DirectionEnum.bottom}
        fillBackground={props.shouldScaleBackground}
      >
        {children}
      </DrawerContent>
    </D.NestedRoot>
  )
}
export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
  NestedDrawer,
}
