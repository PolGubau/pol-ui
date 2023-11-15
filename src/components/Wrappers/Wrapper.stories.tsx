import type { Meta, StoryObj } from "@storybook/react";
import Wrapper from "./Wrapper";

const meta = {
	title: "Wrappers/Wrapper",
	component: Wrapper,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="relative h-96 overflow-hidden rounded-lg bg-accent/30">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The Wrapper component is used for creating a greyish background for a component, it is used for creating  backgrounds for Modals, Menus...",
			},
		},
	},
	args: { hasOverlay: true },
};
