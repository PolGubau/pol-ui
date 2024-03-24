import type { Meta } from '@storybook/react'

import { MultipleAutocomplete } from './multipleAutocomplete'
import { Toaster, toast } from '../Toaster'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { IconButton } from '../IconButton'
import { TbDotsVertical } from 'react-icons/tb'
import React from 'react'
import type { AutocompleteOption } from '../Autocomplete'

export default {
  title: 'Components/MultipleAutocomplete',
  component: MultipleAutocomplete,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col h-full justify-center items-center min-h-[600px] bg-secondary-50">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

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
export const Default = () => {
  const [value, setValue] = React.useState<AutocompleteOption[]>([])

  return (
    <MultipleAutocomplete
      options={frameworks}
      value={value}
      onChange={v => {
        setValue(v)
        toast({ title: `Selected: ${v?.map(x => x.label).join(', ')}` })
      }}
    />
  )
}
export const InForm = () => {
  const [value, setValue] = React.useState<AutocompleteOption[]>([])

  return (
    <form action="" className="flex flex-col gap-4">
      <Input label="Name" placeholder="Pol Gubau" />
      <Input label="Email" placeholder="hello@polgubau.com" />
      <MultipleAutocomplete
        value={value}
        className="w-full"
        options={frameworks}
        onChange={v => {
          setValue(v)
          toast({ title: `Selected: ${v?.map(x => x.label).join(', ')}` })
        }}
      />
      <Checkbox label="Subscribe to newsletter" />
    </form>
  )
}
export const RemainOpen = () => {
  const [value, setValue] = React.useState<AutocompleteOption[]>([])

  return (
    <MultipleAutocomplete
      value={value}
      options={frameworks}
      closeOnSelect={false}
      onChange={v => {
        setValue(v)
        toast({ title: `Selected: ${v?.map(x => x.label).join(', ')}` })
      }}
    />
  )
}
export const CustomTrigger = () => {
  const [value, setValue] = React.useState<AutocompleteOption[]>([])

  return (
    <MultipleAutocomplete
      value={value}
      trigger={
        <IconButton>
          <TbDotsVertical />
        </IconButton>
      }
      options={frameworks}
      onChange={v => {
        setValue(v)

        toast({ title: `Selected: ${v?.map(x => x.label).join(', ')}` })
      }}
    />
  )
}

export const Uncontrolled = () => {
  return <MultipleAutocomplete options={frameworks} />
}
