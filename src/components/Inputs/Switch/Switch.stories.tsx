import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta = {
	title: "Inputs/Switch",
	component: Switch,
	tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Switch",
		checked: true,
		size: "normal",
	},
};
export const Small: Story = {
	args: {
		label: "Switch",
		size: "small",
		checked: true,
	},
};
export const Large: Story = {
	args: {
		label: "Switch",
		size: "large",
		checked: true,
	},
};
export const Disabled: Story = {
	args: {
		label: "Switch",
		checked: true,
		disabled: true,
	},
};
export const WithError: Story = {
	args: {
		label: "Switch",
		checked: true,
		error: "This is an error",
	},
};

export const DarkMode: Story = {
	args: {
		...Default.args,
	},
	render: (args) => (
		<div className="flex flex-col gap-4">
			<div className="dark">
				<div className=" bg-background-inverted flex p-4 rounded-xl">
					<Switch {...args} />
				</div>
			</div>
			<div className=" bg-background flex p-4 rounded-xl">
				<Switch {...args} />
			</div>
		</div>
	),
};
