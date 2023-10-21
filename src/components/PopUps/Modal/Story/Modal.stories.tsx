import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../Modal";
import {
	defaultModal,
	defaultModalWithSelect,
	modalWithBothButtons,
	modalWithCutomButtons,
	modalWithLogin,
	modalWithoutButtons,
	rounded,
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
		state: {
			...defaultModal,
			padding: "none",
		},
	},
};
export const LargePadding: Story = {
	args: {
		state: {
			...defaultModal,
			padding: "xl",
		},
	},
};
export const SmallRounded: Story = {
	args: {
		state: {
			...defaultModal,
			rounded: "sm",
		},
	},
};
export const LargeRounded: Story = {
	args: {
		state: {
			...defaultModal,
			rounded: "xl",
		},
	},
};
export const FullRounded: Story = {
	args: {
		state: {
			...rounded,
			centered: true,
			rounded: "full",
		},
	},
};
export const WithoutClosingButton: Story = {
	args: {
		state: {
			...rounded,
			hasCloseButton: false,
			centered: true,
			rounded: "full",
		},
	},
};
export const CustomTransition: Story = {
	render: (args) => (
		<>
			<Modal {...args} />
		</>
	),
	args: {
		...Default.args,
		state: {
			...modalWithLogin,
			transitionDuration: 3,
		},
	},
};
export const CustomTransition2: Story = {
	render: (args) => (
		<>
			<Modal {...args} />
		</>
	),
	args: {
		...Default.args,
		state: {
			...modalWithLogin,
			transitionDuration: 0.1,
			transitionMovement: 30,
		},
	},
};
export const CustomTransition3: Story = {
	render: (args) => (
		<>
			<Modal {...args} />
		</>
	),
	args: {
		...Default.args,
		state: {
			...modalWithLogin,
			transitionDuration: 2,
			transitionMovement: 300,
		},
	},
};
export const CustomTransition4: Story = {
	render: (args) => (
		<>
			<Modal {...args} />
		</>
	),
	args: {
		...Default.args,
		state: {
			...modalWithLogin,
			transitionDuration: 2,
			transitionMovement: -300,
		},
	},
};
