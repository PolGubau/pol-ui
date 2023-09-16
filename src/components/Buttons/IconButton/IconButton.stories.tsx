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
		variant: "outlined",
	},
};
export const Text: Story = {
	args: {
		...Default.args,
		variant: "text",
	},
};
export const Main: Story = {
	args: {
		...Default.args,
		variant: "filled",
		color: "accent",
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
		size: "sm",
	},
};
export const NormalButton: Story = {
	args: {
		...Default.args,
		size: "md",
	},
};
export const LargeButton: Story = {
	args: {
		...Default.args,
		size: "lg",
	},
};
export const SquareButton: Story = {
	args: {
		...Default.args,
		rounded: "none",
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
export const DarkMode: Story = {
	render: (args) => (
		<main className="dark bg-background-dark p-4">
			<div className="flex gap-2">
				<Button onClick={() => {}}>Button</Button>
				<IconButton {...args} />
				<IconButton {...args} />
			</div>
		</main>
	),
	args: {
		...Default.args,
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<IconButton {...args} size="xs" />
			<IconButton {...args} size="sm" />
			<IconButton {...args} size="md" />
			<IconButton {...args} size="lg" />
			<IconButton {...args} size="xl" />
		</div>
	),
	args: {
		...Default.args,
	},
};
