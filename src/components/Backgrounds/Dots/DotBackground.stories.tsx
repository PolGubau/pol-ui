import type { Meta, StoryObj } from "@storybook/react";
import DotBackground from "./DotBackground";
import { Text } from "../../Text";
import { applyBgColor, applyPadding } from "../../../style";
import { Colors, Sizes } from "../../../types";

const meta = {
	title: "Backgrounds/DotBackground",
	component: DotBackground,
	tags: ["autodocs"],
} satisfies Meta<typeof DotBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => (
		<DotBackground {...args} className="flex items-center justify-center h-36">
			<Text
				className={`p-2 ${applyBgColor(Colors.accent)} rounded-xl ${applyPadding({
					x: Sizes.md,
					y: Sizes.sm,
				})}`}
			>
				Hello
			</Text>
		</DotBackground>
	),
};
