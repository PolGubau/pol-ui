import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { cn } from "../../helpers";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import type { DrawerProps } from "../Drawer/Drawer";
import { Input } from "../Input";
import { Label } from "../Label";
import { DrawerDialog } from "./DrawerDialog";
type Story = StoryObj<typeof DrawerDialog>;

const meta: Meta<typeof DrawerDialog> = {
	title: "Components/DrawerDialog",
	component: Dialog,
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col justify-center items-center">
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
export default meta;

const Template: StoryFn<DrawerProps> = (args) => {
	return (
		<DrawerDialog {...args}>
			<ProfileForm />
		</DrawerDialog>
	);
};

export const Example: Story = Template.bind({});
function ProfileForm({ className }: React.ComponentProps<"form">) {
	return (
		<form className={cn("grid items-start gap-4", className)}>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					id="email"
					defaultValue="pol.gubau@mesalvo.com"
					label="email"
				/>
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	);
}
