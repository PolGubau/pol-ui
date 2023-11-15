import type { Meta, StoryObj } from "@storybook/react";
import DotBackground from "./DotBackground";

const meta = {
	title: "Backgrounds/DotBackground",
	component: DotBackground,
	tags: ["autodocs"],
} satisfies Meta<typeof DotBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	parameters: {
		docs: {
			description: {
				story:
					"Each Pol/UI's background will adapt to the parent size (or use tailwind / style to change it)",
			},
		},
	},

	render: (args) => (
		<div
			className="flex items-center justify-center"
			style={{
				height: "500px",
			}}
		>
			<DotBackground {...args}></DotBackground>
		</div>
	),
};
