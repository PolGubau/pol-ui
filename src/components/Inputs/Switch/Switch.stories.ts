import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../Switch";

const meta = {
	title: "Inputs/Switch",
	component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Switch",
		checked: true,
	},
};
export const Small: Story = {
	args: {
		label: "Switch",
		size: "small",
		checked: true,
	},
};
export const Large: Story = {
	args: {
		label: "Switch",
		size: "large",
		checked: true,
	},
};
export const Disabled: Story = {
	args: {
		label: "Switch",
		checked: true,
		disabled: true,
	},
};
