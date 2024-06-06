import type { Meta, StoryFn } from '@storybook/react'
import type { CardProps } from './Card'
import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [(Story): JSX.Element => <div className="h-1/2 w-1/2">{Story()}</div>],
} as Meta

const Template: StoryFn<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white">Check this Card title!</h5>
    <p className="font-normal text-secondary-700 dark:text-secondary-400">
      This components is quite flexible and can be used in many ways. Customize it to your needs!
    </p>
  </Card>
)

export const Default = Template.bind({})
Default.args = {}

export const Horizontal = Template.bind({})
Horizontal.args = {
  horizontal: true,
}
