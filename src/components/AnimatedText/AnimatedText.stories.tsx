import type { Meta, StoryFn } from '@storybook/react'
import type { AnimatedTextProps } from './AnimatedText'
import { AnimatedText, AnimatedTextAnimationsEnum } from './AnimatedText'

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
export const PullUp = Template.bind({})
PullUp.args = {
  ...Default.args,
  animation: 'pull-up',
}
export const StaggeredFadeIn = Template.bind({})
StaggeredFadeIn.args = {
  ...Default.args,
  animation: 'staggered-fade-in',
}
export const Gradual = Template.bind({})
Gradual.args = {
  ...Default.args,
  animation: 'gradual',
}
export const LetterPullUp = Template.bind({})
LetterPullUp.args = {
  ...Default.args,
  animation: AnimatedTextAnimationsEnum['letter-pull-up'],
}
