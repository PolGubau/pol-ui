'use client'

import * as React from 'react'

import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import { TbCheck, TbChevronDown } from 'react-icons/tb'
import { Popover } from '../Popover'
import { cn } from '../../helpers'
import { Command } from '../Command'
import { useBoolean } from '../../hooks'
import { CommandGroup } from '../Command/Command'

// value + label compulsory, any other prop allowed but won't be used
export interface AutocompleteOption {
  value: string
  label: string
  [key: string]: unknown
}

export interface AutocompleteProps extends React.PropsWithChildren, Omit<ButtonProps, 'onChange'> {
  onChange?: (value: string) => void
  placeholder?: string
  noFoundText?: React.ReactNode
  options: AutocompleteOption[]
  trigger?: React.ReactNode
  popupClassName?: string
  className?: string
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onChange,
  placeholder,
  noFoundText = 'Nothing found...',
  options = [],
  trigger,
  popupClassName,
  className,
  ...props
}: AutocompleteProps) => {
  const { value: open, toggle: setOpen, setFalse } = useBoolean(false)
  const [value, setValue] = React.useState('')

  const handleOnChange = (currentValue: string) => {
    setValue(currentValue === value ? '' : currentValue)
    setFalse()
    onChange?.(currentValue)
  }

  return (
    <Popover
      hasCloseButton={false}
      open={open}
      className="p-0"
      onOpenChange={setOpen}
      trigger={
        trigger ?? (
          <Button
            {...props}
            outline
            role="combobox"
            aria-expanded={open}
            className={cn('flex justify-between min-w-[200px]', className)}
            innerClassname="flex justify-between "
          >
            {value ? options.find(o => o.value === value)?.label : placeholder ?? 'Select'}
            <TbChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        )
      }
    >
      <Command className={cn('bg-secondary-50', popupClassName)}>
        <Command.Input placeholder={placeholder} className="h-10" />
        <Command.List>
          <Command.Empty>{noFoundText}</Command.Empty>

          <CommandGroup>
            {options.map(o => (
              <Command.Item
                key={o.value}
                value={o.value}
                onSelect={handleOnChange}
                className="
              aria-selected:bg-primary/30"
              >
                {o.label}
                <TbCheck className={cn('ml-auto h-4 w-4', value === o.value ? 'opacity-100' : 'opacity-0')} />
              </Command.Item>
            ))}
          </CommandGroup>
        </Command.List>
      </Command>
    </Popover>
  )
}
