import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import type { PasswordInputProps } from "./PasswordInput";
import { PasswordInput } from "./PasswordInput";
type Story = StoryObj<typeof PasswordInput>;

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Inputs/PasswordInput",
  component: PasswordInput,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col w-full">
        <div className="max-w-md w-full">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

const Template: StoryFn<PasswordInputProps> = (args) => <PasswordInput {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = "Password input";
Default.args = {
  label: "Password",
};
