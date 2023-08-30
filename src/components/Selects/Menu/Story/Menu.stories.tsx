import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../Menu";
import { mockmenu } from "./mockMenus";
import { Link } from "../../../Buttons/Link";

const meta = {
	title: "Selects/Menu",
	component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { label: "Menu", items: mockmenu, buttonVariant: "normal" },
};
export const WithoutLabel: Story = {
	args: { items: mockmenu, buttonVariant: "normal" },
};
export const CustomButton: Story = {
	args: { label: "Nice label", items: mockmenu, buttonVariant: "text" },
};
export const Dividers: Story = {
	args: { label: "Nice label", items: mockmenu, dividers: true },
};
export const ChangeIcon: Story = {
	args: { label: "Nice label", items: mockmenu, openIcon: "user", closeIcon: "world" },
};
export const NavIdea: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<Menu {...args} label="About us" buttonVariant="text" items={mockmenu} />
			<Menu {...args} label="Our Products" buttonVariant="text" items={mockmenu} />
			<Link {...args} href="/ugly-blog" type="text">
				Visit our blog
			</Link>
			<Menu {...args} openIcon="more" buttonVariant="text" items={mockmenu} />
		</div>
	),
	args: { items: mockmenu, buttonVariant: "normal" },
};