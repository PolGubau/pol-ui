import type { Meta, StoryFn } from '@storybook/react'
import { NoData, NoDataProps } from './NoData'

export default {
  title: 'Components/NoData',
  tags: ['autodocs'],
  component: NoData,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<NoDataProps> = args => <NoData {...args} />

export const Default = Template.bind({})
Default.args = {
  description: 'No data found',
  size: 'md',
}
export const Extrasmall = Template.bind({})
Extrasmall.args = {
  description: 'No data found',
  size: 'xs',
}
export const Small = Template.bind({})
Small.args = {
  description: 'No data found',
  size: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  description: 'No data found',
  size: 'md',
}
export const Large = Template.bind({})
Large.args = {
  description: 'No data found',
  size: 'lg',
}
export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  description: 'No data found',
  size: 'xl',
}
