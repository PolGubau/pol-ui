import type { Meta, StoryObj } from "@storybook/react";
import ToggleButton from "./ToggleButton";
import { Icon, IconNames } from "../../Base";

const meta = {
	title: "Buttons/ToggleButton",
	component: ToggleButton,
	tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "Like",
		onChange: (value) => console.log(value),
		onChangeValue: (value) => console.log(value),
		isActive: false,
		icon: undefined,
		className: "",
		style: {},
		id: undefined,
		ariaLabel: undefined,
	},
};

export const TogglingLabel: Story = {
	args: {
		content: ["Like", "Dislike"],
	},
};
export const WithIcon: Story = {
	args: {
		content: ["Like", "Dislike"],
		icon: "heart",
	},
};
export const Icons: Story = {
	args: {
		className: "flex items-center apect-square w-10",
		content: [
			<Icon icon={IconNames.expandLess} key={1} />,
			<Icon icon={IconNames.expandMore} key={2} />,
		],
	},
};
