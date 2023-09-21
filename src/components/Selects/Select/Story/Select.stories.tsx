import type { Meta, StoryObj } from "@storybook/react";
import Select from "../Select";
import {
	mockSelectIdName,
	mockSelectJustNames,
	withComplexeObject,
	withComplexeObjectWithName,
} from "./mockSelects";

const meta = {
	title: "Selects/Select",
	component: Select,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="p-8 h-96 bg-primary/10 ">
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { items: mockSelectJustNames, fullWidth: false },
};
export const Nullable: Story = {
	args: { ...Default.args, nullable: true },
};
export const MainSelect: Story = {
	args: { ...Default.args, color: "accent" },
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
	args: { ...Default.args, fullWidth: true },
};
export const FullWidthOutlined: Story = {
	args: { ...Default.args, fullWidth: true, variant: "outlined" },
};
export const FullWidthText: Story = {
	args: { ...Default.args, fullWidth: true, variant: "text" },
};
export const ItemsWithIDAndName: Story = {
	args: { ...Default.args, items: mockSelectIdName },
};
export const ComplexeWithoutNameField: Story = {
	args: { ...Default.args },
	parameters: {
		docs: {
			description: {
				story:
					"We sent a complex object without specifying the keyField and name doesn't exist in the object, so the first key is chosed (id)",
			},
		},
	},
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Select {...args} items={withComplexeObject} />
		</div>
	),
};
export const ComplexeWithValue: Story = {
	args: { ...Default.args, value: withComplexeObjectWithName[0] },
	parameters: {
		docs: {
			description: {
				story:
					"Predefaulted to the value of the first item, so the first item is selected (items[0]). How this object has a name fiel, it's the name that is displayed",
			},
		},
	},
};
export const ComplexeSpecifyingName: Story = {
	args: { ...Default.args, value: withComplexeObject[0], keyField: "title" },
	parameters: {
		docs: {
			description: {
				story: "We sent a complex object with keyField, so the keyField is chosed (title)",
			},
		},
	},
};
export const ComplexeWithNameField: Story = {
	args: { ...Default.args, items: withComplexeObjectWithName },
	parameters: {
		docs: {
			description: {
				story:
					"We sent a complex object without specifying the keyField but name exists, so name is chosed",
			},
		},
	},
};
