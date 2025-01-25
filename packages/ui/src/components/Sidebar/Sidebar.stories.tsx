import type { Meta, StoryFn } from "@storybook/react";
import {
	TbArrowAutofitUp,
	TbArrowLeft,
	TbArrowRight,
	TbAt,
	TbCoin,
	TbDashboard,
	TbDatabaseSearch,
	TbGraph,
	TbHelp,
	TbHome,
	TbLayout,
	TbLayoutKanban,
	TbMail,
	TbMoneybag,
	TbPaperBag,
	TbPlus,
	TbSearch,
	TbShare,
	TbShoppingBag,
	TbSignRight,
	TbUser,
} from "react-icons/tb";

import { useBoolean } from "../../hooks";
import { ColorsEnum } from "../../types";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Input } from "../Input";
import { Navbar } from "../Navbar";
import { Sidebar, type SidebarProps } from "./Sidebar";
import { SidebarCollapse } from "./SidebarCollapse";
import { SidebarItem } from "./SidebarItem";
import { SidebarLogo } from "./SidebarLogo";

export default {
	title: "Components/Sidebar",
	component: Sidebar,
	decorators: [
		(Story) => (
			<div className="flex overflow-hidden  min-h-[500px] h-[500px] bg-secondary-100 ">
				<Story />
			</div>
		),
	],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;
const Template: StoryFn<SidebarProps> = (args) => {
	const { value, toggle } = useBoolean(false);
	return (
		<div className="bg-secondary-50">
			<Sidebar {...args} open={value} onOpenChange={toggle} />{" "}
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<SidebarItem href="#" icon={TbLayout}>
				Dashboard
			</SidebarItem>
			<SidebarItem href="#" icon={TbLayoutKanban} active={true}>
				Kanban
			</SidebarItem>
			<SidebarItem href="#" icon={TbAt} label="3">
				At
			</SidebarItem>
			<SidebarItem href="#" icon={TbUser}>
				Users
			</SidebarItem>
			<SidebarItem href="#" icon={TbCoin} label="Premium">
				Products
			</SidebarItem>
		</>
	),
};

export const WithoutIcons = Template.bind({});
WithoutIcons.storyName = "No icons";
WithoutIcons.args = {
	children: (
		<>
			<SidebarItem href="#">Dashboard</SidebarItem>
			<SidebarItem href="#" labelColor="alternative">
				Kanban
			</SidebarItem>
			<SidebarItem href="#">At</SidebarItem>
			<SidebarItem href="#">Users</SidebarItem>
			<SidebarItem href="#">Notifications</SidebarItem>
			<SidebarItem href="#">Settings</SidebarItem>
		</>
	),
};
export const HidingCollapse = () => {
	const { value, toggle } = useBoolean(false);

	return (
		<div className="flex gap-4 items-start">
			<Sidebar collapseMode="hide" open={value} onOpenChange={toggle}>
				<SidebarItem href="#" icon={TbLayout}>
					Dashboard
				</SidebarItem>
				<SidebarItem href="#" icon={TbLayoutKanban}>
					Kanban
				</SidebarItem>
				<SidebarItem href="#" icon={TbAt} label="3">
					At
				</SidebarItem>
				<SidebarItem href="#" icon={TbUser}>
					Users
				</SidebarItem>
				<SidebarItem href="#" icon={TbCoin} label="Premium">
					Products
				</SidebarItem>
			</Sidebar>
			<div className="flex m-4">
				<Button onClick={toggle}>
					{value ? <TbArrowRight /> : <TbArrowLeft />}{" "}
				</Button>
			</div>
		</div>
	);
};

export const MultiLevelDropdown = Template.bind({});
MultiLevelDropdown.storyName = "Multi-level dropdown";
MultiLevelDropdown.args = {
	children: (
		<>
			<SidebarItem href="#" icon={TbHome}>
				1
			</SidebarItem>
			<SidebarCollapse icon={TbShoppingBag} badge="2">
				<SidebarItem href="#" label="2.1">
					2.1
				</SidebarItem>
				<SidebarItem href="#">2.2</SidebarItem>
			</SidebarCollapse>
			<SidebarItem href="#" icon={TbAt}>
				3
			</SidebarItem>
			<SidebarItem href="#" icon={TbUser}>
				4
			</SidebarItem>

			<SidebarItem href="#" icon={TbSignRight}>
				5
			</SidebarItem>
			<SidebarItem href="#" icon={TbPlus}>
				6
			</SidebarItem>
		</>
	),
};

export const DefaultExpandedDropdown = Template.bind({});
DefaultExpandedDropdown.args = {
	children: (
		<>
			<SidebarItem href="#" icon={TbGraph}>
				Dashboard
			</SidebarItem>
			<SidebarCollapse icon={TbCoin} badge="Shop" defaultOpen={true}>
				<SidebarItem icon={TbMoneybag} href="#">
					Products
				</SidebarItem>
			</SidebarCollapse>
			<SidebarCollapse icon={TbShare} badge="Share" defaultOpen={true}>
				<SidebarItem href="#">Usage Summary</SidebarItem>
			</SidebarCollapse>
			<SidebarCollapse icon={TbShare} badge="Share" defaultOpen={true}>
				<SidebarItem href="#">Usage Summary</SidebarItem>
			</SidebarCollapse>
			<SidebarItem href="#" icon={TbMail}>
				Mail
			</SidebarItem>
			<SidebarItem href="#" icon={TbUser}>
				Users
			</SidebarItem>
			<SidebarItem href="#" icon={TbCoin}>
				Coin
			</SidebarItem>
		</>
	),
};

export const ContentSeparator = Template.bind({});
ContentSeparator.storyName = "Content separator";
ContentSeparator.args = {
	children: (
		<>
			<SidebarItem href="#" icon={TbLayout}>
				Dashboard
			</SidebarItem>
			<SidebarItem href="#" icon={TbLayoutKanban}>
				Kanban
			</SidebarItem>
			<SidebarItem href="#" icon={TbAt} label="3">
				At
			</SidebarItem>
			<SidebarItem href="#" icon={TbUser}>
				Users
			</SidebarItem>
			<SidebarItem href="#" icon={TbCoin}>
				Products
			</SidebarItem>

			<SidebarItem href="#" icon={TbArrowAutofitUp} label="Premium">
				Upgrade
			</SidebarItem>
			<SidebarItem href="#" icon={TbPaperBag} label="Premium">
				Docs
			</SidebarItem>
			<SidebarItem href="#" icon={TbHelp} label="Premium">
				Help
			</SidebarItem>
		</>
	),
};
export const LogoBranding = Template.bind({});
LogoBranding.storyName = "Logo branding";
LogoBranding.args = {
	children: (
		<>
			<SidebarLogo href="#" img="favicon.svg" imgAlt="Pol-ui logo">
				Pol-ui
			</SidebarLogo>
			<SidebarItem href="#" icon={TbGraph}>
				Home
			</SidebarItem>
			<SidebarItem href="#" icon={TbDashboard}>
				Kanban
			</SidebarItem>
			<SidebarItem href="#" icon={TbMail}>
				At
			</SidebarItem>
			<SidebarItem href="#" icon={TbUser}>
				Users
			</SidebarItem>
		</>
	),
};

export const CompleteExample = () => {
	const { value, toggle } = useBoolean(true);

	return (
		<div className="flex w-full rounded-xl overflow-hidden border border-secondary-800 min-h-[400px]  bg-primary-100 flex-col">
			<Navbar
				links={[
					{
						href: "#",
						label: "Home",
						active: true,
					},
					{
						href: "#",
						label: "About",
					},
					{
						href: "#",
						label: "Contact",
					},
				]}
				leftContent={
					<img
						src="https://ui.polgubau.com/logo.png"
						className="mr-3 h-6 sm:h-6"
						alt="Pol-ui Logo"
					/>
				}
			/>
			<section className="flex h-full gap-4">
				<Sidebar
					open={value}
					onOpenChange={toggle}
					className="rounded-tr-xl flex flex-col justify-between h-full"
					footer={
						<div className="flex justify-start gap-3 h-10 my-2">
							<Avatar img="https://avatars.githubusercontent.com/u/63197171?v=4" />
							<p
								className={`${value ? "hidden" : "flex"}  flex-col  items-start `}
							>
								<strong>Pol Gubau</strong>
								<span className="text-xs">Developer</span>
							</p>
						</div>
					}
				>
					<div className="flex flex-col gap-1 ">
						<SidebarItem
							href="#"
							icon={TbDatabaseSearch}
							active={true}
							rounded="full"
						>
							Home
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={TbLayoutKanban}
							label="Empty"
							labelColor={ColorsEnum.primary}
							rounded="full"
						>
							Menus
						</SidebarItem>
						<SidebarItem href="#" icon={TbAt} label="3" rounded="full">
							Mail
						</SidebarItem>
						<SidebarItem href="#" icon={TbUser} rounded="full">
							Accounts
						</SidebarItem>
					</div>
				</Sidebar>
				<div className="flex flex-col gap-5 p-8 w-full bg-primary-200  rounded-xl">
					<h2>Content</h2>
					<div className="bg-primary-400 rounded-2xl w-full h-20" />
					<div className="bg-primary-400 rounded-2xl w-full h-10" />
					<div className="bg-primary-300 rounded-2xl w-full h-14" />
					<div className="w-full h-20 flex gap-5">
						<div className="bg-primary-300 rounded-2xl w-full h-14" />
						<div className="bg-primary-300 rounded-2xl w-full h-14" />
					</div>
				</div>
			</section>
		</div>
	);
};

export const WithSearch = () => {
	const { value, toggle } = useBoolean(true);

	return (
		<div className="flex w-full rounded-xl overflow-hidden bg-secondary-50 min-h-[400px] flex-col">
			<Navbar
				links={[
					{
						href: "#",
						label: "Home",
						active: true,
					},
					{
						href: "#",
						label: "About",
					},
					{
						href: "#",
						label: "Contact",
					},
				]}
				leftContent={
					<img
						src="https://ui.polgubau.com/logo.png"
						className="mr-3 h-6 sm:h-6"
						alt="Pol-ui Logo"
					/>
				}
			/>
			<section className="flex h-full">
				<div className="bg-secondary-50 w-fit shadow-lg">
					<Sidebar open={value} onOpenChange={toggle}>
						<div>
							<Input
								leftComponent={<TbSearch />}
								placeholder="Search"
								className={`w-full ${value ? "hidden" : "flex"}`}
							/>
							<IconButton
								className={`w-full max-w-10 ${value ? "flex" : "hidden"}`}
								onClick={toggle}
							>
								<TbSearch />
							</IconButton>
						</div>

						<SidebarItem href="#" icon={TbDatabaseSearch} active={true}>
							Home
						</SidebarItem>
						<SidebarItem
							href="#"
							icon={TbLayoutKanban}
							label="Empty"
							labelColor={ColorsEnum.primary}
						>
							Menus
						</SidebarItem>
						<SidebarItem href="#" icon={TbAt} label="3">
							Mail
						</SidebarItem>
						<SidebarItem href="#" icon={TbUser}>
							Accounts
						</SidebarItem>
					</Sidebar>
				</div>
				<div className="flex flex-col gap-5 p-8 w-full bg-primary-200 m-4 rounded-xl">
					<h2>Content</h2>
					<div className="bg-primary-400 rounded-2xl w-full h-20" />
					<div className="bg-primary-400 rounded-2xl w-full h-10" />
					<div className="bg-primary-300 rounded-2xl w-full h-14" />
					<div className="w-full h-20 flex gap-5">
						<div className="bg-primary-300 rounded-2xl w-full h-14" />
						<div className="bg-primary-300 rounded-2xl w-full h-14" />
					</div>
				</div>
			</section>
		</div>
	);
};
