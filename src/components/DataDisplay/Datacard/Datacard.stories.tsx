import type { Meta, StoryObj } from "@storybook/react";
import Datacard from "./Datacard";
import { IconNames } from "../../Base";
import { Sizes } from "../../../types";

const meta = {
	title: "Data Display/Datacard",
	component: Datacard,
	tags: ["autodocs"],
} satisfies Meta<typeof Datacard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { value: "1434 times", label: "Downloaded", icon: IconNames.upload },
};
export const WithAction: Story = {
	args: { ...Default.args, onClick: () => alert("Clicked!") },
};
export const NoLabel: Story = {
	args: { value: "1434 times", icon: IconNames.upload },
};
export const NoIcon: Story = {
	args: { value: "1434 times", label: "Downloaded" },
};
export const JustValue: Story = {
	args: { value: "1434 times" },
};
export const Squared: Story = {
	args: { ...Default.args, rounded: "none" },
};
export const CustomPadding: Story = {
	args: { ...Default.args, padding: Sizes.lg },
};
