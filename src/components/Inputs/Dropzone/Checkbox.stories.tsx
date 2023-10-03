import type { Meta, StoryObj } from "@storybook/react";
import Dropzone from "./Dropzone";
import { IconNames } from "../../Base";

const meta = {
	title: "Inputs/Dropzone",
	component: Dropzone,
	tags: ["autodocs"],
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	parameters: {
		docs: {
			story: {
				component: "This is a component",
			},
		},
	},
};

export const Transparent: Story = {
	args: {
		...Default.args,
		bgOpacity: 0,
	},
};
export const NoBorder: Story = {
	args: {
		...Default.args,
		hasBorder: false,
	},
};
export const CustomIcon: Story = {
	args: {
		...Default.args,
		icon: IconNames.binary,
	},
};
export const CustomInfo: Story = {
	args: {
		...Default.args,
		icon: IconNames.book,
		label: "🟩🟢🔰💚🍏🌿🥗📗",
		nofilesLabel: "🔹🔷💙🫐📘🔵🟦😰",
	},
};

export const DarkMode: Story = {
	args: {
		...Default.args,
	},
	render(args) {
		return (
			<div className="dark">
				<div className="w-full h-96 bg-background-inverted p-8 grid items-center">
					<Dropzone {...args} />
				</div>
			</div>
		);
	},
};
