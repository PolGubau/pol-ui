import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../Switch";

const meta = {
	title: "Inputs/Switch",
	component: Switch,
	tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Switch",
		checked: true,
		size: "normal",
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
export const WithError: Story = {
	args: {
		label: "Switch",
		checked: true,
		error: "This is an error",
	},
};
