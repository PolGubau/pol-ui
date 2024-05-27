import type { Meta } from '@storybook/react'
import ScrollAppear from './ScrollAppear'

export default {
  title: 'Components/ScrollAppear',
  component: ScrollAppear,
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
    <div className="w-full flex flex-col gap-[60vh] mb-96">
      scroll :)
      <ScrollAppear
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/4aa6b4a9-a08d-4fa1-8979-0c4cd1c3c397"
      />
    </div>
  )
}
