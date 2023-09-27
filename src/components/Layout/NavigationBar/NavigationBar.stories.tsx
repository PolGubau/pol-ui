import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "./NavigationBar";

const meta = {
	title: "Layout/NavigationBar",
	component: NavigationBar,
	tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = ["Home", "About", "Contact", "Blog"];

export const Default: Story = {
	args: { data: mockData },
};
export const OnClick: Story = {
	args: { data: mockData, onChange: (index: number) => alert(index) },
};
export const InvertText: Story = {
	args: { data: mockData, invertTextOnSelected: true },
};
