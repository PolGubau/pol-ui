import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../Toast";
import { dangerToast, defaultToast, successToast, toastWithAction } from "./exampleToast";

const meta = {
	title: "Popups/Toast",
	component: Toast,
	tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		toast: defaultToast,
		onClose: () => console.log("onClose"),
	},
};
export const SuccessToast: Story = {
	args: {
		toast: successToast,
		onClose: () => console.log("onClose"),
	},
};
export const DangerToast: Story = {
	args: {
		toast: dangerToast,
		onClose: () => console.log("onClose"),
	},
};
export const WithAction: Story = {
	args: {
		toast: toastWithAction,
		onClose: () => console.log("onClose"),
	},
};

export const DarkMode: Story = {
	args: {
		...Default.args,
	},
	render: (args) => (
		<div className="dark">
			<main className="bg-background-inverted w-full h-screen p-8 rounded-lg">
				<Toast {...args} />
			</main>
		</div>
	),
};
