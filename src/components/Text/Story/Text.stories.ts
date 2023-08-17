import type { Meta, StoryObj } from "@storybook/react";
import texts from "./data.json";
import Text from "../Text";

const meta = {
	title: "Text",
	component: Text,
	tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: texts.shortText,
	},
};

export const H1: Story = {
	args: {
		value: texts.shortText,
		size: 1,
	},
};
export const H2: Story = {
	args: {
		value: texts.shortText,
		size: 2,
	},
};
export const H3: Story = {
	args: {
		value: texts.shortText,
		size: 3,
	},
};
export const H4: Story = {
	args: {
		value: texts.shortText,
		size: 4,
	},
};
export const H5: Story = {
	args: {
		value: texts.shortText,
		size: 5,
	},
};
export const H6: Story = {
	args: {
		value: texts.shortText,
		size: 6,
	},
};
export const Bold: Story = {
	args: {
		value: texts.shortText,
		isBold: true,
	},
};
export const Italic: Story = {
	args: {
		value: texts.shortText,
		isItalic: true,
		isBold: false,
	},
};
export const Color: Story = {
	args: {
		value: texts.shortText,
		color: "#ff0000",
	},
};
export const MaxLength: Story = {
	args: {
		value: texts.shortText,
		maxLength: 5,
	},
};
export const Max1Line: Story = {
	args: {
		value: texts.midText,
		maxLines: 1,
	},
};
export const Max3Lines: Story = {
	args: {
		value: texts.longText,
		maxLines: 3,
	},
};
export const Markdown: Story = {
	args: {
		value: texts.markdown,
		isMarkdown: true,
	},
};
export const MarkdownMax1Line: Story = {
	args: {
		value: texts.markdown,
		isMarkdown: true,
		maxLines: 1,
	},
};
export const Empty: Story = {
	args: {
		value: "",
	},
};
