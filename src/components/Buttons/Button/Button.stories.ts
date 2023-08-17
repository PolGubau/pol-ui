import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
	title: "Buttons/Button",
	component: Button,
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "I'm a normal button",
	},
};
export const Outlined: Story = {
	args: {
		children: "I have an outline",
		type: "outlined",
	},
};
export const Text: Story = {
	args: {
		children: "More discreet",
		type: "text",
	},
};
export const Main: Story = {
	args: {
		children: "The important one",
		type: "main",
	},
};
export const Disabled: Story = {
	args: {
		children: "Not here anymore",
		disabled: true,
	},
};

export const SmallButton: Story = {
	args: {
		children: "Small",
		size: "small",
	},
};
export const NormalButton: Story = {
	args: {
		children: "Normal",
		size: "normal",
	},
};
export const LargeButton: Story = {
	args: {
		children: "The big one",
		size: "large",
	},
};
export const SquareButton: Story = {
	args: {
		children: "I'm a rectangle",
		size: "large",
		rounded: false,
	},
};
export const WithPrefix: Story = {
	args: {
		children: "I have a prefix",
		prefix: "👍",
	},
};
export const WithSuffix: Story = {
	args: {
		children: "I have a suffix",
		suffix: "👍",
	},
};
export const WithPrefixAndSuffix: Story = {
	args: {
		children: "I have a prefix and a suffix",
		prefix: "🤠",
		suffix: "Suffy",
	},
};
export const WithIcon: Story = {
	args: {
		children: "I have an icon",
		icon: "check",
		iconPosition: "left",
	},
};
export const MainWithIcon: Story = {
	args: {
		type: "main",
		iconPosition: "left",
		children: "I have an icon",
		icon: "check",
	},
};
export const WithIconRight: Story = {
	args: {
		children: "I have an icon",
		icon: "check",
		iconPosition: "right",
	},
};
export const WithIconOnly: Story = {
	args: {
		children: "",
		icon: "check",
		iconPosition: "left",
	},
};
