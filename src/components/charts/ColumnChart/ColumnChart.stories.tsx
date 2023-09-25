import type { Meta, StoryObj } from "@storybook/react";
import ColumnChart from "./ColumnChart";
import { Colors } from "../../../types";

const meta = {
	title: "Charts/ColumnChart",
	component: ColumnChart,
	tags: ["autodocs"],
} satisfies Meta<typeof ColumnChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { title: "My last data" },
};

export const CustomBgColor: Story = {
	args: { title: "My last data", backgroundColor: "#f00" },
};
export const CustomBgColorAndOpacity: Story = {
	args: { title: "My last data", backgroundColor: "#f00", backgroundOpacity: 50 },
};
export const CustomBgVar: Story = {
	args: {
		title: "My last data",
		backgroundColor: Colors.accent,
	},
};
