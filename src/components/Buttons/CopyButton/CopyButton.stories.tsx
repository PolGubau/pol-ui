import type { Meta, StoryObj } from "@storybook/react";
import CopyButton from "./CopyButton";
import { Field } from "../../Inputs";
import { Text } from "../../Text";
import texts from "../../Text/Story/data.json";
const meta = {
	title: "Buttons/CopyButton",
	component: CopyButton,
	tags: ["autodocs"],
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { valueToCopy: "Copy me!" },
};
export const WithNumber: Story = {
	args: { valueToCopy: 486 },
};
export const WithObject: Story = {
	args: {
		valueToCopy: {
			name: "John Doe",
			age: 42,
		},
	},
};
export const CustomValue: Story = {
	render: (args) => (
		<div className="flex gap-4 flex-col">
			<CopyButton {...args} value="Copy this!" />
			<Field label="Paste here"></Field>
		</div>
	),
	args: {
		valueToCopy: {
			name: "John Doe",
			age: 42,
		},
		value: "Copy!",
	},
};
export const WitoutConfetti: Story = {
	args: { valueToCopy: "Copy me!", hasConfetti: false },
};
export const CopyLargeText: Story = {
	render: (args) => (
		<div className="flex gap-4 flex-col">
			<Text value={texts.longText} />

			<CopyButton {...args} value="Copy" valueToCopy={texts.longText} />
		</div>
	),
	args: {
		value: "Copy",
		valueToCopy: texts.longText,
	},
};
