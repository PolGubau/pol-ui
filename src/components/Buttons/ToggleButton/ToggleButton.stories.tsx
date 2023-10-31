import type { Meta, StoryObj } from "@storybook/react";
import ToggleButton from "./ToggleButton";

const meta = {
	title: "Buttons/ToggleButton",
	component: ToggleButton,
	tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Like",
	},
};

export const TogglingLabel: Story = {
	args: {
		label: ["Like", "Dislike"],
	},
};
export const WithIcon: Story = {
	args: {
		label: ["Like", "Dislike"],
		icon: "heart",
	},
};
