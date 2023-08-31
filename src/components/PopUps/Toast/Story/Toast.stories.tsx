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
		toast: defaultToast,
		onClose: () => alert("onClose"),
	},
};
export const SuccessToast: Story = {
	args: {
		toast: successToast,
		onClose: () => alert("onClose"),
	},
};
export const DangerToast: Story = {
	args: {
		toast: dangerToast,
		onClose: () => alert("onClose"),
	},
};
export const WithAction: Story = {
	args: {
		toast: toastWithAction,
		onClose: () => alert("onClose"),
	},
};
