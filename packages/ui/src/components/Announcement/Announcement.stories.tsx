import type { Meta } from '@storybook/react'
import { Announcement } from './Announcement'
import { TbArrowRight } from 'react-icons/tb'
export default {
  title: 'Components/Announcement',
  component: Announcement,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="grid md:grid-cols-2 justify-center items-center">
        <div className="flex p-6 flex-col justify-center items-center">
          <Story />
        </div>
        <div className="flex p-6 flex-col justify-center items-center dark bg-secondary-900">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => {
  return (
    <Announcement>
      This is an announcement <TbArrowRight />
    </Announcement>
  )
}
