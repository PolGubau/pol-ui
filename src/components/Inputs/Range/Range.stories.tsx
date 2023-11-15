import type { Meta, StoryObj } from "@storybook/react";
import Range from "./Range";

const meta = {
	title: "Inputs/Range",
	component: Range,
	tags: ["autodocs"],
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { value: 2.5 },
};
