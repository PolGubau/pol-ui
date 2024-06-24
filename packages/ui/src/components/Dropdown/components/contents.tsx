"use client"

import { ComponentPropsWithoutRef } from "react"
import * as D from "@radix-ui/react-dropdown-menu"

import { cn } from "../../../helpers"

type DropdownSubContentProps = ComponentPropsWithoutRef<typeof D.SubContent>
const DropdownSubContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownSubContentProps) => (
  <D.SubContent
    sideOffset={sideOffset}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-xl border bg-white dark:bg-secondary-900 py-2 shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  data-[side=bottom]:slide-in-from-top-3 data-[side=left]:slide-in-from-right-3 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
)

type DropdownContentProps = ComponentPropsWithoutRef<typeof D.Content>
const DropdownContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownContentProps) => (
  <D.Portal>
    <D.Content
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-xl border bg-white dark:bg-secondary-900 py-2 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  data-[side=bottom]:slide-in-from-top-3 data-[side=left]:slide-in-from-right-3 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </D.Portal>
)
export {
  DropdownSubContent,
  type DropdownSubContentProps,
  DropdownContent,
  type DropdownContentProps,
}
