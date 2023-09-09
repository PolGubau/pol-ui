import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import { Button, Link } from "../../Buttons";
import { Image } from "../../Media";
import { Navbar } from "../../Navigation";
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
export const WithoutIcons: Story = {
	args: {
		hasIcon: false,
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
			<div className="flex flex-col gap-4 bg-sky-100 ring ring-sky-400">
				<Navbar logo="MyApp" />
				<main className="flex gap-4">
					<div className="">
						<Accordion {...args} />
					</div>
					<div className="">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
							quibusdam. Quisquam, voluptatum quibusdam. Quisquam, voluptatum
						</p>
					</div>
				</main>
			</div>
		);
	},
	args: {
		maxWidth: "xs",
		defaultOpened: [0],
		titleSize: 6,
		hasBorder: false,
		rounded: "xl",
		data: [
			{
				title: "Home",
				content: (
					<div className="flex flex-col gap-2">
						<Link variant="text" href="/nowhere">
							Dashboard
						</Link>
					</div>
				),
			},
			{
				title: "Profile",
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
