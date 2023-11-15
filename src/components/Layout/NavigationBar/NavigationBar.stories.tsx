import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "./NavigationBar";
import { Directions } from "../../../types";
import { BottombarItem } from "../../Navigation/Bottombar/Bottombar";

const meta = {
	title: "Layout/NavigationBar",
	component: NavigationBar,
	tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: BottombarItem[] = [
	{ name: "Home" },
	{ name: "Settings", icon: "settings" },
	{ name: "Profile", icon: "user" },
	{ name: "Search" },
];
const WithHref = mockData.map((item) => ({
	...item,
	link: `https://polgubau.com`,
}));

export const Default: Story = {
	args: { data: mockData },
};
export const OnClick: Story = {
	args: { data: mockData, onChange: (index: number) => alert(index) },
};
export const InvertText: Story = {
	parameters: {
		docs: {
			description: {
				story: "Invert text color (based on your dark mode provided) on selected item",
			},
		},
	},
	args: { data: mockData, invertTextOnSelected: true },
};
export const Vertical: Story = {
	args: { data: mockData, direction: Directions.y },
};
export const TabsWithHref: Story = {
	args: { data: WithHref },
};

export const DarkMode: Story = {
	args: { data: mockData, invertTextOnSelected: true },
	render: (args) => (
		<div className="dark">
			<div className="grid place-items-center w-full h-64 bg-background dark:bg-background-inverted">
				<NavigationBar {...args} />
			</div>
		</div>
	),
};
