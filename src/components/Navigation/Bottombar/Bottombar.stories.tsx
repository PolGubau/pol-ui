import type { Meta, StoryObj } from "@storybook/react";
import Bottombar from "./Bottombar";

const meta = {
	title: "Navigation/Bottombar",
	component: Bottombar,
} satisfies Meta<typeof Bottombar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{
				name: "Home",
				icon: "home",
				link: "/",
			},
			{
				name: "Settings",
				icon: "settings",
				link: "/settings",
			},
			{
				name: "Profile",
				icon: "user",
				link: "/profile",
			},
			{
				name: "Profile",
				icon: "user",
				onClick: () => alert("Clicked!"),
			},
			{
				name: "About",
				icon: "object",
				link: "/about",
			},
		],
	},
};
export const SmallRounded: Story = {
	args: {
		...Default.args,
		rounded: "sm",
	},
};
export const Fitted: Story = {
	args: {
		...Default.args,
		fillEmptyWidth: false,
	},
};
export const FullWidth: Story = {
	args: {
		...Default.args,
		rounded: "none",
		maxWidth: "full",
		bottomMargin: "0",
	},
};
export const SquaredItems: Story = {
	args: {
		...Default.args,
		rounded: "none",
		maxWidth: "full",
		bottomMargin: "0",
		itemsRounded: "none",
	},
};
export const WithoutPadding: Story = {
	args: {
		...Default.args,
		rounded: "none",
		maxWidth: "full",
		bottomMargin: "0",
		itemsRounded: "none",
		padding: "none",
	},
};
export const BigPadding: Story = {
	args: {
		...Default.args,
		rounded: "none",
		maxWidth: "full",
		bottomMargin: "0",
		itemsRounded: "lg",
		padding: "lg",
	},
};

export const DarkMode: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="dark">
			<main className="dark:bg-background-inverted w-full h-screen ">
				<Bottombar {...args} />
			</main>
		</div>
	),
};
