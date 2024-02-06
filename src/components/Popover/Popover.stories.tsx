import type { Meta } from '@storybook/react'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import React from 'react'
import { Button } from '../Button'
import { Avatar } from '../Avatar'

export default {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta

export const Default = (): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>Content of the popover</PopoverContent>
    </Popover>
  )
}
export const RealExample = (): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center rounded-2xl">
        <Avatar size="lg" img={'./images/people/me.png'} />
        <h2 className="text-lg font-bold mt-2">Pol Gubau Amores</h2>
        <p className="text-sm text-secondary-500">Software Engineer at Pol-ui</p>

        <div className="mt-4 flex items-center">
          <Button color="secondary">View Profile</Button>
          <Button color="primary" className="ml-2">
            Follow
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
