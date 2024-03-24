import type { Meta } from '@storybook/react'

import { Autocomplete } from './autocomplete'
import { Toaster, toast } from '../Toaster'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { IconButton } from '../IconButton'
import { TbDotsVertical } from 'react-icons/tb'

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
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
  return (
    <Autocomplete
      options={frameworks}
      onChange={v => {
        toast({ title: `Selected: ${v?.label}` })
      }}
    />
  )
}
export const InForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <Input label="Name" placeholder="Pol Gubau" />
      <Input label="Email" placeholder="hello@polgubau.com" />
      <Autocomplete
        className="w-full"
        options={frameworks}
        onChange={v => {
          console.log(v)
          toast({ title: `Selected: ${v?.label}` })
        }}
      />
      <Checkbox label="Subscribe to newsletter" />
    </form>
  )
}
export const RemainOpen = () => {
  return (
    <Autocomplete
      options={frameworks}
      closeOnSelect={false}
      onChange={v => {
        toast({ title: `Selected: ${v?.label}` })
      }}
    />
  )
}
export const CustomTrigger = () => {
  return (
    <Autocomplete
      trigger={
        <IconButton>
          <TbDotsVertical />
        </IconButton>
      }
      options={frameworks}
      onChange={v => {
        toast({ title: `Selected: ${v?.label}` })
      }}
    />
  )
}
