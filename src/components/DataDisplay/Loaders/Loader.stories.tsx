import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
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
			<Loader {...args} type="bars" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllColors: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} type="spinner" color="success" />
			<Loader {...args} type="pulse" color="danger" />
			<Loader {...args} type="dots" color="accent" />
			<Loader {...args} type="bars" color="background" />
			<Loader {...args} type="spinner" color="info" />
			<Loader {...args} type="pulse" color="contrast" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} size="xs" />
			<Loader {...args} size="sm" />
			<Loader {...args} size="md" />
			<Loader {...args} size="lg" />
			<Loader {...args} size="xl" />
		</div>
	),
	args: {
		...Default.args,
	},
};
