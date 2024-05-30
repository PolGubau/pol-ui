'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { TbCheck, TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { cn } from '../../helpers'
import { Button, ButtonProps } from '../Button'

const S = SelectPrimitive.Root
export interface SelectProps extends React.ComponentProps<typeof S> {
  children: React.ReactNode
  trigger?: React.ReactNode
  placeholder?: string
  onChange?: (value: string) => void
  defaultTriggerOptions?: Partial<ButtonProps>
}
const Select = ({
  children,
  onChange,
  trigger,
  placeholder = 'Select an option...',
  defaultTriggerOptions,
  ...rest
}: SelectProps) => {
  return (
    <S {...rest} onValueChange={onChange}>
      <SelectTrigger
        trigger={trigger}
        options={defaultTriggerOptions}
        className={cn('min-w-[180px]', defaultTriggerOptions?.className)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </S>
  )
}

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

interface TriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  trigger?: React.ReactNode
  options?: Partial<ButtonProps>
}

const SelectTrigger = ({ className, children, trigger, options, ...props }: TriggerProps) => (
  <SelectPrimitive.Trigger asChild className={cn(className)} {...props}>
    {trigger ?? (
      <Button variant={'outline'} {...options} className={cn('justify-between', options?.className)}>
        {children}
        <SelectPrimitive.Icon asChild>
          <TbChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </Button>
    )}
  </SelectPrimitive.Trigger>
)

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <TbChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <TbChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-secondary-50 shadow-md ',

        'data-[state=open]:animate-slideDownIn data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        {
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1':
            position === 'popper',
        },

        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-0',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-secondary-300 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <TbCheck className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem }
