'use client'

import * as React from 'react'

import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import { TbCheck, TbChevronDown } from 'react-icons/tb'
import { cn } from '../../helpers'
import { Command } from '../Command'
import { useBoolean } from '../../hooks'
import { CommandGroup } from '../Command/Command'
import { Tooltip } from '../Tooltip'

// value + label compulsory, any other prop allowed but won't be used
export interface AutocompleteOption {
  value: string
  label: string
  [key: string]: unknown
}

export interface AutocompleteProps extends React.PropsWithChildren, Omit<ButtonProps, 'onChange'> {
  onChange?: (value: AutocompleteOption | undefined) => void
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
  // trigger,
  popupClassName,
  className,
  ...props
}: AutocompleteProps) => {
  const { value: open, setFalse } = useBoolean(false)
  const [value, setValue] = React.useState<AutocompleteOption | undefined>(undefined)

  const handleOnChange = (currentValue: string) => {
    const obj = options.find(x => x.value === currentValue) // find the object by value
    setValue(obj === value ? undefined : obj) // if the same value is selected, set to undefined
    setFalse() // close the popover
    onChange?.(obj) // call the parent onChange
  }

  return (
    <Tooltip
      // open={open}
      // handleClose={setFalse}
      trigger="click"
      // hasCloseButton={false}
      // open={open}
      className="p-0"
      // onOpenChange={setOpen}
      // trigger={
      //   trigger ?? (
      //     <Button
      //       {...props}
      //       outline
      //       role="combobox"
      //       aria-expanded={open}
      //       className={cn('flex justify-between min-w-[200px]', className)}
      //       innerClassname="flex justify-between "
      //     >
      //       {value ? value.label : placeholder ?? 'Select'}
      //       <TbChevronDown className="h-4 w-4 shrink-0 opacity-50" />
      //     </Button>
      //   )
      // }
      content={
        <Command className={cn('bg-secondary-50 min-w-[200px]', popupClassName)}>
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
                  <TbCheck className={cn('ml-auto h-4 w-4', value === o ? 'opacity-100' : 'opacity-0')} />
                </Command.Item>
              ))}
            </CommandGroup>
          </Command.List>
        </Command>
      }
    >
      <Button
        {...props}
        outline
        role="combobox"
        aria-expanded={open}
        className={cn('flex justify-between min-w-[200px]', className)}
        innerClassname="flex justify-between "
      >
        {value ? value.label : placeholder ?? 'Select'}
        <TbChevronDown className="h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </Tooltip>
  )
}
