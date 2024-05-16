'use client'

import * as React from 'react'

import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import { TbCheck, TbChevronDown } from 'react-icons/tb'
import { cn, mergeDeep } from '../../helpers'
import { Command } from '../Command'
import { useBoolean } from '../../hooks'
import { CommandGroup } from '../Command/Command'
import { Tooltip } from '../Tooltip'
import { getTheme } from '../../theme-store'
import type { AutocompleteTheme } from './theme'
import type { DeepPartial } from '../../types'

// value + label compulsory, any other prop allowed but won't be used
export interface AutocompleteOption {
  value: string
  label: string
  [key: string]: unknown
}

export interface AutocompleteProps extends Omit<ButtonProps, 'onChange' | 'value'> {
  value?: AutocompleteOption
  onChange?: (value: AutocompleteOption | undefined) => void
  placeholder?: string
  noFoundText?: React.ReactNode
  options: AutocompleteOption[]
  trigger?: React.ReactNode
  popupClassName?: string
  className?: string
  closeOnSelect?: boolean
  theme?: DeepPartial<AutocompleteTheme>
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onChange,
  value: externalValue,
  placeholder,
  noFoundText = 'Nothing found...',
  options = [],
  trigger = null,
  popupClassName,
  className,
  closeOnSelect = true,
  theme: customTheme = {},

  ...props
}: AutocompleteProps) => {
  const { value: open, setFalse, setValue } = useBoolean(false)
  const [value, setState] = React.useState<AutocompleteOption | undefined>(externalValue)

  const handleSend = (newValue: AutocompleteProps['value']) => {
    setState(newValue)
    onChange?.(newValue)
  }

  React.useEffect(() => {
    setState(externalValue)
  }, [externalValue])

  const handleOnChange = (currentValue: string) => {
    const obj = options.find(x => x.value === currentValue) // find the object by value
    handleSend(obj === value ? undefined : obj) // if the same value is selected, set to undefined
    setFalse()
  }
  const popupRef = React.useRef<HTMLDivElement>(null)

  // focus the popup input when the popup is opened
  React.useEffect(() => {
    if (open) {
      popupRef.current?.querySelector('input')?.focus()
    }
  }, [open])
  const theme = mergeDeep(getTheme().autocomplete, customTheme)

  return (
    <Tooltip
      open={open}
      onOpenChange={state => {
        closeOnSelect && setValue(state)
      }}
      className="p-0"
      content={
        <Command className={(theme.command, popupClassName)} ref={popupRef}>
          <Command.Input placeholder={placeholder} className={theme.command.input} />
          <Command.List>
            <Command.Empty>{noFoundText}</Command.Empty>

            <CommandGroup>
              {options.map(o => (
                <Command.Item key={o.value} value={o.value} onSelect={handleOnChange} className={theme.command.item}>
                  {o.label}
                  <TbCheck
                    className={cn(theme.command.icon.base, theme.command.icon.selected[o === value ? 'on' : 'off'])}
                  />
                </Command.Item>
              ))}
            </CommandGroup>
          </Command.List>
        </Command>
      }
    >
      {trigger ?? (
        <Button
          type="button"
          {...props}
          value={value?.value ?? ''}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          variant={'outline'}
          role="combobox"
          aria-expanded={open}
          className={cn(theme.button.base, className)}
        >
          {value ? value.label : placeholder ?? 'Select'}
          <TbChevronDown className={cn(theme.button.chevron.base, open && theme.button.chevron.opened)} />{' '}
        </Button>
      )}
    </Tooltip>
  )
}
