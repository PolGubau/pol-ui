import type { Meta, StoryFn } from '@storybook/react'
import { Divider } from './Divider'

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: StoryFn = () => (
  <>
    Texts 1
    <Divider />
    Texts 2
  </>
)
