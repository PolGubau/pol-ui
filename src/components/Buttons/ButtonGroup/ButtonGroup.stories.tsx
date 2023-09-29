import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";
import { IconButton } from "../IconButton";

const meta = {
	title: "Buttons/ButtonGroup",
	component: ButtonGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Button rounded="none" variant="text" onClick={() => {}}>
					Button 1
				</Button>
				<Button rounded="none" variant="text" onClick={() => {}}>
					Button 2
				</Button>
				<Button rounded="none" variant="text" onClick={() => {}}>
					Button 3
				</Button>
			</>
		),
	},
};

export const FullWidth: Story = {
	args: {
		...Default.args,
		fullWidth: true,
	},
};
export const Centered: Story = {
	args: {
		...Default.args,
		fullWidth: true,
		centered: true,
	},
};
export const Filled: Story = {
	args: {
		fullWidth: true,
		centered: true,
		children: (
			<>
				<Button rounded="none" centered variant="text" fullWidth onClick={() => {}}>
					Button 1
				</Button>
				<Button rounded="none" centered variant="text" fullWidth onClick={() => {}}>
					Button 2
				</Button>
			</>
		),
	},
};
export const IconButtons: Story = {
	args: {
		children: (
			<>
				<IconButton icon="check" rounded="none" variant="text" onClick={() => {}} />
				<IconButton icon="user" rounded="none" variant="text" onClick={() => {}} />
				<IconButton icon="script" rounded="none" variant="text" onClick={() => {}} />
			</>
		),
	},
};
