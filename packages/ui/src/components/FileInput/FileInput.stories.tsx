import type { Meta, StoryFn } from "@storybook/react";
import type { Colors } from "../../types";
import { ColorsEnum } from "../../types/enums";
import type { FileInputProps } from "./FileInput";
import { FileInput } from "./FileInput";

export default {
	title: "Components/FileInput",
	component: FileInput,
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col items-center h-full">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

const Template: StoryFn<FileInputProps> = (args) => <FileInput {...args} />;

export const DefaultFileInput = Template.bind({});
DefaultFileInput.storyName = "FileInput";
DefaultFileInput.args = {};

//
export const HelperText = Template.bind({});
HelperText.storyName = "With helper text";
HelperText.args = {
	helperText: "This file accepts only .pdf files",
	accept: ".pdf",
};

export const AllColors = (args: FileInputProps) => (
	<div className="flex flex-wrap items-center gap-3 ">
		{Object.keys(ColorsEnum).map((color) => (
			<FileInput {...args} color={color as Colors} key={color} />
		))}
	</div>
);
