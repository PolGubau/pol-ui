import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "../DateInput";

const meta = {
	title: "Inputs/DateInput",
	component: DateInput,
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		onChange: (date: string) => console.log(date),
	},
};
export const WithLabel: Story = {
	args: {
		label: "Date",
	},
};
