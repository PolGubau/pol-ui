import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
import { Colors, LoaderTypes } from "../../../types";
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
	args: { type: LoaderTypes.Spinner },
};
export const LightSaber: Story = {
	args: { type: LoaderTypes.LightSaber },
};
export const Dots: Story = {
	args: { type: LoaderTypes.Dots },
};

export const AllTypes: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} type={LoaderTypes.Spinner} />
			<Loader {...args} type={LoaderTypes.Pulse} />
			<Loader {...args} type={LoaderTypes.Dots} />
			<Loader {...args} type={LoaderTypes.LightSaber} />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllColors: Story = {
	render: (args) => (
		<div className="flex gap-8 p-8 items-center">
			<Loader {...args} type={LoaderTypes.Spinner} color={Colors.accent} />
			<Loader {...args} type={LoaderTypes.Pulse} color={Colors.secondary} />
			<Loader {...args} type={LoaderTypes.Dots} color={Colors.success} />
			<Loader {...args} type={LoaderTypes.Dots} color={Colors.info} />
			<Loader {...args} type={LoaderTypes.Spinner} color={Colors.primary} />
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
