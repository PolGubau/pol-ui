"use client"

import * as React from "react"
import { TbCheck, TbSortAscending } from "react-icons/tb"

import { cn } from "../../helpers"
import { Button } from "../Button/Button"
import { Command, CommandEmpty, CommandInput } from "../Command"
import { CommandGroup, CommandItem } from "../Command/Command"
import { Popover, type PopoverProps } from "../Popover"

export interface AutocompleteOption {
  value: string
  label: string
}

type ReusablePropsFromPopover = Omit<
  PopoverProps,
  "children" | "value" | "onChange" | "content"
>
export interface AutocompleteProps extends ReusablePropsFromPopover {
  value?: AutocompleteOption
  onChange: (value: AutocompleteOption) => void
  options: AutocompleteOption[]
  closeOnSelect?: boolean
  placeholder?: string
  children?: React.ReactNode
  noFoundText?: string
  popupClassName?: string
}
export function Autocomplete({
  value,
  onChange,
  options,
  closeOnSelect = true,
  children,
  placeholder = "Type to search...",
  noFoundText = "No option found.",
  popupClassName,
  ...rest
}: Readonly<AutocompleteProps>) {
  return (
    <Popover
      hasCloseButton={false}
      className={cn("p-0", rest.className)}
      {...rest}
      trigger={
        children ?? (
          <Button
            variant="outline"
            aria-expanded={rest.open}
            className="w-[200px] justify-between"
          >
            {value
              ? options.find((framework) => framework.value === value.value)
                  ?.label
              : "Select..."}
            <TbSortAscending className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        )
      }
    >
      {" "}
      <Command className={cn("bg-secondary-50", popupClassName)}>
        <CommandInput placeholder={placeholder} className="h-9" />
        <CommandEmpty>{noFoundText}</CommandEmpty>
        <CommandGroup>
          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.value}
              onSelect={(currentValue) => {
                onChange(
                  options.find((framework) => framework.value === currentValue)!
                )
                if (closeOnSelect) {
                  rest.onOpenChange?.(false)
                }
              }}
            >
              {option.label}
              <TbCheck
                className={cn(
                  "ml-auto h-4 w-4",
                  value?.value === option.value ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </Popover>
  )
}
