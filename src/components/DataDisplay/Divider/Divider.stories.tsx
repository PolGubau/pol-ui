import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";
import { Button } from "../../Buttons";
import { ButtonVariants, ColorTypes, Directions, Sizes } from "../../../types";
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
			<Button rounded={"none"} variant={ButtonVariants.text}>
				Edit
			</Button>
			<Button rounded={"none"} variant={ButtonVariants.text}>
				Show
			</Button>
			<Divider {...args} direction="y" />
			<Button rounded={"none"} variant={ButtonVariants.text}>
				Delete
			</Button>
		</div>
	),
	args: { direction: "y" },
};
export const WithMargins: Story = {
	render: (args) => (
		<div className="flex overflow-hidden border-2  border-primary w-fit rounded-xl">
			<Button rounded={"none"} variant={ButtonVariants.text}>
				Edit
			</Button>
			<Divider {...args} direction={Directions.y} margin={Sizes.sm} />

			<Button rounded={"none"} variant={ButtonVariants.text}>
				Show
			</Button>
			<Divider {...args} direction={Directions.y} margin={Sizes.lg} />
			<Button rounded={"none"} variant={ButtonVariants.text}>
				Delete
			</Button>
		</div>
	),
	args: { direction: Directions.y },
};
export const DangerBar: Story = {
	args: { color: "danger" },
};
export const SomeColors: Story = {
	render: (args) => (
		<div className="">
			<Divider {...args} color="success" />
			<Divider {...args} color="danger" />
			<Divider {...args} color="accent" />
			<Divider {...args} color="info" />
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
};
export const CustomMessageBackground: Story = {
	args: { message: "or", messageBgColor: ColorTypes.danger },
};
