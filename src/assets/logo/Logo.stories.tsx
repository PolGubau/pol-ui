import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";
import { Link, Text } from "../../components";

const meta = {
	title: "Welcome",
	component: Logo,
	tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<>
			<Text as="h1">Hello</Text>
			<Text>
				You'll find here some examples of Pol/ui potential, have a great time and contact us in case
				of doubts.
			</Text>
			<Link href="mailto:gubaupol@gmail.com" className="underline my-8">
				Author's email
			</Link>
			<Logo />
		</>
	),
};
