import type { Meta, StoryFn } from "@storybook/react";

import { BubbleHeading, type BubbleHeadingProps } from "./BubbleHeading";

export default {
  title: "Components/BubbleHeading",
  component: BubbleHeading,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 text-center w-full   justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<BubbleHeadingProps> = (args) => <BubbleHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Pol-ui, powering web development",
};

export const Opposite = Template.bind({});
Opposite.args = {
  children: "Pol-ui, powering web development",
  opposite: true,
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  children: "Pol-ui, powering web development",
  step: 200,
};
export const CustomDuration = Template.bind({});
CustomDuration.args = {
  children: "Pol-ui, powering web development",
  transitionDuration: 0.7,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  children: "Pol-ui, powering web development",
  className: "text-8xl text-error-500 italic",
};
