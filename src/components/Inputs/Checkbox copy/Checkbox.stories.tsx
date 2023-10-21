import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../Checkbox/Checkbox";

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
		onChange: undefined,
	},
};
export const WithLabel: Story = {
	args: {
		...Default.args,
		label: "Label",
	},
};
export const CheckedState: Story = {
	args: {
		...Default.args,
		value: true,
		label: "Look, this checkbox is checked",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,
		label: "Disabled Checkbox",
		disabled: true,
	},
};
export const CustomIcon: Story = {
	args: {
		...Default.args,
		value: true,

		checkIcon: "user",
		label: "Who would use this icon for a checkbox?",
	},
};
export const Square: Story = {
	args: {
		...Default.args,
		rounded: "none",
		label: "Square checkbox",
	},
};
export const Circle: Story = {
	args: {
		...Default.args,
		rounded: "full",
		label: "Circle checkbox",
	},
};
export const SmallCheckBox: Story = {
	args: {
		...Default.args,
		value: true,

		size: "sm",
		label: "Small but powerful",
	},
};
export const LargeCheckBox: Story = {
	args: {
		...Default.args,
		value: true,

		size: "lg",
		label: "Large and imposing",
	},
};

export const AllSizes: Story = {
	render(args: any) {
		return (
			<div className="flex flex-col space-y-4">
				<Checkbox {...args} size="xs" label="Extra Small (xs)" />
				<Checkbox {...args} size="sm" label="Small (sm)" />
				<Checkbox {...args} size="md" label="Medium (md)" />
				<Checkbox {...args} size="lg" label="Large (lg)" />
				<Checkbox {...args} size="xl" label="Extra Large (xl)" />
			</div>
		);
	},
	args: {
		value: true,
	},
};
export const AllColors: Story = {
	render(args) {
		return (
			<div className="flex flex-col space-y-4">
				<Checkbox {...args} color="primary" iconColor="background" />
				<Checkbox {...args} color="secondary" />
				<Checkbox {...args} color="success" />
				<Checkbox {...args} color="danger" />
				<Checkbox {...args} color="accent" />
				<Checkbox {...args} color="contrast" />
				<Checkbox {...args} color="info" iconColor="background" />
			</div>
		);
	},
	args: {
		value: true,
	},
};
