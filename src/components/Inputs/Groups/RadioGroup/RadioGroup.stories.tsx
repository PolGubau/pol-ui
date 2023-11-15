import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./RadioGroup";

const meta = {
	title: "Inputs/Groups/RadioGroup",
	component: RadioGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = ["Location", "Friends", "Soul"];

export const Default: Story = {
	args: {
		label: "Which data can we rob?",
		value: mockData,
		selectedValue: "Location",
		axis: "y",
		onChange: (newValue) => {
			console.log("RadioGroup onChange", newValue);
		},
	},
};
export const Horizontal: Story = {
	args: {
		label: "Which data can we rob?",
		value: mockData,
		selectedValue: "Friends",
		axis: "x",
		onChange: (newValue) => {
			console.log("RadioGroup onChange", newValue);
		},
	},
};
export const PassingTheIndex: Story = {
	args: {
		label: "Which data can we rob?",
		value: mockData,
		selectedValue: 1,
		axis: "x",
		onChange: (newValue) => {
			console.log("RadioGroup onChange", newValue);
		},
	},
};
export const WithNumbers: Story = {
	args: {
		label: "Choose a number",
		value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		selectedValue: 5, // 5 is the index of the array
		axis: "x",
		onChange: (newValue) => {
			console.log("RadioGroup onChange", newValue);
		},
	},
};
export const SelectingNumberByName: Story = {
	args: {
		label: "Choose a number",
		value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		selectedValue: "5",
		axis: "x",
		onChange: (newValue) => {
			console.log("RadioGroup onChange", newValue);
		},
	},
};
