'use client'

import * as React from 'react'
import { TbCheck, TbSortAscending } from 'react-icons/tb'
import { Command, CommandEmpty, CommandInput } from '../Command'
import { CommandGroup, CommandItem } from '../Command/Command'
import { cn } from '../../helpers'
import { Button } from '../Button/Button'
import type { PopoverProps } from '../Popover'
import { Popover } from '../Popover'

export type AutocompleteOption = {
  value: string
  label: string
}

export interface AutocompleteProps extends Omit<PopoverProps, 'children' | 'value' | 'onChange' | 'content'> {
  value?: AutocompleteOption
  onChange: (value: AutocompleteOption) => void
  options: AutocompleteOption[]
  closeOnSelect?: boolean
  children?: React.ReactNode
}
export function Autocomplete({ value, onChange, options, closeOnSelect = true, children, ...rest }: AutocompleteProps) {
  return (
    <Popover
      hasCloseButton={false}
      className={cn('p-0', rest.className)}
      {...rest}
      content={
        <Command className="bg-secondary-50">
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map(option => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={currentValue => {
                  onChange(options.find(framework => framework.value === currentValue)!)
                  if (closeOnSelect) {
                    rest.onOpenChange?.(false)
                  }
                }}
              >
                {option.label}
                <TbCheck
                  className={cn('ml-auto h-4 w-4', value?.value === option.value ? 'opacity-100' : 'opacity-0')}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      }
    >
      {children ?? (
        <Button variant="outline" role="combobox" aria-expanded={rest.open} className="w-[200px] justify-between">
          {value ? options.find(framework => framework.value === value.value)?.label : 'Select...'}
          <TbSortAscending className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      )}
    </Popover>
  )
}
