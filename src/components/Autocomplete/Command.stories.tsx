import type { Meta } from '@storybook/react'

import { Autocomplete } from './autocomplete'
import { Toaster, toast } from '../Toaster'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center min-h-[400px] bg-secondary-50">
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
        toast({ title: `Selected: ${v}` })
      }}
    />
  )
}
export const InForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <Input label="Name" placeholder="Amancio Ortega" />
      <Input label="Email" placeholder="amancio@ortega.com" />
      <Autocomplete
        className="w-full"
        options={frameworks}
        onChange={v => {
          toast({ title: `Selected: ${v}` })
        }}
      />
      <Checkbox label="Subscribe to newsletter" />
    </form>
  )
}
