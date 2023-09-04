import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import { Image } from "../../Media/Image";
import { Button } from "../../Buttons";

const meta = {
	title: "Data Display/Badge",
	component: Badge,
	tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<Image src="https://www.thispersondoesnotexist.com" rounded="full" alt="randomPerson" />
		),
		content: 1,
		onClick: undefined,
	},
};
export const WithOnClick: Story = {
	args: {
		...Default.args,
		onClick: () => alert("Clicked"),
	},
};
export const AllColors: Story = {
	render: (args) => (
		<div className="flex gap-3 ">
			<Badge {...args} color="accent" />
			<Badge {...args} color="success" />
			<Badge {...args} color="danger" />
			<Badge {...args} color="info" />
			<Badge {...args} color="contrast" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const Big: Story = {
	args: {
		...Default.args,
		size: "xl",
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className="flex gap-3 ">
			<Badge {...args} color="accent" size="xs" />
			<Badge {...args} color="success" size="sm" />
			<Badge {...args} color="danger" size="lg" />
			<Badge {...args} color="info" size="xl" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const BottomLeft: Story = {
	args: {
		...Default.args,
		horizontal: "left",
		vertical: "bottom",
	},
};
export const Positions: Story = {
	render: (args) => (
		<div className="flex gap-3 ">
			<Badge {...args} color="accent" horizontal="left" vertical="bottom" />
			<Badge {...args} color="danger" vertical="bottom" />
			<Badge {...args} color="success" horizontal="left" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const StringBadge: Story = {
	args: {
		...Default.args,
		content: "hello",
		color: "info",
	},
};
export const PassingMaxAsString: Story = {
	args: {
		...Default.args,
		content: "hello",
		color: "info",
		max: 3,
	},
};
export const PassingMaxAsNumber: Story = {
	args: {
		...Default.args,
		content: 100000,
		color: "info",

		max: 99,
	},
};
export const Icon: Story = {
	args: {
		...Default.args,
		icon: "script",
		content: 100000,
		color: "info",
		max: 99,
	},
};
export const HideBadges: Story = {
	args: {
		...Default.args,
		children: <Button>Your followers</Button>,
		icon: "user",
		content: 100000,
		isVisible: false,
		color: "info",

		max: 99,
	},
};
