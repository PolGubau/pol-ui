import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

import { TbCheck } from "react-icons/tb";

const meta = {
	title: "Icon",
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
export const BadName: Story = {
	args: {
		icon: "hello",
	},
};
export const CustomColor: Story = {
	args: {
		...Default.args,
		className: "text-yellow-700",
	},
};

export const IconColors: Story = {
	render: (args) => (
		<>
			<Icon {...args} color="neutral" />
			<Icon {...args} color="success" />
			<Icon {...args} color="danger" />
			<Icon {...args} color="main" />
		</>
	),
	args: {
		...Default.args,
	},
};
export const SmallIcon: Story = {
	args: {
		...Default.args,
		size: "10px",
	},
};
export const CustomSize: Story = {
	render: (args) => (
		<>
			<Icon {...args} size="10px" />
			<Icon {...args} size="24px" />
			<Icon {...args} size="48px" />
			<Icon {...args} size="96px" />
		</>
	),
	args: {
		...Default.args,
	},
};
