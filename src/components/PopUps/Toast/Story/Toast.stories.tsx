import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../Toast";
import { dangerToast, defaultToast, successToast, toastWithAction } from "./exampleToast";

const meta = {
	title: "Popups/Toast",
	component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		state: defaultToast,
	},
};
export const SuccessToast: Story = {
	args: {
		state: successToast,
	},
};
export const DangerToast: Story = {
	args: {
		state: dangerToast,
	},
};
export const WithAction: Story = {
	args: {
		state: toastWithAction,
	},
};
