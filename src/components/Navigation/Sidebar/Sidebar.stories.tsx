import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta = {
	title: "Navigation/Sidebar",
	component: Sidebar,

	tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
