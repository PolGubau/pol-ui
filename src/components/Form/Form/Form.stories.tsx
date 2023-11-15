import type { Meta, StoryObj } from "@storybook/react";

import { Field, Switch } from "../../Inputs";
import Form from "./Form";

const meta = {
	title: "Form/Form",
	component: Form,
	tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The carousel is a component that allows you to display a series of items in a horizontal scrollable container. It is responsive and supports touch gestures.",
			},
		},
	},
	args: {
		onSubmit() {
			alert("Submitted");
		},

		children: (
			<>
				<Field label="First Name" name="firstName" />
				<Field label="Last Name" name="lastName" />
				<Switch checked={true} onChange={() => {}} label="Accept our boring text" />
			</>
		),
	},
	render: (args) => <Form {...args}></Form>,
};
