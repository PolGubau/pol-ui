import type { Meta, StoryObj } from "@storybook/react";
import ServerCheckbox from "./ServerCheckbox";

const meta = {
	title: "Inputs/ServerCheckbox",
	component: ServerCheckbox,
	tags: ["autodocs"],
} satisfies Meta<typeof ServerCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
export const WithLabel: Story = {
	args: {
		...Default.args,
		label: "Label",
	},
};

export const AllSizes: Story = {
	render(args) {
		return (
			<div className="flex flex-col space-y-4">
				<ServerCheckbox {...args} size="xs" label="Extra Small (xs)" />
				<ServerCheckbox {...args} size="sm" label="Small (sm)" />
				<ServerCheckbox {...args} size="md" label="Medium (md)" />
				<ServerCheckbox {...args} size="lg" label="Large (lg)" />
				<ServerCheckbox {...args} size="xl" label="Extra Large (xl)" />
			</div>
		);
	},
	args: {},
};
export const AllColors: Story = {
	render(args) {
		return (
			<div className="flex flex-col space-y-4">
				<ServerCheckbox {...args} color="primary" iconColor="background" />
				<ServerCheckbox {...args} color="secondary" />
				<ServerCheckbox {...args} color="success" />
				<ServerCheckbox {...args} color="danger" />
				<ServerCheckbox {...args} color="accent" />
				<ServerCheckbox {...args} color="contrast" />
				<ServerCheckbox {...args} color="info" iconColor="background" />
			</div>
		);
	},
	args: {},
};
