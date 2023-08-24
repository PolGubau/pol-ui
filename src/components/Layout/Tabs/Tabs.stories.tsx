import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
const meta = {
	title: "Layout/Tabs",
	component: Tabs,
	tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
				icon: "🎇",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
				icon: "🌍",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
				icon: "🌟",
			},
		],
	},
};
