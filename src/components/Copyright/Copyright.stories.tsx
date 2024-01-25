/* eslint-disable react/prop-types */
import type { Meta, StoryFn } from '@storybook/react'
import { Copyright } from './Copyright'

export default {
  title: 'Components/Texts/Copyright',
  component: Copyright,
  tags: ['Footer', 'autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col py-20 min-h-[400px] h-full bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn = ({ children }) => <Copyright>{children}</Copyright>
export const DefaultFooter = Template.bind({})
DefaultFooter.storyName = 'Default'
