import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import { Button } from "../Button";

const meta = {
	title: "Buttons/IconButton",
	component: IconButton,
	tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const icon = "check";

export const Default: Story = {
	args: {
		icon,
	},
};
export const Outlined: Story = {
	args: {
		...Default.args,
		type: "outlined",
	},
};
export const Text: Story = {
	args: {
		...Default.args,
		type: "text",
	},
};
export const Main: Story = {
	args: {
		...Default.args,
		type: "main",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
	},
};

export const SmallButton: Story = {
	args: {
		...Default.args,
		size: "small",
	},
};
export const NormalButton: Story = {
	args: {
		...Default.args,
		size: "normal",
	},
};
export const LargeButton: Story = {
	args: {
		...Default.args,
		size: "large",
	},
};
export const SquareButton: Story = {
	args: {
		...Default.args,
		rounded: false,
	},
};

export const WithOtherButtons: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<Button>Button</Button>
			<IconButton {...args} />
			<IconButton {...args} />
		</div>
	),
	args: {
		...Default.args,
	},
};
