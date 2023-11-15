import type { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";
import { Text } from "../../../Text";
import { Colors } from "../../../../types";

const meta = {
	title: "Layout/Card",
	component: Card,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="w-full p-16 bg-background dark:bg-background-inverted">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div>
				<Text as="h5" color={Colors.primary}>
					@Author
				</Text>

				<Text as="h2" weight={800} size={40} className="my-1">
					Card Title
				</Text>

				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum eum ullam nostrum
					atque quam.
				</Text>
			</div>
		),
	},
};
export const OnClick: Story = {
	args: {
		...Default.args,
		hasRipple: true,
		onClick: () => console.log("Clicked!"),
	},
};

export const DarkMode: Story = {
	render: (args) => (
		<div className="dark">
			<div className="w-full dark:bg-background-inverted p-16">
				<Card {...args} />
			</div>
		</div>
	),
	args: {
		...Default.args,
	},
};
export const CustomRipple: Story = {
	args: {
		...Default.args,
		hasRipple: true,
		rippleColor: Colors.danger,
		rippleDuration: 2,
		rippleOpacity: 0.5,
	},
};
export const CustomPadding: Story = {
	args: {
		...Default.args,
		padding: {
			y: "xl",
			x: "none",
		},
	},
};
export const CustomLight: Story = {
	args: {
		...Default.args,
		lightOpacity: 10,
		lightColor: "#ff5",
	},
};
