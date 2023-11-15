import type { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "../Autocomplete";
import {
	mockSelectIdName,
	mockSelectJustNames,
	withComplexeObject,
	withComplexeObjectWithName,
} from "./mockObjects";
import { Variants } from "../../../../types";

const meta = {
	title: "Selects/Autocomplete",
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="p-8 h-96 bg-primary/10 rounded-xl">
				<Story />
			</div>
		),
	],
	component: Autocomplete,
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { options: mockSelectJustNames, variant: Variants.filled, fullWidth: false },
};
export const MainSelect: Story = {
	args: { ...Default.args, variant: Variants.filled },
};
export const TextSelect: Story = {
	args: { ...Default.args, variant: Variants.text },
};
export const OutlinedSelect: Story = {
	args: { ...Default.args, variant: Variants.outlined },
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
	args: { ...Default.args, fullWidth: true, variant: Variants.filled },
};
export const FullWidthOutlined: Story = {
	args: { ...Default.args, fullWidth: true, variant: Variants.outlined },
};
export const FullWidthText: Story = {
	args: { ...Default.args, fullWidth: true, variant: Variants.text },
};
export const ItemsWithIDAndName: Story = {
	args: { ...Default.args, options: mockSelectIdName },
};
export const ComplexeWithoutNameField: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="flex flex-col gap-2">
			<small>
				We sent a complex object without specifying the keyField and name doesn't exist in the
				object, so the first key is chosed (id)
			</small>
			<Autocomplete {...args} options={withComplexeObject} />
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
			<Autocomplete {...args} value={withComplexeObjectWithName[0]} />
		</div>
	),
};
export const ComplexeSpecifyingName: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="flex flex-col gap-2">
			<small>We sent a complex object with keyField, so the keyField is chosed (title)</small>
			<Autocomplete {...args} value={withComplexeObject[0]} keyField="title" />
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
			<Autocomplete {...args} options={withComplexeObjectWithName} />
		</div>
	),
};
