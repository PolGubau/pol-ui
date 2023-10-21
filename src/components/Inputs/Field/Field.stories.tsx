import type { Meta, StoryObj } from "@storybook/react";
import { Field } from ".";
import { Variants } from "../../../types";

const meta = {
	title: "Inputs/Field",
	component: Field,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="p-8 bg-background">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Input",
	},
};
export const WithValue: Story = {
	args: {
		label: "Input",
		value: "This is a value",
	},
};
export const Filled: Story = {
	args: {
		label: "Input",
		value: "This is a value",
		variant: Variants.filled,
	},
};
export const Text: Story = {
	args: {
		label: "Input",
		value: "This is a value",
		variant: Variants.text,
	},
};
export const NumberType: Story = {
	args: {
		label: "Number Input",
		type: "number",
	},
};
export const DateField: Story = {
	args: {
		label: "Date Input",
		type: "date",
	},
};
export const HelperText: Story = {
	args: {
		label: "Input",
		helperText: "This is a helper text",
	},
};
export const InputWithError: Story = {
	args: {
		label: "Input",
		error: "This is an error",
	},
};
export const InputWithHelperTextAndError: Story = {
	args: {
		label: "Input",
		helperText: "This is a helper text",
		error: "This is an error",
	},
};
export const Disabled: Story = {
	args: {
		label: "I'm disabled",
		disabled: true,
	},
};
export const MaxLength: Story = {
	args: {
		label: "No more than 10 characters",
		maxLength: 10,
	},
};
export const Multiline: Story = {
	args: {
		multiline: true,
	},
};
export const MultilineWithLabels: Story = {
	args: {
		label: "Input",
		multiline: true,
	},
};
export const DateInput: Story = {
	args: {
		label: "Date",
		type: "date",
	},
};
export const Email: Story = {
	args: {
		label: "Email",
		value: "youremail@email.com",
		type: "email",
	},
};

export const InvalidEmail: Story = {
	args: {
		error: "Your email is invalid",
		label: "A bad email",
		value: "youremail@@",
		type: "email",
	},
};
export const FullWidth: Story = {
	args: {
		label: "Email",
		value: "youremail@email.com",
		type: "email",
		fullWidth: true,
	},
};

export const AllTypes: Story = {
	render: (args) => (
		<div className="dark:bg-background-inverted p-8 flex gap-4 flex-col">
			<Field variant={Variants.outlined} {...args} />
			<Field variant={Variants.filled} {...args} />
			<Field variant={Variants.text} {...args} />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const DarkMode: Story = {
	render: (args) => (
		<div className="dark">
			<div className="dark:bg-background-inverted p-8 flex gap-4 flex-col">
				<Field variant={Variants.outlined} {...args} />
				<Field variant={Variants.filled} {...args} />
				<Field variant={Variants.text} {...args} />
			</div>
		</div>
	),
	args: {
		...Default.args,
	},
};
