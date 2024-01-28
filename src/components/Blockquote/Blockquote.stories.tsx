import type { Meta, StoryFn } from '@storybook/react'
import type { BlockquoteProps } from './Blockquote'
import { Blockquote } from './Blockquote'

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  min-h-[400px]  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<BlockquoteProps> = args => <Blockquote {...args} />
export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <p>
        &quot;Pol-ui is just awesome. It contains tons of predesigned components and pages starting from login screen to
        complex dashboard. Perfect choice for your next SaaS application.&quot;
      </p>
    </>
  ),
}
