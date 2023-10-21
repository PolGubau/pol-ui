import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import { IconNames } from "../../Base";

const meta = {
	title: "Navigation/Sidebar",
	component: Sidebar,
	decorators: [(Story) => <Story />],

	tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLinks = [
	{ label: "Dashboard", href: "/", icon: IconNames.home },
	{ label: "Settings", href: "/settings", icon: IconNames.settings },
	{ label: "Logout", href: "/logout", icon: IconNames.arrowBarLeft },
];

export const Default: Story = {
	// args: { links: defaultLinks },
};
