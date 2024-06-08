import type { Meta, StoryFn } from '@storybook/react'
import { Skeleton, SkeletonProps } from './Skeleton'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col bg-secondary-50 min-h-10 p-4 gap-4">
          In Light theme
          <Story />
        </div>
        <div className="flex flex-col dark bg-secondary-900 min-h-10 p-4 gap-4 text-white">
          In Dark theme
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<SkeletonProps> = args => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {}
