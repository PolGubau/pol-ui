import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";
import { Button } from "../../Buttons";
const meta = {
	title: "Data Display/Divider",
	component: Divider,
	tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { opacity: 40 },
};

export const Vertical: Story = {
	render: (args) => (
		<div className="flex overflow-hidden border-2  border-primary w-fit rounded-xl">
			<Button rounded={false} type="text">
				Edit
			</Button>
			<Button rounded={false} type="text">
				Show
			</Button>
			<Divider {...args} orientation="vertical" />
			<Button rounded={false} type="text">
				Delete
			</Button>
		</div>
	),
	args: { orientation: "vertical" },
};
export const WithMargins: Story = {
	render: (args) => (
		<div className="flex overflow-hidden border-2  border-primary w-fit rounded-xl">
			<Button rounded={false} type="text">
				Edit
			</Button>
			<Divider {...args} orientation="vertical" margin="small" />

			<Button rounded={false} type="text">
				Show
			</Button>
			<Divider {...args} orientation="vertical" margin="large" />
			<Button rounded={false} type="text">
				Delete
			</Button>
		</div>
	),
	args: { orientation: "vertical" },
};
export const DangerBar: Story = {
	args: { variant: "danger" },
};
export const AllColors: Story = {
	render: (args) => (
		<div className="">
			<Divider {...args} variant="success" />
			<Divider {...args} variant="danger" />
			<Divider {...args} variant="warning" />
			<Divider {...args} variant="accent" />
			<Divider {...args} variant="dark" />
			<Divider {...args} variant="info" />
			<Divider {...args} variant="light" />
			<Divider {...args} variant="default" />
		</div>
	),
	args: {},
};
export const WithMessage: Story = {
	args: { message: "or" },
};

export const WithMessageAndIon: Story = {
	args: { message: "or", icon: "question" },
};
export const CustomWeigth: Story = {
	args: { message: "or", weight: 2 },
};
export const SomeWeights: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2  ">
			<Divider {...args} weight={1} message="Tinky Winky" />
			<Divider {...args} weight={0.5} message="Dipsy" />
			<Divider {...args} weight={10} message="Laa-Laa" />
			<Divider {...args} weight={35} message="Po" />
		</div>
	),
	args: {},
};
