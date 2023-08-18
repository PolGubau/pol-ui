import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta = {
	title: "Inputs/Radio",
	component: Radio,
	tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

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
		label: "Look, this radio is checked",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,
		label: "Disabled Radio",
		disabled: true,
	},
};
export const CustomIcon: Story = {
	args: {
		...Default.args,
		value: true,

		checkIcon: "user",
		label: "Who would use this icon for a radio?",
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
	render(args) {
		return (
			<div className="flex flex-col space-y-4">
				<Radio {...args} size="xs" label="Extra Small (xs)" />
				<Radio {...args} size="sm" label="Small (sm)" />
				<Radio {...args} size="md" label="Medium (md)" />
				<Radio {...args} size="lg" label="Large (lg)" />
				<Radio {...args} size="xl" label="Extra Large (xl)" />
			</div>
		);
	},
	args: {
		value: true,
	},
};
