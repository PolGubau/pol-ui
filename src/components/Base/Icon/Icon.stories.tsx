import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

import { TbCheck } from "react-icons/tb";
import { Colors } from "../../../types";

const meta = {
	title: "Base/Icon",
	component: Icon,
	tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: "check",
	},
};
export const CutomIcon: Story = {
	args: {
		icon: <TbCheck />,
	},
};

export const CustomColor: Story = {
	args: {
		...Default.args,
		color: Colors.accent,
	},
};

export const IconColors: Story = {
	render: (args) => (
		<>
			<Icon {...args} color="info" />
			<Icon {...args} color="success" />
			<Icon {...args} color="danger" />
			<Icon {...args} color="accent" />
			<Icon {...args} color="contrast" />
		</>
	),
	args: {
		...Default.args,
	},
};
export const SmallIcon: Story = {
	args: {
		...Default.args,
		size: "sm",
	},
};
export const CustomSize: Story = {
	render: (args) => (
		<>
			<Icon {...args} size="xs" />
			<Icon {...args} size="sm" />
			<Icon {...args} size="md" />
			<Icon {...args} size="lg" />
			<Icon {...args} size="xl" />
		</>
	),
	args: {
		...Default.args,
	},
};
