'use client'

import * as React from 'react'

import { Button } from '../Button'
import { TbCheck, TbChevronsDown } from 'react-icons/tb'
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

export interface AutocompleteProps extends React.PropsWithChildren {
  onChange?: (value: string) => void
  placeholder?: string
  noFoundText?: React.ReactNode
  options: AutocompleteOption[]
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onChange,
  placeholder,
  noFoundText = 'Nothing found...',
  options = [],
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
        <Button outline role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? options.find(o => o.value === value)?.label : 'Select framework...'}
          <TbChevronsDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      }
    >
      <Command className="bg-secondary-50">
        <Command.Input placeholder={placeholder} className="h-9" />
        <Command.List>
          <Command.Empty>{noFoundText}</Command.Empty>

          <CommandGroup>
            {options.map(o => (
              <Command.Item key={o.value} value={o.value} onSelect={handleOnChange}>
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
