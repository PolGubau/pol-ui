import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../Modal";
import {
	defaultModal,
	modalWithBothButtons,
	modalWithCutomButtons,
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
	},
};
