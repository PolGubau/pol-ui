import type { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";
import { Text } from "../../../Text";
import { Button } from "../../../Buttons";
import { Grid, GridItem } from "../../Grid";
import { Image } from "../../../Media";
import { Menu } from "../../../Selects";
import { Stack } from "../../Stack";
import { Icon } from "../../../Base";
const meta = {
	title: "Layout/Card",
	component: Card,
	tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div className="p-4">
				<Text as="h2" value="Click" />
				<Button centered>Download</Button>
			</div>
		),
		hasBorder: true,
		shadow: "md",
		maxWidth: "md",
		color: "background",
	},
};
export const Example: Story = {
	args: {
		color: "info",
		padding: "md",

		children: (
			<>
				<Grid className="p-4" cols={2} gap={"20px"}>
					<div className="flex gap-2 flex-col">
						<Text as="h2" value="Sweden" className="text-light" />
						<Text value="C418" className="text-light" />
					</div>
					<Image
						rounded="full"
						src="https://i.ytimg.com/vi/Wu-JGgR2f0k/maxresdefault.jpg"
						alt="Sweden"
						width="100%"
					/>
					<GridItem howManyColumns="2">
						<Button fullWidth centered>
							Download
						</Button>
					</GridItem>
				</Grid>
			</>
		),
	},
};
export const WithHeader: Story = {
	args: {
		cardHeader: (
			<Stack gap={"6px"}>
				<Icon icon="user" />
				<Text value="Login" />
			</Stack>
		),
		padding: "md",
		maxWidth: "xs",
		children: (
			<Text value="Your account is being verified now by our staff." className="text-light" />
		),
	},
};
export const WithFooter: Story = {
	args: {
		padding: "md",
		cardFooter: (
			<Stack>
				<Text value="Login" className="text-light" />
				<Menu
					options={[
						{ id: "1", label: "With email" },
						{ id: "2", label: "With token" },
					]}
					label="Mode"
				/>
			</Stack>
		),

		children: <Text as="h4" value="Not Autorized" className="text-light" />,
	},
};
export const SideLarge: Story = {
	args: {
		padding: "md",
		maxWidth: "xl",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		),
	},
};
export const SideSmall: Story = {
	args: {
		padding: "md",
		maxWidth: "xs",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		),
	},
};
export const SideFull: Story = {
	args: {
		padding: "md",
		maxWidth: "full",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		),
	},
};
export const SquareCard: Story = {
	args: {
		padding: "md",
		rounded: "none",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." />
		),
	},
};
export const CircularCard: Story = {
	args: {
		padding: "md",
		rounded: "full",
		children: <Text value="lorem ipsum dolor sit amet." />,
	},
};
