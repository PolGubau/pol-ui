import type { Meta, StoryObj } from "@storybook/react";
import AnimatedToasts from "./AnimatedToasts";

const meta = {
	title: "Popups/AnimatedToasts",
	component: AnimatedToasts,
} satisfies Meta<typeof AnimatedToasts>;

export default meta;
type Story = StoryObj<typeof meta>;

const initialItems = [0, 1, 2, 3, 4];

export const Default: Story = {
	args: { toasts: initialItems },
};
