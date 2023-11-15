import type { Meta, StoryObj } from "@storybook/react";
import ColumnChart from "./ColumnChart";
import { Colors } from "../../../types";

// generate mock data for a column graph
const mockData = [
	{
		date: "2023-09-18",
		value: 67,
	},
	{
		date: "2023-09-19",
		value: 26,
	},
	{
		date: "2023-09-20",
		value: 39,
	},
	{
		date: "2023-09-21",
		value: 0,
	},
	{
		date: "2023-09-22",
		value: 76,
	},
	{
		date: "2023-09-23",
		value: 100,
	},
	{
		date: "2023-09-24",
		value: 70,
	},
];

const meta = {
	title: "Charts/ColumnChart",
	component: ColumnChart,
	tags: ["autodocs"],
} satisfies Meta<typeof ColumnChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { title: "My last data", data: mockData },
};

export const CustomBgColor: Story = {
	args: {
		...Default.args,
		title: "Custom #640202 color",
		backgroundColor: "#640202",
		invertText: true,
	},
};

export const CustomBgVar: Story = {
	args: { ...Default.args, title: "Accent BG", backgroundColor: Colors.accent },
};
export const CustomBgVarAndOpacity: Story = {
	args: {
		...Default.args,
		title: "Accent and opacity",
		backgroundColor: Colors.accent,
		backgroundOpacity: 80,
	},
};
export const CustomRounded: Story = {
	args: {
		...Default.args,
		title: "Roundness",
		rounded: "none",
	},
};
export const CustomColumnColor: Story = {
	args: {
		...Default.args,
		title: "Custom column color",
		barBackgroundColor: Colors.primary,
		barInnerColor: Colors.primary,
	},
};
export const CustomColumnOpacity: Story = {
	args: {
		...Default.args,
		title: "Custom Opacity",
		barBackgroundColor: Colors.primary,
		barInnerColor: Colors.primary,
		barBackgroundOpacity: 50,
	},
};
export const AlwaysPointer: Story = {
	args: {
		...Default.args,
		title: "Custom Opacity",
		pointerTrigger: "always",
	},
};
