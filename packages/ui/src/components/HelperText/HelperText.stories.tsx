import type { Meta, StoryFn } from "@storybook/react";

import { HelperText, type HelperTextProps } from "./HelperText";

export default {
  title: "Components/Texts/HelperText",
  component: HelperText,
  decorators: [
    (Story) => (
      <div className="flex pflex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<HelperTextProps> = (args) => <HelperText {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.storyName = "HelperText";
DefaultLabel.args = {
  children: "HelperText",
};
