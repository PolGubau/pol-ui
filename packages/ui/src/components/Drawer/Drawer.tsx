"use client"

import * as React from "react"
import { TbX } from "react-icons/tb"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "../../helpers"
import { Direction, DirectionEnum } from "../../types"
import { Button } from "../Button"
import { IconButton } from "../IconButton"

const DrawerRoot = DrawerPrimitive.Root
const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerPortal = DrawerPrimitive.Portal
const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  direction?: Direction
  fillBackground?: boolean
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, direction, children, fillBackground, ...props }, ref) => {
  const isVertical =
    direction === DirectionEnum.top || direction === DirectionEnum.bottom
  const isHorizontal =
    direction === DirectionEnum.right || direction === DirectionEnum.left

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 p-4 flex h-auto flex-col border bg-secondary-50 dark:bg-secondary-900 overflow-y-auto",
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
          <DrawerPrimitive.Handle className="mx-auto mb-2 h-2 w-[100px] rounded-full bg-secondary" />
        )}
        {direction === DirectionEnum.left && (
          <DrawerPrimitive.Close
            className="absolute top-0 right-0 m-1"
            aria-label="Close"
            asChild
          >
            <IconButton>
              <TbX />
            </IconButton>
          </DrawerPrimitive.Close>
        )}
        {direction === DirectionEnum.right && (
          <DrawerPrimitive.Close
            className="absolute top-0 left-0 m-1"
            aria-label="Close"
            asChild
          >
            <IconButton>
              <TbX />
            </IconButton>
          </DrawerPrimitive.Close>
        )}
        {children}
        {direction === DirectionEnum.top && (
          <DrawerPrimitive.Handle className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-secondary" />
        )}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
})
DrawerContent.displayName = "DrawerContent"

//

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root> & {
  children: React.ReactNode
  label?: string
  trigger?: React.ReactNode
  noTrigger?: boolean
}

const Drawer = ({
  children,
  label = "Open Drawer",
  trigger,
  noTrigger,
  ...props
}: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>
  return (
    <DrawerRoot {...props}>
      {!noTrigger && <DrawerTrigger>{triggerNode}</DrawerTrigger>}
      <DrawerContent
        direction={props.direction ?? DirectionEnum.bottom}
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
    <DrawerPrimitive.NestedRoot {...props}>
      <DrawerTrigger>{triggerNode}</DrawerTrigger>
      <DrawerContent
        direction={props.direction ?? DirectionEnum.bottom}
        fillBackground={props.shouldScaleBackground}
      >
        {children}
      </DrawerContent>
    </DrawerPrimitive.NestedRoot>
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
