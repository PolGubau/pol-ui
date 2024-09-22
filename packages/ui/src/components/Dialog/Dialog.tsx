"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { Button } from "../Button"
import { DialogContent, DialogContentProps } from "./components"

const Root = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

// ------------------------------ DialogContent ------------------------------

export interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  children: React.ReactNode
  label?: string
  trigger?: React.ReactNode
  contentProps?: DialogContentProps
  triggerProps?: React.ComponentProps<typeof DialogPrimitive.Trigger>
}
const Dialog = ({
  children,
  label = "Open Dialog",
  trigger,
  contentProps,
  triggerProps,
  ...root
}: DialogProps) => {
  const triggerNode = trigger || <Button>{label}</Button>

  return (
    <Root {...root}>
      <DialogTrigger {...triggerProps}>{triggerNode}</DialogTrigger>
      <DialogContent {...contentProps}>{children}</DialogContent>
    </Root>
  )
}

export { Root, DialogPortal, DialogClose, DialogTrigger, Dialog }
