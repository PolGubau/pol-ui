'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { cn } from '../../helpers'
import { Button } from '../Button'

const DrawerRoot = DrawerPrimitive.Root
const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  direction?: 'top' | 'right' | 'bottom' | 'left'
  fillBackground?: boolean
}

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
  ({ className, direction, children, fillBackground, ...props }, ref) => {
    const isVertical = direction === 'top' || direction === 'bottom'
    const isHorizontal = direction === 'right' || direction === 'left'

    return (
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
          ref={ref}
          className={cn(
            'fixed  z-50 p-4 flex h-auto flex-col border bg-secondary-50 dark:bg-secondary-900',
            {
              'bottom-0': direction !== 'top',
              'top-0': direction !== 'bottom',
              'right-0': direction !== 'left',
              'left-0': direction !== 'right',

              'rounded-t-[10px]': direction === 'bottom',
              'rounded-b-[10px]': direction === 'top',
              'rounded-l-[10px]': direction === 'right',
              'rounded-r-[10px]': direction === 'left',

              ' max-h-[96%]': isVertical,
              ' max-w-[96%]': isHorizontal,

              'h-full': isVertical && fillBackground,
              'w-full': isHorizontal && fillBackground,
            },
            className,
          )}
          {...props}
        >
          <DrawerPrimitive.Handle className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-secondary" />
          {children}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    )
  },
)
DrawerContent.displayName = 'DrawerContent'

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root> & {
  children: React.ReactNode
  label?: string
  trigger?: React.ReactNode
}

const Drawer = ({ children, label = 'Open Drawer', trigger, ...props }: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>
  return (
    <DrawerRoot {...props}>
      <DrawerTrigger>{triggerNode}</DrawerTrigger>
      <DrawerContent direction={props.direction ?? 'bottom'} fillBackground={props.shouldScaleBackground}>
        {children}
      </DrawerContent>
    </DrawerRoot>
  )
}

const NestedDrawer = ({ children, label = 'Open Drawer', trigger, ...props }: DrawerProps) => {
  const triggerNode = trigger || <Button>{label}</Button>
  return (
    <DrawerPrimitive.NestedRoot {...props}>
      <DrawerTrigger>{triggerNode}</DrawerTrigger>
      <DrawerContent direction={props.direction ?? 'bottom'} fillBackground={props.shouldScaleBackground}>
        {children}
      </DrawerContent>
    </DrawerPrimitive.NestedRoot>
  )
}
export { Drawer, DrawerClose, DrawerContent, DrawerOverlay, DrawerPortal, DrawerTrigger, NestedDrawer }
