import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
	title: "Inputs/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: false,
	},
};
export const WithLabel: Story = {
	args: {
		value: false,
		label: "Label",
	},
};
export const CheckedState: Story = {
	args: {
		value: true,
		label: "Look, this checkbox is checked",
	},
};
export const Disabled: Story = {
	args: {
		value: false,
		label: "Disabled Checkbox",
		disabled: true,
	},
};
