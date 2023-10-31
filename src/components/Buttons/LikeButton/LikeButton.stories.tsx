import type { Meta, StoryObj } from "@storybook/react";
import LikeButton from "./LikeButton";
import { Icon, IconNames } from "../../Base";

const meta = {
	title: "Buttons/LikeButton",
	component: LikeButton,
	tags: ["autodocs"],
	parameters: {
		controls: { expanded: true },
	},
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: undefined,
		onLike: () => null,
		iconLiked: undefined,
		iconNotLiked: undefined,
	},
};
export const WithLabel: Story = {
	args: {
		label: "Like",
	},
};
export const ConfettiColors: Story = {
	args: {
		label: "Like",
		colors: ["#000"],
	},
};
export const CustomIcons: Story = {
	args: {
		iconLiked: <Icon icon={IconNames.alarm} />,
		iconNotLiked: <Icon icon={IconNames.archive} />,
	},
};
