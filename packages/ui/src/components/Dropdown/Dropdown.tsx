"use client"

import React, {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
} from "react"
import * as D from "@radix-ui/react-dropdown-menu"
import { TbCheck, TbCircle } from "react-icons/tb"

import { cn } from "../../helpers"
import { Button } from "../Button"
import { DropdownContent } from "./components"

export interface DropdownProps extends D.DropdownMenuContentProps {
  trigger?: React.ReactNode
  children: React.ReactNode
  /** Label of the trigger button, if you don't provide a custom trigger */
  label?: string
  disabled?: boolean
}

const Dropdown = ({
  trigger,
  label = "Open Menu",
  children,
  disabled,
  ...props
}: DropdownProps) => {
  const triggerNode = trigger ?? <Button name={label}>{label}</Button>
  return (
    <D.Root>
      <D.Trigger disabled={disabled} asChild>
        {triggerNode}
      </D.Trigger>
      {!disabled && (
        <DropdownContent sideOffset={props.sideOffset ?? 5} {...props}>
          {children}
        </DropdownContent>
      )}
    </D.Root>
  )
}

const DropdownTrigger = D.Trigger

const DropdownGroup = D.Group

const DropdownPortal = D.Portal

const DropdownSub = D.Sub

const DropdownRadioGroup = D.RadioGroup

const DropdownCheckboxItem = forwardRef<
  ElementRef<typeof D.CheckboxItem>,
  ComponentPropsWithoutRef<typeof D.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <D.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary focus:text-secondary-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <D.ItemIndicator className="bg-black">
        <TbCheck size={15} />
      </D.ItemIndicator>
    </span>
    {children}
  </D.CheckboxItem>
))
DropdownCheckboxItem.displayName = D.CheckboxItem.displayName

const DropdownRadioItem = forwardRef<
  ElementRef<typeof D.RadioItem>,
  ComponentPropsWithoutRef<typeof D.RadioItem>
>(({ className, children, ...props }, ref) => (
  <D.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary focus:text-secondary-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <D.ItemIndicator>
        <TbCircle className="h-2 w-2 fill-current" />
      </D.ItemIndicator>
    </span>
    {children}
  </D.RadioItem>
))
DropdownRadioItem.displayName = D.RadioItem.displayName

const DropdownLabel = forwardRef<
  ElementRef<typeof D.Label>,
  ComponentPropsWithoutRef<typeof D.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <D.Label
    ref={ref}
    className={cn("text-sm", inset && "pl-8", className)}
    {...props}
  />
))
DropdownLabel.displayName = D.Label.displayName
export type DropdownDescriptionProps = HTMLAttributes<HTMLHeadingElement>
const DropdownDescription = ({
  className,
  ...props
}: DropdownDescriptionProps) => (
  <D.Label className={cn("text-sm opacity-75", className)} {...props} />
)
export type DropdownHeaderProps = HTMLAttributes<HTMLHeadingElement>
const DropdownHeader = ({ className, ...props }: DropdownHeaderProps) => (
  <header
    className={cn(
      "px-4 py-2 text-sm flex flex-col gap-1 text-secondary-900 dark:text-secondary-50",
      className
    )}
    {...props}
  />
)

const DropdownShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownShortcut.displayName = "DropdownShortcut"

export {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownDescription,
  DropdownGroup,
  DropdownHeader,
  DropdownLabel,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownShortcut,
  DropdownSub,
  DropdownTrigger,
}
