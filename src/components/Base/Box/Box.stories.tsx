import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta = {
	title: "Base/Box",
	component: Box,
	tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"This is a box, a almost empty component used as container for other components. It's a flex container with a default min-height and min-width of 30px. Made for control it using the classname and tailwind so it can be totally customizable.",
			},
		},
	},

	args: {
		children: "Box",
		className: "bg-secondary/20",
	},
};
