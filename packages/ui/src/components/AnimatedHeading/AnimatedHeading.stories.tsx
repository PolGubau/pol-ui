import type { Meta, StoryFn } from "@storybook/react";
import type { AnimatedHeadingProps } from "./AnimatedHeading";
import { AnimatedHeading } from "./AnimatedHeading";
import { AnimatedHeadingAnimationsEnum } from "./types";

export default {
  title: "Components/AnimatedText",
  component: AnimatedHeading,
  decorators: [
    (Story) => (
      <div className="flex p-6 text-center w-full justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<AnimatedHeadingProps> = (args) => <AnimatedHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Pol-ui, powering web development",
};
export const FadeLeft = Template.bind({});
FadeLeft.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["fade-left"],
};
export const FadeRight = Template.bind({});
FadeRight.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["fade-right"],
};
export const FadeBottom = Template.bind({});
FadeBottom.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["fade-up"],
};
export const Blur = Template.bind({});
Blur.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum.blur,
};
export const PullUp = Template.bind({});
PullUp.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["pull-up"],
};
export const StaggeredFadeIn = Template.bind({});
StaggeredFadeIn.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["staggered-fade-in"],
};
export const Gradual = Template.bind({});
Gradual.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum.gradual,
};
export const LetterPullUp = Template.bind({});
LetterPullUp.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["letter-pull-up"],
};
