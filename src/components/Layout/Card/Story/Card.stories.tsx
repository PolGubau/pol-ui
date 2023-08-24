import type { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";
import { Text } from "../../../Text";
import { Button } from "../../../Buttons";
import { Grid, GridItem } from "../../Grid";
import { Image } from "../../../Media";
import { Menu } from "../../../Selects";
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
				<Text size={2} value="Download" />
				<Button fullWidth centered>
					Download
				</Button>
			</div>
		),
		hasBorder: true,
		hasShadow: true,
		maxWidth: "md",
		variant: "light",
	},
};
export const Example: Story = {
	args: {
		variant: "info",
		padding: "medium",

		children: (
			<>
				<Grid className="p-4" columns="2" gap={"20px"}>
					<div className="flex gap-2 flex-col">
						<Text size={2} value="Sweden" className="text-light" />
						<Text value="C418" className="text-light" />
					</div>
					<Image
						rounded="rounded"
						src="https://i.ytimg.com/vi/CmU4QPpiVNQ/maxresdefault.jpg"
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
		variant: "light",
		cardHeader: (
			<>
				{" "}
				<Text size={1} value="Current song" />{" "}
				<Menu
					items={[
						{ id: "1", label: "Save" },
						{ id: "1", label: "Delete" },
					]}
					label="More"
				/>
			</>
		),
		padding: "medium",
		children: (
			<>
				<Grid columns="2" gap={"20px"}>
					<div className="flex gap-2 flex-col">
						<Text size={2} value="Sweden" />
						<Text value="C418" />
					</div>
					<Image
						rounded="rounded"
						src="https://i.ytimg.com/vi/CmU4QPpiVNQ/maxresdefault.jpg"
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
export const WithFooter: Story = {
	args: {
		variant: "dark",
		padding: "medium",
		cardFooter: (
			<>
				<Text size={4} value="Login" className="text-light" />{" "}
				<Menu
					items={[
						{ id: "1", label: "With email" },
						{ id: "2", label: "With token" },
					]}
					label="Mode"
				/>
			</>
		),

		children: <Text size={2} value="Not Autorized" className="text-light" />,
	},
};
export const SideLarge: Story = {
	args: {
		padding: "medium",
		maxWidth: "xl",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		),
	},
};
export const SideSmall: Story = {
	args: {
		padding: "medium",
		maxWidth: "xs",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		),
	},
};
export const SideFull: Story = {
	args: {
		padding: "medium",
		maxWidth: "full",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		),
	},
};
export const SquareCard: Story = {
	args: {
		padding: "medium",
		rounded: "square",
		children: (
			<Text value="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." />
		),
	},
};
export const CircularCard: Story = {
	args: {
		padding: "medium",
		rounded: "circular",
		children: <Text value="lorem ipsum dolor sit amet." />,
	},
};
