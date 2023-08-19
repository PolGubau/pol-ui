import type { Meta, StoryObj } from "@storybook/react";
import Select from "../Select";
import { mockSelectJustNames } from "./mockSelects";

const meta = {
	title: "Selects/Select",
	component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { items: mockSelectJustNames },
};
export const MainSelect: Story = {
	args: { items: mockSelectJustNames, variant: "main" },
};
export const TextSelect: Story = {
	args: { items: mockSelectJustNames, variant: "text" },
};
export const OutlinedSelect: Story = {
	args: { items: mockSelectJustNames, variant: "outlined" },
};
export const CustomIcon: Story = {
	args: { items: mockSelectJustNames, buttonIcon: "script" },
};
export const WithPlaceholder: Story = {
	args: {
		items: mockSelectJustNames,
		placeholder: "Before choosing, think twice",
	},
};
export const WithLabel: Story = {
	args: { items: mockSelectJustNames, label: "Select your favorite" },
};
export const FullWidth: Story = {
	args: { items: mockSelectJustNames, fullWidth: true, variant: "normal" },
};
export const FullWidthOutlined: Story = {
	args: { items: mockSelectJustNames, fullWidth: true, variant: "outlined" },
};
export const FullWidthText: Story = {
	args: { items: mockSelectJustNames, fullWidth: true, variant: "text" },
};
