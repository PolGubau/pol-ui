import type { Meta } from '@storybook/react'

import { Autocomplete } from './autocomplete'
import { Toaster, toast } from '../Toaster'

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center min-h-[400px] ">
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
