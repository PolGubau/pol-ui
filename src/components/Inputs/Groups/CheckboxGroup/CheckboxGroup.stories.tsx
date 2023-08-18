import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "./CheckboxGroup";

const meta = {
	title: "Inputs/Groups/CheckboxGroup",
	component: CheckboxGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
	{ name: "Location", value: true },
	{ name: "Friends", value: false },
	{ name: "Soul", value: true },
];

export const Default: Story = {
	args: {
		label: "Which data can we rob?",
		value: mockData,
		axis: "y",
		onChange: (newValue: typeof mockData) => {
			console.log("CheckboxGroup onChange", newValue);
		},
	},
};
export const Horizontal: Story = {
	args: {
		label: "Which data can we rob?",
		value: mockData,
		axis: "x",
		onChange: (newValue: typeof mockData) => {
			console.log("CheckboxGroup onChange", newValue);
		},
	},
};
