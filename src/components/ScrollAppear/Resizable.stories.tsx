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
  return (
    <div className="bg-red-200 h-[2000px] grid place-items-center w-full">
      <ScrollAppear />
    </div>
  )
}
