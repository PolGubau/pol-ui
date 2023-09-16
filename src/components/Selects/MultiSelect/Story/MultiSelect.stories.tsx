import type { Meta, StoryObj } from "@storybook/react";
import MultiSelect from "../MultiSelect";
import {
	mockSelectIdName,
	mockSelectJustNames,
	withComplexeObject,
	withComplexeObjectWithName,
} from "./mockSelects";

const meta = {
	title: "Selects/MultiSelect",
	component: MultiSelect,
	tags: ["autodocs"],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { options: mockSelectJustNames, variant: "filled", fullWidth: false },
};
export const MainSelect: Story = {
	args: { ...Default.args, variant: "filled" },
};
export const TextSelect: Story = {
	args: { ...Default.args, variant: "text" },
};
export const OutlinedSelect: Story = {
	args: { ...Default.args, variant: "outlined" },
};
export const CustomIcon: Story = {
	args: { ...Default.args, buttonIcon: "script" },
};
export const WithPlaceholder: Story = {
	args: {
		...Default.args,
		placeholder: "Before choosing, think twice",
	},
};
export const WithLabel: Story = {
	args: { ...Default.args, label: "Select your favorite" },
};
export const FullWidth: Story = {
	args: { ...Default.args, fullWidth: true, variant: "filled" },
};
export const FullWidthOutlined: Story = {
	args: { ...Default.args, fullWidth: true, variant: "outlined" },
};
export const FullWidthText: Story = {
	args: { ...Default.args, fullWidth: true, variant: "text" },
};
export const ItemsWithIDAndName: Story = {
	args: { ...Default.args, options: mockSelectIdName },
};
export const ComplexeWithoutNameField: Story = {
	args: { ...Default.args, options: withComplexeObject },
	parameters: {
		docs: {
			description: {
				story:
					"We sent a complex object without specifying the keyField and name doesn't exist in the object, so the first key is chosed (id)",
			},
		},
	},
};

export const ComplexeValueAndOptions: Story = {
	args: { ...Default.args, values: [withComplexeObject[0]], options: withComplexeObject },
	parameters: {
		docs: {
			description: {
				story:
					"An object without name field neither keyField is sent as value, so the first key is chosed (id)",
			},
		},
	},
};
export const ComplexeSpecifyingName: Story = {
	args: { ...Default.args, keyField: "title", options: withComplexeObject },
	parameters: {
		docs: {
			description: {
				story: "We sent a complex object with keyField, so the keyField is chosed (title)",
			},
		},
	},
};
export const ComplexeWithNameField: Story = {
	args: { ...Default.args, options: withComplexeObjectWithName },
	parameters: {
		docs: {
			description: {
				story:
					"We sent a complex object without specifying the keyField but name exists, so name is chosed",
			},
		},
	},
};
