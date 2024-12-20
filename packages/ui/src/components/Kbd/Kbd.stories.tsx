import type { Meta, StoryFn } from "@storybook/react";
import { MdKeyboardArrowDown, MdKeyboardCommandKey } from "react-icons/md";
import type { KbdProps } from "./Kbd";
import { Kbd } from "./Kbd";
export default {
  title: "Components/Kbd",
  component: Kbd,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<KbdProps> = (args) => <Kbd {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: <>Shift</>,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.storyName = "Only icon";
OnlyIcon.args = {
  icon: MdKeyboardArrowDown,
};

export const WithIcon = Template.bind({});
WithIcon.storyName = "With icon";
WithIcon.args = {
  icon: MdKeyboardCommandKey,
  children: <>command</>,
};
