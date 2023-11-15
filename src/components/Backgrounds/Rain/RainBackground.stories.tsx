import type { Meta, StoryObj } from "@storybook/react";
import RainBackground from "./RainBackground";

const meta = {
	title: "Backgrounds/RainBackground",
	component: RainBackground,
	tags: ["autodocs"],
} satisfies Meta<typeof RainBackground>;

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
			<RainBackground {...args}></RainBackground>
		</div>
	),
};

export const CustomColor: Story = {
	args: {
		color: "#f00",
	},
	parameters: {
		docs: {
			description: {
				story: "",
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
			<RainBackground {...args}></RainBackground>
		</div>
	),
};
export const CustomSpeed: Story = {
	args: {
		fastest: 10000,
		slowest: 100000,
	},
	parameters: {
		docs: {
			description: {
				story: "",
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
			<RainBackground {...args}></RainBackground>
		</div>
	),
};
export const CustomAmount: Story = {
	args: {
		amount: 800,
	},
	parameters: {
		docs: {
			description: {
				story: "",
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
			<RainBackground {...args}></RainBackground>
		</div>
	),
};
