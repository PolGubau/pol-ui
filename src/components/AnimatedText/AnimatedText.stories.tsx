import type { Meta, StoryFn } from '@storybook/react'
import type { AnimatedTextProps } from './AnimatedText'
import { AnimatedText } from './AnimatedText'

export default {
  title: 'Components/AnimatedText',
  component: AnimatedText,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 text-center w-full   justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<AnimatedTextProps> = args => <AnimatedText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Pol-ui, powering web development',
}
export const FadeLeft = Template.bind({})
FadeLeft.args = {
  ...Default.args,
  animation: 'fade-left',
}
export const FadeRight = Template.bind({})
FadeRight.args = {
  ...Default.args,
  animation: 'fade-right',
}
export const FadeBottom = Template.bind({})
FadeBottom.args = {
  ...Default.args,
  animation: 'fade-up',
}
export const Blur = Template.bind({})
Blur.args = {
  ...Default.args,
  animation: 'blur',
}
