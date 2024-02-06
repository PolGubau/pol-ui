import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import type { ToasterProps } from './types'
import { Button } from '../Button'
import { Toaster } from './Toaster'
import { toast } from './state'

export default {
  title: 'Components/Toaster ',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: StoryFn<ToasterProps> = args => {
  const createToast = () => {
    toast('This is a sonner toast')
  }
  return (
    <div className="flex flex-col gap-3">
      <p>Click the button to show a toast</p>
      <Button onClick={createToast}>Show toaster</Button>
      <Toaster {...args} />
    </div>
  )
}
