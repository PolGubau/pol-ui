import type { Meta, StoryObj } from "@storybook/react";
import WeeklyTracker from "./WeeklyTracker";

const meta = {
	title: "Trackers/WeeklyTracker",
	component: WeeklyTracker,
	tags: ["autodocs"],
} satisfies Meta<typeof WeeklyTracker>;

export default meta;
type Story = StoryObj<typeof meta>;
const mockData = [
	{
		date: "2023-09-18",
		value: 1,
	},
	{
		date: "2023-09-19",
		value: 19,
	},
	{
		date: "2023-09-20",
		value: 29,
	},
	{
		date: "2023-09-21",
		value: 0,
	},
	{
		date: "2023-09-22",
		value: 13,
	},
	{
		date: "2023-09-23",
		value: 4,
	},
	{
		date: "2023-09-24",
		value: 70,
	},
];
export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Tracker Item is the minimal component to display a tracker. It is used in the Tracker components.",
			},
		},
	},
	args: { data: mockData, onClick: (date: string) => alert("Clicked " + date) },
};
