import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import { Button, Link } from "../../Buttons";
import { Image } from "../../Media";
import { Navbar } from "../../Navigation";
import { IconNames } from "../../Base";
import { Card } from "../Card";
import { Grid } from "../Grid";
import { Text } from "../../Text";
import { Stack } from "../Stack";
const meta = {
	title: "Layout/Accordion",
	component: Accordion,
	tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: [
			{
				title: "Title 1",
				content: "Content 1",
			},
			{
				title: "Title 2",
				content: "Content 2",
			},
			{
				title: "Title 3",
				content: "Content 3",
			},
		],
	},
};
export const NoPaintOpened: Story = {
	args: {
		paintOpened: false,
		data: [
			{
				title: "Title 1",
				content: "Content 1",
			},
			{
				title: "Title 2",
				content: "Content 2",
			},
			{
				title: "Title 3",
				content: "Content 3",
			},
		],
	},
};
export const Multiple: Story = {
	args: {
		openMode: "multiple",
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
			},
		],
	},
};
export const CustomIcons: Story = {
	args: {
		openMode: "multiple",
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
				icon: "user",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
				icon: "🌍",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
				icon: "🌟",
			},
		],
	},
};
export const DefaultOpenedMultiple: Story = {
	args: {
		openMode: "multiple",
		defaultOpened: [0, 1],
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
				icon: "🎇",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
				icon: "🌍",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
				icon: "🌟",
			},
		],
	},
};
export const DefaultOpenedSingle: Story = {
	args: {
		openMode: "single",
		defaultOpened: [1],
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
				icon: "🎇",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
				icon: "🌍",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
				icon: "🌟",
			},
		],
	},
};
export const RoundedXl: Story = {
	args: {
		rounded: "xl",
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const Square: Story = {
	args: {
		rounded: "xs",
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const Borderless: Story = {
	args: {
		hasBorder: false,
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const WithoutDivider: Story = {
	args: {
		hasDividers: false,
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const Minimalist: Story = {
	args: {
		hasBorder: false,
		hasDividers: false,
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const MaxWidthXs: Story = {
	args: {
		maxWidth: "xs",
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const WithoutArrowIcons: Story = {
	args: {
		hasArrowIcon: false,
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const WithIcons: Story = {
	args: {
		data: [
			{
				icon: "script",
				title: "One of our icons",
				content: "Our mission is to make the world a better place.",
			},
			{
				icon: "🌍",
				title: "Custom emoji as icon",
				content: "Our vision is to make the world a better place.",
			},
		],
	},
};
export const CustomContent: Story = {
	args: {
		defaultOpened: [0],
		data: [
			{
				title: "Our Mission",
				content: (
					<div className="flex flex-col gap-2">
						<p>Our mission is to make the world a better place.</p>
						<Button>Click me</Button>
					</div>
				),
			},
			{
				title: "Our Vision",
				content: (
					<>
						<p>Our vision is to make the world a better place.</p>
						<Image src="https://picsum.photos/seed/picsum/200/300" alt="Random image" />
					</>
				),
			},
		],
	},
};
export const CustomItems: Story = {
	args: {
		defaultOpened: [0],
		data: [
			{
				title: "Our Mission",
				content: (
					<div className="flex flex-col gap-2">
						<p>Our mission is to make the world a better place.</p>
						<Button>Click me</Button>
					</div>
				),
				className: "bg-red-500",
			},
			{
				title: "Our Vision",
				content: (
					<>
						<p>Our vision is to make the world a better place.</p>
						<Image src="https://picsum.photos/seed/picsum/200/300" alt="Random image" />
					</>
				),
				className: "bg-green-500 text-white",
			},
		],
	},
};
export const UsageAsSidebar: Story = {
	render(args) {
		return (
			<div className="flex flex-col ring ring-sky-400">
				<Navbar logo="MyApp" />
				<main className="flex ">
					<div className="min-w-[40%]">
						<Accordion {...args} rounded="none" />
					</div>
					<div className="bg-info/20 p-8">
						<Text
							value={`This component can be used as sidebar how you can see here, but if you use the <SideBar /> component you will have more options as expand prop or min-width, this is a test to explore how Accordion component works, but it isn't a good practice.`}
						/>
					</div>
				</main>
			</div>
		);
	},
	args: {
		maxWidth: "xs",
		defaultOpened: [0],
		hasBorder: false,
		data: [
			{
				title: "Home",
				content: (
					<div className="flex flex-col gap-2">
						<Link variant="text" fullWidth icon={IconNames.database} href="/nowhere">
							Dashboard
						</Link>
						<Link variant="text" fullWidth icon="user" href="/nowhere">
							Menu
						</Link>
						<Link variant="text" fullWidth icon="book" href="/nowhere">
							Docs
						</Link>
					</div>
				),
			},
			{
				title: "Profile",
				content: (
					<div className="flex flex-col gap-2">
						<Link variant="text" fullWidth href="/nowhere">
							Your Profile
						</Link>
						<Link variant="text" fullWidth href="/nowhere">
							Preferences
						</Link>
						<Link variant="text" fullWidth href="/nowhere">
							Data
						</Link>
					</div>
				),
			},
			{
				title: "Export",
				content: (
					<div className="flex flex-col gap-2">
						<Grid rows={2} gap={"10px"}>
							<Card>
								<Stack direction="column" gap="10px" alignItems="start">
									<Text value="Export" />
									<Link fullWidth icon={IconNames.database} href="/nowhere">
										Dashboard
									</Link>
									<Link fullWidth icon="user" href="/nowhere">
										Menu
									</Link>
									<Link fullWidth icon="book" href="/nowhere">
										Docs
									</Link>
								</Stack>
							</Card>

							<Card>
								<Stack direction="column" gap="10px" alignItems="start">
									<Text value="Export 2" />
									<Link fullWidth icon={IconNames.database} href="/nowhere">
										Dashboard
									</Link>
									<Link fullWidth icon="user" href="/nowhere">
										Menu
									</Link>
									<Link fullWidth icon="book" href="/nowhere">
										Docs
									</Link>
								</Stack>
							</Card>
						</Grid>
					</div>
				),
			},
		],
	},
};
