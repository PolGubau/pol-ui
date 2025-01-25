import type { Meta, StoryFn } from "@storybook/react";
import type { DynamicHeadingProps } from "./DynamicHeading";
import DynamicHeading from "./DynamicHeading";

export default {
  title: "Components/DynamicHeading",
  component: DynamicHeading,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<DynamicHeadingProps> = (args) => <DynamicHeading {...args}> Dynamic Heading </DynamicHeading>;

export const Default = Template.bind({});
Default.args = {};
export const H4 = Template.bind({});
H4.storyName = "As H4";
H4.args = {
  as: "h4",
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  className: "text-success text-2xl font-bold",
};
