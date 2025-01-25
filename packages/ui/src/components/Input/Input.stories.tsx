import type { Meta, StoryFn } from "@storybook/react";
import { TbAt, TbEye, TbUser } from "react-icons/tb";

import type { Colors } from "../../types";
import { ColorsEnum } from "../../types/enums";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Input } from "./Input";
import type { InputProps } from "./props";

export default {
	title: "Components/Inputs/Input",
	component: Input,
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col w-full">
				<div className="max-w-xl">
					<Story />
				</div>
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.storyName = "Text input";
Default.args = {
	placeholder: "pol@ui.com",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	placeholder: "pol@ui.com",
};
export const WithPlaceholderAndLabel = Template.bind({});
WithPlaceholderAndLabel.args = {
	placeholder: "pol@ui.com",
	label: "Email",
};
export const LeftLabel = Template.bind({});
LeftLabel.args = {
	placeholder: "pol@ui.com",
	label: "Email",
	labelPosition: "left",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	placeholder: "Username",
	leftComponent: <TbUser className="ml-1" />,
};
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
	placeholder: "Email",
	rightComponent: <TbAt />,
};
export const WithHelperText = Template.bind({});
WithHelperText.args = {
	placeholder: "Email",
	helperText: "Helper text",
};

export const AllColors = () => (
	<div className="flex flex-col gap-4">
		{Object.keys(ColorsEnum).map((color) => (
			<Input
				key={color}
				placeholder={color}
				color={color as Colors}
				rightComponent={<TbAt />}
			/>
		))}
	</div>
);
export const AllColorsFilled = () => (
	<div className="flex flex-col gap-4">
		{Object.keys(ColorsEnum).map((color) => (
			<Input
				key={color}
				placeholder={color}
				color={color as Colors}
				rightComponent={<TbAt />}
				defaultValue="I am in light mode"
			/>
		))}
	</div>
);
export const AllColorsWithBorder = () => (
	<div className="flex flex-col gap-4">
		{Object.keys(ColorsEnum).map((color) => (
			<Input
				border={true}
				key={color}
				placeholder={color}
				color={color as Colors}
				rightComponent={
					<IconButton
						size="sm"
						variant={"ghost"}
						color={color as Colors}
						onClick={() => {
							alert(color);
						}}
					>
						<TbEye size={18} />
					</IconButton>
				}
				defaultValue="I am in light mode"
			/>
		))}
	</div>
);

export const FullSize = () => (
	<div className="flex justify-between items-center w-full gap-3">
		<Input
			label="Tu email"
			placeholder={"placeholder"}
			rightComponent={<TbAt />}
		/>
		<Button>Button</Button>
	</div>
);
