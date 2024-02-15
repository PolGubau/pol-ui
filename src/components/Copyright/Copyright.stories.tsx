import type { Meta, StoryFn } from '@storybook/react'
import { Copyright } from './Copyright'

export default {
  title: 'Components/Texts/Copyright',
  component: Copyright,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn = ({ ...args }) => <Copyright {...args} />
export const Default = Template.bind({})

export const WithValues = Template.bind({})
WithValues.args = {
  by: 'Pol Gubau Amores',
  href: 'https://polgubau.com',
  year: new Date().getFullYear(),
}
