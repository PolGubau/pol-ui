import type { Meta, StoryObj } from "@storybook/react";
import texts from "./data.json";
import Text from "../Text";
import { Colors } from "../../../types";

const meta = {
	title: "Base/Text",
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
		...Default.args,
		as: "h1",
	},
};
export const H2: Story = {
	args: {
		...Default.args,
		as: "h2",
	},
};
export const H3: Story = {
	args: {
		...Default.args,
		as: "h3",
	},
};
export const H4: Story = {
	args: {
		...Default.args,
		as: "h4",
	},
};
export const H5: Story = {
	args: {
		...Default.args,
		as: "h5",
	},
};
export const H6: Story = {
	args: {
		...Default.args,
		as: "h6",
	},
};
export const Weights: Story = {
	args: {
		...Default.args,
		weight: 700,
	},
	render: (args) => (
		<>
			<Text {...args} weight={400} />

			<Text {...args} weight={800} />
		</>
	),
};
export const Italic: Story = {
	args: {
		...Default.args,
		isItalic: true,
	},
};
export const Color: Story = {
	args: {
		...Default.args,
		color: Colors.danger,
	},
};
export const MaxLength: Story = {
	args: {
		...Default.args,
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

export const DarkMode: Story = {
	args: {
		value: texts.shortText,
	},
	render: (args) => (
		<div className="dark ">
			<div className="text-background-inverted  dark:text-background bg-background-inverted p-4">
				<Text {...args} as="h3" />
				<Text {...args} />
			</div>
		</div>
	),
};
