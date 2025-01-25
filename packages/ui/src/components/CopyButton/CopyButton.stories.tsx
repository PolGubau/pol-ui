import type { Meta, StoryFn } from "@storybook/react";
import { Toaster } from "../Toaster";
import { CopyButton, type CopyButtonProps } from "./CopyButton";

export default {
  title: "Components/CopyButton",
  component: CopyButton,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<CopyButtonProps> = (args) => <CopyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  toCopy: "This is the text to copy",
};
