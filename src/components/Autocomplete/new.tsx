'use client'

import * as React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover/new'
import { TbCheck, TbSortAscending } from 'react-icons/tb'
import { Command, CommandEmpty, CommandInput } from '../Command'
import { CommandGroup, CommandItem } from '../Command/Command'
import { cn } from '../../helpers'
import { Button } from '../Button/new'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? frameworks.find(framework => framework.value === value)?.label : 'Select framework...'}
          <TbSortAscending className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="bg-secondary-50">
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map(framework => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                {framework.label}
                <TbCheck className={cn('ml-auto h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
