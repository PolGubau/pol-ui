import type { Meta, StoryFn } from "@storybook/react";

import { SizeIndiator, type SizeIndiatorProps } from "./SizeIndiator";

export default {
  title: "Components/SizeIndiator",
  component: SizeIndiator,
  decorators: [
    (Story): React.ReactNode => (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col bg-secondary-50 min-h-20 p-4 gap-4 relative">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<SizeIndiatorProps> = (args) => <SizeIndiator {...args} />;

export const Default = Template.bind({});
Default.args = {};
