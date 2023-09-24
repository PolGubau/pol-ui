import type { Meta, StoryObj } from "@storybook/react";
import Week from "./Week";

const meta = {
	title: "Calendars/Week",
	component: Week,
	tags: ["autodocs"],
} satisfies Meta<typeof Week>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The week component shows a week of days. It is used usually in home pages or in the calendar page, you can customize the number of days before and after the current day, and you can also customize the color of the current day. If you want to attach some data to the component, you can use the Weektracker component.",
			},
		},
	},
	args: {},
};

export const WithOnClick: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"You can provide a function to the onClick prop, and it will be called when the user clicks on a day.",
			},
		},
	},
	args: {
		onClick: (date) => {
			alert("clicked " + date);
		},
	},
};
