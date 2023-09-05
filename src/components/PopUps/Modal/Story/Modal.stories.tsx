import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../Modal";
import {
	defaultModal,
	defaultModalWithSelect,
	modalWithBothButtons,
	modalWithCutomButtons,
	modalWithLogin,
	modalWithoutButtons,
} from "./exampleModals";
import { Button } from "../../../Buttons";

const meta = {
	title: "Popups/Modal",
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		state: defaultModal,
	},
};

export const CancelButton: Story = {
	args: {
		state: modalWithBothButtons,
	},
};
export const WithoutButton: Story = {
	args: {
		state: modalWithoutButtons,
	},
};
export const CustomFooter: Story = {
	args: {
		state: modalWithCutomButtons,
	},
};
export const TestingFocus: Story = {
	render: (args) => (
		<div className="flex gap-2 flex-col">
			<Button>Try to tab me</Button>
			<Modal {...args} />
		</div>
	),
	args: {
		...Default.args,
		state: defaultModalWithSelect,
	},
};
export const Complex: Story = {
	render: (args) => (
		<>
			<Modal {...args} state={modalWithLogin} />
		</>
	),
	args: {
		...Default.args,
	},
};
export const NoPadding: Story = {
	args: {
		state: modalWithBothButtons,
		padding: "none",
	},
};
export const LargePadding: Story = {
	args: {
		state: modalWithBothButtons,
		padding: "xl",
	},
};
export const SmallRounded: Story = {
	args: {
		state: modalWithBothButtons,
		padding: "xl",
		rounded: "none",
	},
};
export const LargeRounded: Story = {
	args: {
		state: modalWithBothButtons,
		padding: "sm",
		rounded: "xl",
	},
};
export const FullRounded: Story = {
	args: {
		state: modalWithBothButtons,
		padding: "xl",
		rounded: "full",
	},
};
