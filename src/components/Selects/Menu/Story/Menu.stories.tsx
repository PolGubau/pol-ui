import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../Menu";
import { mockmenu } from "./mockMenus";
import { Variants } from "../../../../types";
import { IconNames } from "../../../Base";

const meta = {
	title: "Selects/Menu",
	component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { label: "Menu", options: mockmenu, variant: Variants.filled },
};
export const WithoutLabel: Story = {
	args: { options: mockmenu, variant: Variants.filled },
};
export const CustomButton: Story = {
	args: { label: "Nice label", options: mockmenu, variant: Variants.text },
};
export const Dividers: Story = {
	args: { label: "Nice label", options: mockmenu, dividers: true },
};
export const ChangeIcon: Story = {
	args: {
		label: "Nice label",
		options: mockmenu,
		openIcon: IconNames.user,
		closeIcon: IconNames.world,
	},
};
export const NavIdea: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<Menu
				{...args}
				label="About us"
				icon={IconNames.euro}
				variant={Variants.text}
				options={mockmenu}
			/>
			<Menu {...args} label="Profile" variant={Variants.text} options={mockmenu} />

			<Menu {...args} label="Without Items" variant={Variants.text} options={[]} />

			<Menu {...args} openIcon="more" variant={Variants.text} options={mockmenu} />
		</div>
	),
	args: { options: mockmenu, variant: Variants.filled },
};
export const Directions: Story = {
	render: (args) => (
		<div className="flex gap-2 p-8">
			<Menu {...args} label="Bottom" options={mockmenu} direction="bottom" />
			<Menu {...args} label="Top" options={mockmenu} direction="top" />
			<Menu {...args} label="Right" options={mockmenu} direction="right" />
			<Menu {...args} label="Left" options={mockmenu} direction="left" />
		</div>
	),
	args: { options: mockmenu, variant: Variants.filled },
};
