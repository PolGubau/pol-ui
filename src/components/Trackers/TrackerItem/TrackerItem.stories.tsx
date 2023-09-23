import type { Meta, StoryObj } from "@storybook/react";
import Wrapper from "./TrackerItem";

const meta = {
	title: "Trackers/TrackerItem",
	component: Wrapper,
	tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Tracker Item is the minimal component to display a tracker. It is used in the TrackerList component.",
			},
		},
	},
	args: { value: "1434 times" },
};
