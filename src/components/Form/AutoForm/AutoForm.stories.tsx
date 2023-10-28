import type { Meta, StoryObj } from "@storybook/react";
import AutoForm from "./AutoForm";
const meta = {
	title: "Form/AutoForm",
	component: AutoForm,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="w-full p-8 bg-background dark:bg-background-inverted">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof AutoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		inputs: [
			{
				label: "First Name",
				name: "firstName",
				type: "text",
				value: "John",
			},
			{
				label: "Age",
				name: "age",
				type: "number",
				value: 15,
			},
			{
				label: "Birthday",
				name: "birthday",
				type: "date",
				value: "2021-01-01",
			},
			{
				label: "Save your birthday?",
				name: "saveBirthday",
				type: "switch",
			},
			{
				label: "Bio",
				name: "bio",
				type: "textarea",
				value: "I am a cool guy",
			},
			{
				type: "range",
				label: "Range",
				name: "range",
				value: 5,
				step: 1,
			},
			{
				type: "selectMultiple",
				items: ["Green", "Blue", "Red", "Yellow", "Orange"],
				label: "Favorite color",
				placeholder: "Select your favorite colors",
			},
			{
				type: "autocomplete",
				items: [
					"White Chicks",
					"The Matrix",
					"Shrek",
					"Harry Potter",
					"Terminator",
					"Titanic",
					"Back to the Future",
					"Star Wars",
					"Alien",
					"Rocky",
					"Jaws",
					"Die Hard",
					"Ghostbusters",
					"Home Alone",
					"Gladiator",
					"Braveheart",
					"Toy Story",
				],
				placeholder: "Choose a film",

				label: "Favorite film",
				name: "autocomplete",
			},
			{
				type: "checkbox",
				label: "Do you like this form?",
			},
			{
				type: "radio",
				label: "Do you like this form?",
			},
			{
				type: "radioGroup",
				items: ["I like it", "I don't like it", "I don't care"],
				selectedValue: 0,
				direction: "x",

				label: "Do you like this form? **(Meant to be controlled)**",
			},
		],
	},
};

export const Row: Story = {
	args: {
		direction: "row",
		onSubmit: () => {
			alert("Submitted");
		},
		inputs: [
			{
				label: "First Name",
				type: "text",
			},
			{
				label: "Age",
				type: "number",
			},
		],
	},
};

export const DarkMode: Story = {
	args: {
		...Default.args,
	},
	render: (args) => (
		<div className="dark">
			<div className="w-full p-8 bg-background dark:bg-background-inverted">
				<AutoForm {...args} />
			</div>
		</div>
	),
};
export const CustomTheme: Story = {
	args: {
		...Default.args,
	},
	render: (args) => (
		<div className="trackup">
			<div className="w-full p-8 bg-background dark:bg-background-inverted">
				<AutoForm {...args} />
			</div>
		</div>
	),
};
