import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import type { CardProps } from './Card'
import { Card } from './Card'
import { toast } from '../Toaster'
import React from 'react'

type Story = StoryObj<typeof Card>

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [(Story): JSX.Element => <div className="h-1/2 w-1/2">{Story()}</div>],
}
export default meta

const Template: StoryFn<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <div className="flex flex-col gap-2">
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white">Check this Card!</h5>
      <p className="font-normal text-secondary-700 dark:text-secondary-400">
        This components is quite flexible and can be used in many ways. Customize it to your needs!
      </p>
    </div>
  </Card>
)

export const Default: Story = Template.bind({})
Default.args = {}

export const Clicable: Story = Template.bind({})
Clicable.args = {
  onClick: () => toast('Click'),
}
