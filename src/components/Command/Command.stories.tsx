import type { Meta } from '@storybook/react'

import { Command, CommandDialog, CommandInput, CommandList } from './Command'
import { useBoolean } from '../../hooks'
import { CommandLoading } from './CommandLoading'

export default {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const CommandMenu = () => {
  const { value, toggle } = useBoolean(false)
  const loading = false

  return (
    <CommandDialog open={value} onClose={toggle}>
      <CommandInput />

      <CommandList>{loading && <CommandLoading>Hang on…</CommandLoading>}</CommandList>
    </CommandDialog>
  )
}
