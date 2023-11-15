import type { Meta, StoryObj } from "@storybook/react";
import Dock, { DockItemProps } from "./Dock";
import { Sizes } from "../../../types";

const meta = {
	title: "Navigation/Dock",
	component: Dock,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="w-full h-full p-16 bg-background dark:bg-background-inverted relative">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Dock>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: DockItemProps[] = [
	{
		name: "Home",
		icon: "home",
	},
	{
		name: "User",
		icon: "user",
	},
];
const dataWithLinks: DockItemProps[] = [
	{
		name: "Home",
		icon: "home",
		href: "/",
	},
	{
		name: "User",
		icon: "user",
		href: "https://polgubau.com",
	},
];
export const Default: Story = {
	args: { data },
};
export const CustomRounded: Story = {
	args: { ...Default.args, itemRounded: Sizes.md, rounded: "full" },
};
export const NotFillSpace: Story = {
	args: { ...Default.args, fullWidth: false },
};
export const Links: Story = {
	args: { data: dataWithLinks },
};
export const DarkMode: Story = {
	args: { ...Default.args },

	render: (args) => (
		<div className="dark">
			<div className="w-full dark:bg-background-inverted p-16">
				<Dock {...args} />
			</div>
		</div>
	),
};
export const AnotherTheme: Story = {
	args: { ...Default.args },

	render: (args) => (
		<div className="trackup dark">
			<div className="w-full dark:bg-background-inverted p-16">
				<Dock {...args} />
			</div>
		</div>
	),
};
