'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '../../helpers'
import { TbX } from 'react-icons/tb'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { SizesEnum } from '../../types'

const Root = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// ------------------------------ DialogContent ------------------------------
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg max-h-[85dvh] overflow-auto translate-x-[-50%] translate-y-[-50%] gap-4 border bg-secondary-50 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close asChild className="absolute right-2 top-2">
        <IconButton size={SizesEnum.sm}>
          <TbX className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </IconButton>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  children: React.ReactNode
  label?: string
  trigger?: React.ReactNode
}
const Dialog = ({ children, label = 'Open Dialog', trigger, ...root }: DialogProps) => {
  const triggerNode = trigger || <Button>{label}</Button>

  return (
    <Root {...root}>
      <DialogTrigger>{triggerNode}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Root>
  )
}

export { Root, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, Dialog }
