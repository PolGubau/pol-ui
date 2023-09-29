import type { Meta, StoryObj } from "@storybook/react";
import DeleteButton from "./DeleteButton";
import { Variants, Colors, ModalProps, Sides } from "../../../types";

const meta = {
	title: "Buttons/DeleteButton",
	component: DeleteButton,
	tags: ["autodocs"],
} satisfies Meta<typeof DeleteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The delete button is a shorthand for a trash icon, with a delete icon by default and it triggers a Modal onClick, this is used for displaying a 'Are you sure' prompt.",
			},
		},
	},
	args: {
		onTriggerModal(modal: ModalProps) {
			alert(
				`A modal with name ${modal.title} was triggered, when clicking Confirm in the modal, the onConfirm function is called`
			);
		},
		onConfirm() {
			console.log("Confirm");
		},
		iconPosition: Sides.right,
	},
};

export const WithText: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"You can customize the children of the button, if there is not children, an IconButton will be rendered, if not, a regular Button.",
			},
		},
	},
	args: {
		...Default.args,
		children: "Delete",
	},
};
export const ChangeIconPosition: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"You can customize the side of the icon position, by default will be right (Sides.right).",
			},
		},
	},
	args: {
		...Default.args,
		children: "Delete",
		iconPosition: Sides.left,
	},
};
export const CustomModal: Story = {
	parameters: {
		docs: {
			description: {
				story: "You can customize the modal content and title.",
			},
		},
	},
	args: {
		...Default.args,
		children: "Delete",
		modalChildren: "This is a custom modal",
		modalTitle: "Custom Modal",
	},
};
export const CustomColor: Story = {
	parameters: {
		docs: {
			description: {
				story: `As a normal button, you can customize the color but the default will be ${Colors.danger} (Colors.danger).`,
			},
		},
	},
	args: {
		...Default.args,
		children: "Delete",
		color: Colors.info,
	},
};
export const CustomVariant: Story = {
	parameters: {
		docs: {
			description: {
				story: `As a normal button, you can customize the variant but the default will be ${Variants.filled} (Variants.filled).`,
			},
		},
	},
	args: {
		...Default.args,
		variant: Variants.outlined,
	},
};
