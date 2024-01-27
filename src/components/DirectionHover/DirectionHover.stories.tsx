import type { Meta } from '@storybook/react'
import { DirectionHover } from './DirectionHover'

export default {
  title: 'Components/DirectionHover',
  component: DirectionHover,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col min-h-[400px] justify-center items-center bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = (): JSX.Element => {
  const imageUrl = 'https://source.unsplash.com/random/499x499/'
  return (
    <DirectionHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionHover>
  )
}
export const InGroup = (): JSX.Element => {
  const imageUrl = 'https://source.unsplash.com/random/500x500/'
  const imageUrl2 = 'https://source.unsplash.com/random/501x501/'
  const imageUrl3 = 'https://source.unsplash.com/random/502x502/'
  return (
    <div className="flex gap-2 items-center">
      <DirectionHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionHover>
      <DirectionHover imageUrl={imageUrl2}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionHover>
      <DirectionHover imageUrl={imageUrl3}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionHover>
    </div>
  )
}
