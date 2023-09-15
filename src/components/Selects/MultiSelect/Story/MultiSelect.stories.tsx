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
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { items: mockSelectJustNames, variant: "filled", fullWidth: false },
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
	args: { ...Default.args, fullWidth: true, variant: "normal" },
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
	render: (args) => (
		<div className="flex flex-col gap-2">
			<small>
				We sent a complex object without specifying the keyField and name doesn't exist in the
				object, so the first key is chosed (id)
			</small>
			<MultiSelect {...args} items={withComplexeObject} />
		</div>
	),
};
export const ComplexeWithValue: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="flex flex-col gap-2">
			<small>
				Predefaulted to the value of the first item, so the first item is selected (items[0]). How
				this object has a name fiel, it's the name that is displayed
			</small>
			<MultiSelect {...args} values={[withComplexeObjectWithName[0]]} />
		</div>
	),
};
export const ComplexeSpecifyingName: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="flex flex-col gap-2">
			<small>We sent a complex object with keyField, so the keyField is chosed (title)</small>
			<MultiSelect {...args} values={[withComplexeObject[0]]} keyField="title" />
		</div>
	),
};
export const ComplexeWithNameField: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="flex flex-col gap-2">
			<small>
				We sent a complex object without specifying the keyField but name exists, so name is chosed
			</small>
			<MultiSelect {...args} items={withComplexeObjectWithName} />
		</div>
	),
};
