import type { Meta, StoryObj } from "@storybook/react";
import NavbarItem from "./NavbarItem";
import Navbar from "../Navbar/Navbar";

const meta = {
	title: "Navigation/NavbarItem",
	component: NavbarItem,
	tags: ["autodocs"],
} satisfies Meta<typeof NavbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Home",
		href: "/",
	},
};

export const Active: Story = {
	args: {
		...Default.args,
		active: true,
	},
};
export const BGAdaptation: Story = {
	args: {
		...Default.args,
		active: true,
	},
	render: (args) => (
		<div className="bg-danger/30 flex gap-1 p-1 rounded-xl">
			<NavbarItem {...args} active={true} label="active" />
			<NavbarItem {...args} active={false} label="no active" />
		</div>
	),
};
export const WithIcon: Story = {
	args: {
		...Default.args,
		icon: "home",
	},
};
export const IconInRight: Story = {
	args: {
		...Default.args,
		icon: "home",
		iconPosition: "right",
	},
};
export const Complete: Story = {
	args: {
		...Default.args,
	},
	render: () => (
		<>
			<Navbar
				{...Default.args}
				logo="My App 🚗"
				customRight={
					<ul className="flex gap-2">
						<NavbarItem label="Home" href="/" active />
						<NavbarItem label="About" href="/about" />
						<NavbarItem label="Contact" href="/contact" />
					</ul>
				}
			/>
		</>
	),
};
