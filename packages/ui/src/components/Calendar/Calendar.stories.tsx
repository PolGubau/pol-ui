import type { Meta, StoryFn } from "@storybook/react";

import { Calendar } from "./Calendar";

export default {
	title: "Components/Calendar",
	component: Calendar,
} as Meta;

const Template: StoryFn = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
