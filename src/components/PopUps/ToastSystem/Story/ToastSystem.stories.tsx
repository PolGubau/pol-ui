import type { Meta, StoryObj } from "@storybook/react";
import { dangerToast, defaultToast, successToast, toastWithAction } from "./exampleToast";
import ToastSystem from "../ToastSystem";

const meta = {
	title: "Popups/ToastSystem",
	component: ToastSystem,
} satisfies Meta<typeof ToastSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		toasts: [defaultToast, dangerToast],
	},
};
export const LotsOfToasts: Story = {
	args: {
		toasts: [defaultToast, dangerToast, successToast, toastWithAction],
	},
};
export const Horizontal: Story = {
	args: {
		direction: "x",
		toasts: [defaultToast, dangerToast, successToast],
	},
};
export const Overflow: Story = {
	args: {
		toasts: [
			defaultToast,
			dangerToast,
			successToast,
			dangerToast,
			successToast,
			toastWithAction,
			defaultToast,
			dangerToast,
			successToast,
			dangerToast,
			successToast,
			toastWithAction,
		],
	},
};
export const OverflowHorizontal: Story = {
	args: {
		direction: "x",
		toasts: [
			defaultToast,
			dangerToast,
			successToast,
			dangerToast,
			successToast,
			toastWithAction,
			defaultToast,
			dangerToast,
			successToast,
			dangerToast,
			successToast,
			toastWithAction,
		],
	},
};
