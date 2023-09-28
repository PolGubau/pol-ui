import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "./NavigationBar";
import { Directions } from "../../../types";

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
	parameters: {
		docs: {
			description: {
				story: "Invert text color (based on your dark mode provided) on selected item",
			},
		},
	},
	args: { data: mockData, invertTextOnSelected: true },
};
export const Vertical: Story = {
	args: { data: mockData, direction: Directions.y },
};
