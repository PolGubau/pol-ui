import type { Meta, StoryFn } from '@storybook/react'
import type { RatingProps } from './Rating'
import { Rating } from './Rating'
import { theme } from '../../theme'
import { RatingTheme } from './theme'
import { TbAdjustmentsBolt, TbAlien, TbCactus, TbLayout, TbPhoneCheck, TbPhotoFilled } from 'react-icons/tb'

export default {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<RatingProps> = args => <Rating {...args} />

const ratingTheme: RatingTheme = theme.rating

export const DefaultRating = Template.bind({})
DefaultRating.storyName = 'Default'

export const CustomStarAmount = Template.bind({})
CustomStarAmount.storyName = 'Custom stars amount'
CustomStarAmount.args = {
  stars: 10,
}

export const CustomFilledAmount = (): JSX.Element => (
  <div className="flex flex-col gap-4 w-full">
    <Rating stars={2} filled={1} />
    <Rating stars={2} filled={3} />
    <Rating stars={10} filled={3} />
    <Rating stars={10} filled={5} />
    <Rating stars={10} filled={10} />
  </div>
)
export const CustomSize = (): JSX.Element => (
  <div className="flex flex-col gap-4 w-full">
    {Object.keys(ratingTheme.star.size).map(size => (
      <Rating key={size} size={size} />
    ))}
  </div>
)
export const CustomIcon = (): JSX.Element => (
  <div className="flex flex-col gap-4 w-full">
    <Rating starIcon={TbCactus} filled={1} />
    <Rating starIcon={TbAdjustmentsBolt} filled={2} />
    <Rating starIcon={TbPhotoFilled} filled={3} />
    <Rating starIcon={TbLayout} filled={4} />
    <Rating starIcon={TbPhoneCheck} filled={5} />
  </div>
)

export const Advanced = (): JSX.Element => (
  <div className="flex flex-col gap-4 w-full">
    <div className="flex gap-1 items-center">
      <Rating />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </div>
    <p className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
    <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
    <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
    <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
    <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
    <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
  </div>
)
