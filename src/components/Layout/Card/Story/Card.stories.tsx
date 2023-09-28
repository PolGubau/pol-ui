import type { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";
import { Text } from "../../../Text";
import { Colors } from "../../../../types";

const meta = {
	title: "Layout/Card",
	component: Card,
	tags: ["autodocs"],
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
		onClick: () => alert("Clicked!"),
	},
};
