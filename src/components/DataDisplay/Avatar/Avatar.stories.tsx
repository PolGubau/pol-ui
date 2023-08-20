import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
	title: "Data Display/Avatar",
	component: Avatar,
	tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: "https://www.thispersondoesnotexist.com",
		name: "John Doe",
		size: "md",
		rounded: "circular",
		hasText: false,
	},
};
export const WithText: Story = {
	args: {
		...Default.args,
		hasText: true,
	},
};

export const WithDescription: Story = {
	args: {
		...Default.args,
		hasText: true,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
};
export const RoundedABit: Story = {
	args: {
		...Default.args,
		hasText: true,

		rounded: "rounded",
	},
};
export const Squared: Story = {
	args: {
		...Default.args,
		hasText: true,

		rounded: "square",
	},
};
export const AllRoundedTypes: Story = {
	render: (args) => (
		<div className="gap gap-2 flex flex-col">
			<Avatar {...args} rounded="circular" />
			<Avatar {...args} rounded="rounded" />
			<Avatar {...args} rounded="square" />
		</div>
	),
	args: {
		...Default.args,
		hasText: true,
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className="gap gap-2 flex flex-col">
			<Avatar {...args} size="xs" />
			<Avatar {...args} size="sm" />
			<Avatar {...args} size="md" />
			<Avatar {...args} size="lg" />
			<Avatar {...args} size="xl" />
		</div>
	),
	args: {
		...Default.args,
		hasText: true,
		description: "Software Engineer",
	},
};
export const WrongUrl: Story = {
	args: {
		...Default.args,
		hasText: true,
		src: "3.14159265359",
	},
};
