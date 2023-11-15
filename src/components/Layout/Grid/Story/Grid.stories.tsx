import type { Meta, StoryObj } from "@storybook/react";
import Grid from "../Grid";
import { DifferentSpanGrid, someCells, someCellsRandomized } from "./GridData";

const meta = {
	title: "Layout/Grid",
	component: Grid,
	tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: someCells,
		cols: 3,
		rows: 1,
		gap: "0px",
	},
};
export const WithGap: Story = {
	args: {
		...Default.args,
		gap: "1rem",
	},
};
export const DifferentGaps: Story = {
	args: {
		...Default.args,
		gap: ["1rem", "3rem"],
	},
};
export const CustomCellSize: Story = {
	render: (args) => <DifferentSpanGrid args={args} />,
	args: {
		...Default.args,
		cols: 2,
		rows: 2,
	},
};
export const CustomAlign: Story = {
	args: {
		...Default.args,
		alignItems: "end",
		children: someCellsRandomized,
	},
};
