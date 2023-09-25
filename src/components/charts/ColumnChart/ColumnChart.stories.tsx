import type { Meta, StoryObj } from "@storybook/react";
import ColumnChart from "./ColumnChart";

const meta = {
	title: "Charts/ColumnChart",
	component: ColumnChart,
	tags: ["autodocs"],
} satisfies Meta<typeof ColumnChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { value: 50 },
};
