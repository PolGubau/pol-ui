import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
import { Colors } from "../../../types";
const meta = {
	title: "Data Display/Loader",
	component: Loader,
	tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
export const Pulse: Story = {
	args: { type: "pulse" },
};
export const LightSaber: Story = {
	args: { type: "lightSaber" },
};
export const Bars: Story = {
	args: { type: "bars" },
};
export const Dots: Story = {
	args: { type: "dots" },
};

export const AllTypes: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} type="spinner" />
			<Loader {...args} type="pulse" />
			<Loader {...args} type="dots" />
			<Loader {...args} type="lightSaber" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllColors: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} type="spinner" color={Colors.accent} />
			<Loader {...args} type="pulse" color={Colors.secondary} />
			<Loader {...args} type="dots" color={Colors.success} />
			<Loader {...args} type="bars" color={Colors.danger} />
			<Loader {...args} type="spinner" color={Colors.info} />
			<Loader {...args} type="pulse" color={Colors.primary} />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} size={15} />
			<Loader {...args} size={25} />
			<Loader {...args} size={35} />
			<Loader {...args} size={45} />
			<Loader {...args} size={55} />
		</div>
	),
	args: {
		...Default.args,
	},
};
