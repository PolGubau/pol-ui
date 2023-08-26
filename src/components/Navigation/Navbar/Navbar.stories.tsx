import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { Link } from "../../Buttons/Link";
import { ReactComponent as Logo } from "../../../assets/logo/Logo.svg";
import { Menu } from "../../Selects";
import { Icon } from "../../Icon";
import { mockText } from "./MockText";

const meta = {
	title: "Navigation/Navbar",
	component: Navbar,
	tags: ["autodocs"],

	decorators: [
		(Story) => (
			<div className="w-full relative overflow-auto h-[300px] items-center  bg-blue-300 ring-1 ring-primary">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		logo: <Logo width={"25px"} />,
		children: (
			<ul className="flex gap-2">
				<Menu
					label="Menu"
					buttonVariant="text"
					items={[{ label: "Item 1" }, { label: "Item 2" }]}
				/>
				<Link href="/1" type="text">
					Link
				</Link>
				<Link href="/2" type="text">
					Link
				</Link>
			</ul>
		),
	},
};
export const CustomBackground: Story = {
	args: {
		...Default.args,
		backgroundColor: "#b3e99e",
	},
};
export const WithCTA: Story = {
	args: {
		...Default.args,
		cta: {
			label: "Sign Up",
			href: "/signup",
		},
	},
};
export const Searchable: Story = {
	args: {
		...Default.args,
		handleSearch: (newValue: string) => console.log(newValue),
	},
};
export const CustomRightPart: Story = {
	args: {
		...Default.args,
		customRight: <Icon alwaysRender icon="🤨" size="md" />,
	},
};
export const LargeContent: Story = {
	render: () => (
		<>
			<Navbar {...Default.args} />
			<p className="p-8 leading-loose">{mockText}</p>
		</>
	),
	args: {
		...Default.args,
	},
};
export const Fixed: Story = {
	render: () => (
		<>
			<Navbar {...Default.args} position={"fixed"} />
			<p className="p-8 leading-loose">{mockText}</p>
		</>
	),
	args: {
		...Default.args,
		position: "fixed",
	},
};
export const Absolute: Story = {
	render: () => (
		<>
			<Navbar {...Default.args} position={"absolute"} />
			<p className="p-8 leading-loose">{mockText}</p>
		</>
	),
	args: {
		...Default.args,
		position: "absolute",
	},
};
export const Sticky: Story = {
	render: () => (
		<>
			<Navbar {...Default.args} position={"sticky"} />
			<p className="p-8 leading-loose">{mockText}</p>
		</>
	),
	args: {
		...Default.args,
		position: "sticky",
	},
};
export const StickyWithMargin: Story = {
	render: () => (
		<div className="mb-4">
			<Navbar {...Default.args} position={"sticky"} className="mt-4" />
			<p className="p-8 leading-loose">{mockText}</p>
		</div>
	),
	args: {
		...Default.args,
		position: "sticky",
	},
};
