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
		rounded: "full",
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

		rounded: "md",
	},
};
export const Squared: Story = {
	args: {
		...Default.args,
		hasText: true,

		rounded: "none",
	},
};
export const AllRoundedTypes: Story = {
	render: (args) => (
		<div className="gap gap-2 flex flex-col">
			<Avatar {...args} rounded="full" />
			<Avatar {...args} rounded="xl" />
			<Avatar {...args} rounded="lg" />
			<Avatar {...args} rounded="md" />
			<Avatar {...args} rounded="sm" />
			<Avatar {...args} rounded="none" />
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
export const WithBadge: Story = {
	args: {
		...Default.args,
		size: "lg",
		badge: "hi",
		badgeColor: "primary",
	},
};
export const WithBackground: Story = {
	args: {
		...Default.args,
		size: "lg",
		color: "contrast",
		variant: "filled",
		badge: "hi",
		badgeColor: "primary",
	},
};
export const WithBackgroundLargeBadge: Story = {
	args: {
		...Default.args,
		size: "lg",
		color: "contrast",
		variant: "filled",
		badge: "Some really long text that will overflow and be hidden by the badge",
		badgeColor: "primary",
	},
};
export const NewsInAvatar: Story = {
	args: {
		...Default.args,
		size: "lg",
		color: "accent",
		variant: "outlined",
		badge: "1",
		badgeColor: "accent",
	},
};
export const IsALink: Story = {
	args: {
		...Default.args,
		size: "lg",
		href: "https://www.polgubau.com",
		rounded: "full",
		color: "accent",
		variant: "outlined",
		badge: "1",
		badgeColor: "accent",
	},
};
export const IsAButton: Story = {
	args: {
		...Default.args,
		size: "lg",
		onClick: () => alert("hi"),
		rounded: "full",
		color: "accent",
		variant: "outlined",
		badge: "1",
		badgeColor: "accent",
	},
};
