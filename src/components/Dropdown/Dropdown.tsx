'use client'

import * as D from '@radix-ui/react-dropdown-menu'
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from 'react'
import React, { forwardRef } from 'react'
import { TbCheck, TbChevronRight, TbCircle } from 'react-icons/tb'
import { cn } from '../../helpers'
import { Button } from '../Button'

export interface DropdownProps extends D.DropdownMenuContentProps {
  trigger?: React.ReactNode
  children: React.ReactNode
  label?: string
  disabled?: boolean
}

const Dropdown = ({ trigger, label, children, disabled, ...props }: DropdownProps) => {
  return (
    <D.Root>
      <D.Trigger disabled={disabled} asChild>
        {trigger ?? <Button>{label ?? 'Open'}</Button>}
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

const DropdownSubTrigger = forwardRef<
  ElementRef<typeof D.SubTrigger>,
  ComponentPropsWithoutRef<typeof D.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <D.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary data-[state=open]:bg-primary',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <TbChevronRight className="ml-auto h-4 w-4" />
  </D.SubTrigger>
))
DropdownSubTrigger.displayName = D.SubTrigger.displayName

const DropdownSubContent = forwardRef<ElementRef<typeof D.SubContent>, ComponentPropsWithoutRef<typeof D.SubContent>>(
  ({ className, ...props }, ref) => (
    <D.SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-secondary-50 p-1 text-secondary-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  ),
)
DropdownSubContent.displayName = D.SubContent.displayName

const DropdownContent = forwardRef<ElementRef<typeof D.Content>, ComponentPropsWithoutRef<typeof D.Content>>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <D.Portal>
      <D.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-secondary-50 dark:secondary-900 p-1 shadow-md ',
          // 'animate-bounce delay-150 duration-300',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

          className,
        )}
        {...props}
      />
    </D.Portal>
  ),
)
DropdownContent.displayName = D.Content.displayName

type DropdownItemProps = ComponentPropsWithoutRef<typeof D.Item> & {
  inset?: boolean
  label?: string
  shortcut?: React.ReactNode
  shortcutClassName?: string
}
const DropdownItem = forwardRef<ElementRef<typeof D.Item>, DropdownItemProps>(
  ({ className, inset, label, shortcut, shortcutClassName, ...props }, ref) => (
    <D.Item
      ref={ref}
      className={cn(
        'relative  flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 first:rounded-t-md last:rounded-b-md',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {props.children ?? label}
      {shortcut && <DropdownShortcut className={shortcutClassName}>{shortcut}</DropdownShortcut>}
    </D.Item>
  ),
)
DropdownItem.displayName = D.Item.displayName

const DropdownCheckboxItem = forwardRef<
  ElementRef<typeof D.CheckboxItem>,
  ComponentPropsWithoutRef<typeof D.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <D.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <D.ItemIndicator>
        <TbCheck className="h-4 w-4" />
      </D.ItemIndicator>
    </span>
    {children}
  </D.CheckboxItem>
))
DropdownCheckboxItem.displayName = D.CheckboxItem.displayName

const DropdownRadioItem = forwardRef<ElementRef<typeof D.RadioItem>, ComponentPropsWithoutRef<typeof D.RadioItem>>(
  ({ className, children, ...props }, ref) => (
    <D.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
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
  ),
)
DropdownRadioItem.displayName = D.RadioItem.displayName

const DropdownLabel = forwardRef<
  ElementRef<typeof D.Label>,
  ComponentPropsWithoutRef<typeof D.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <D.Label ref={ref} className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)} {...props} />
))
DropdownLabel.displayName = D.Label.displayName

const DropdownShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}
DropdownShortcut.displayName = 'DropdownShortcut'

export {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownShortcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  type DropdownItemProps,
}
