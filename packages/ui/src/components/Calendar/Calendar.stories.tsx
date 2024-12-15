import type { Meta, StoryFn } from "@storybook/react";

import { Calendar, type CalendarProps } from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<CalendarProps> = (args: CalendarProps) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
