import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
	title: "Data Display/Image",
	component: Image,
	tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: "https://www.thispersondoesnotexist.com",
		alt: "John Doe",
	},
};
export const WithWidth: Story = {
	args: {
		...Default.args,
		width: "200px",
	},
};
export const Rounded: Story = {
	args: {
		...Default.args,
		rounded: "rounded",
	},
};
export const Circular: Story = {
	args: {
		...Default.args,
		rounded: "circular",
	},
};
