import type { Meta } from '@storybook/react'
import ScrollAppear from './ScrollAppear'

export default {
  title: 'Components/ScrollAppear',
  component: ScrollAppear,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => {
  return <ScrollAppear />
}
