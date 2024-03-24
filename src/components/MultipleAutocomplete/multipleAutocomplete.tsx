'use client'

import * as React from 'react'

import { Button } from '../Button'
import { TbCheck, TbChevronDown } from 'react-icons/tb'
import { cn } from '../../helpers'
import { Command } from '../Command'
import { useBoolean } from '../../hooks'
import { CommandGroup } from '../Command/Command'
import { Tooltip } from '../Tooltip'
import type { AutocompleteOption, AutocompleteProps } from '../Autocomplete'

export interface MultipleAutocompleteProps extends Omit<AutocompleteProps, 'onChange' | 'value'> {
  value?: AutocompleteOption[]
  onChange?: (value: AutocompleteOption[]) => void
}

export const MultipleAutocomplete: React.FC<MultipleAutocompleteProps> = ({
  onChange,
  value: externalValue = [],
  placeholder,
  noFoundText = 'Nothing found...',
  options = [],
  trigger,
  popupClassName,
  className,
  closeOnSelect = true,
  ...props
}: MultipleAutocompleteProps) => {
  const { value: open, setFalse, setValue } = useBoolean(false)
  const [value, setState] = React.useState<AutocompleteOption[]>(externalValue)

  const handleSend = (newValue: AutocompleteOption[]) => {
    setState(newValue)
    onChange?.(newValue)
  }

  React.useEffect(() => {
    setState(externalValue)
  }, [externalValue])

  const handleOnChange = (currentValue: string) => {
    const obj = options.find(x => x.value === currentValue) // find the object by value
    if (!obj) return console.error('Object not found' + currentValue)

    const alreadySelected = value.find(x => x.value === currentValue)

    if (alreadySelected) {
      handleSend(value.filter(x => x.value !== currentValue))
    } else {
      const newArray: AutocompleteOption[] = [...value, obj]
      handleSend(newArray)
    }

    setFalse()
  }
  const popupRef = React.useRef<HTMLDivElement>(null)

  // focus the popup input when the popup is opened
  React.useEffect(() => {
    if (open) {
      popupRef.current?.querySelector('input')?.focus()
    }
  }, [open])

  return (
    <Tooltip
      open={open}
      setOpen={state => {
        closeOnSelect && setValue(state)
      }}
      trigger="click"
      className="p-0"
      content={
        <Command className={cn('bg-secondary-50 min-w-[200px]', popupClassName)} ref={popupRef}>
          <Command.Input placeholder={placeholder} className="h-10" />
          <Command.List>
            <Command.Empty>{noFoundText}</Command.Empty>

            <CommandGroup>
              {options.map(o => {
                const isSelected = value.find(x => x.value === o.value)
                return (
                  <Command.Item
                    key={o.value}
                    value={o.value}
                    onSelect={handleOnChange}
                    className="
            aria-selected:bg-primary/30"
                  >
                    {o.label}
                    <TbCheck className={cn('ml-auto h-4 w-4', isSelected ? 'opacity-100' : 'opacity-0')} />
                  </Command.Item>
                )
              })}
            </CommandGroup>
          </Command.List>
        </Command>
      }
    >
      {trigger ?? (
        <Button
          type="button"
          {...props}
          value={value?.map(x => x.value).join(', ') ?? ''}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          outline
          role="combobox"
          aria-expanded={open}
          className={cn('flex justify-between min-w-[200px]', className)}
          innerClassname="flex justify-between "
        >
          {value?.length > 0 ? value.map(x => x.label).join(', ') : placeholder ?? 'Select'}
          <TbChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      )}
    </Tooltip>
  )
}
