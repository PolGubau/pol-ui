import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
const meta = {
	title: "Layout/Accordion",
	component: Accordion,
	tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: [
			{
				title: "Title 1",
				content: "Content 1",
			},
			{
				title: "Title 2",
				content: "Content 2",
			},
			{
				title: "Title 3",
				content: "Content 3",
			},
		],
	},
};
export const Multiple: Story = {
	args: {
		openMode: "multiple",
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
			},
		],
	},
};
export const CustomIcons: Story = {
	args: {
		openMode: "multiple",
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
export const DefaultOpenedMultiple: Story = {
	args: {
		openMode: "multiple",
		defaultOpened: [0, 1],
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
export const DefaultOpenedSingle: Story = {
	args: {
		openMode: "single",
		defaultOpened: [1],
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
