import type { Meta, StoryObj } from "@storybook/react";
import TrackerItem from "./TrackerItem";

const meta = {
	title: "Trackers/TrackerItem",
	component: TrackerItem,
	tags: ["autodocs"],
} satisfies Meta<typeof TrackerItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Tracker Item is the minimal component to display a tracker. It is used in the Tracker components.",
			},
		},
	},
	args: { value: "2" },
};
export const WithLabel: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Tracker Item is the minimal component to display a tracker. It is used in the Tracker components.",
			},
		},
	},
	args: { value: "2", label: "Label", width: "40px", height: "40px" },
};
