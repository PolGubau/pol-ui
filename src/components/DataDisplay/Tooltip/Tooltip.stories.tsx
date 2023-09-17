import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Image } from "../../Media";
const meta = {
	title: "Data Display/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="  flex p-8 ">
			<Tooltip {...args} />
		</div>
	),

	args: {
		children: (
			<div className="w-fit">
				<Image
					src="https://www.thispersondoesnotexist.com"
					width="150px"
					rounded="lg"
					alt="randomPerson"
				/>
			</div>
		),
		content: "Tooltip",
	},
};
export const Bottom: Story = {
	render: (args) => (
		<div className=" w-fit flex p-8 ">
			<Tooltip {...args} />
		</div>
	),

	args: {
		...Default.args,
		position: "bottom",
	},
};
export const Left: Story = {
	render: (args) => (
		<div className="w-fit  flex p-8 ">
			<Tooltip {...args} />
		</div>
	),
	args: {
		...Default.args,
		position: "left",
	},
};
export const Rigth: Story = {
	render: (args) => (
		<div className="w-fit  flex p-8 ">
			<Tooltip {...args} />
		</div>
	),
	args: {
		...Default.args,
		position: "right",
	},
};
export const WithDelayOnEnter: Story = {
	args: {
		...Default.args,
		position: "right",
		enterDelay: 500,
	},
};
export const WithDelayOnExit: Story = {
	args: {
		...Default.args,
		position: "right",
		leaveDelay: 500,
	},
};
export const WithDelayOnBoth: Story = {
	args: {
		...Default.args,
		position: "right",
		leaveDelay: 200,
		enterDelay: 1000,
	},
};

export const WithCustomStyle: Story = {
	args: {
		...Default.args,
		position: "right",
		tooltipStyle: {
			backgroundColor: "red",
			color: "white",
		},
	},
};

export const WithCustomClassName: Story = {
	args: {
		...Default.args,
		position: "right",
		tooltipClassName: "bg-blue-500 text-white",
	},
};

export const WithCustomClassNameAndStyle: Story = {
	args: {
		...Default.args,
		position: "right",
		tooltipClassName: "bg-blue-500 text-white",
		tooltipStyle: {
			backgroundColor: "red",
			color: "white",
		},
	},
};

export const AllPositions: Story = {
	render: (args) => (
		<div className=" gap-8 flex p-8 ">
			<Tooltip {...args} position="top" />
			<Tooltip {...args} position="left" />
			<Tooltip {...args} position="bottom" />
			<Tooltip {...args} position="right" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const CustomElement: Story = {
	args: {
		...Default.args,
		position: "right",
		content: (
			<div className="flex flex-col gap-2 p-4 rounded-lg">
				<Image
					src="https://www.thispersondoesnotexist.com"
					rounded="xl"
					alt="randomPerson"
					width="150px"
				/>
				<p className="text-inverted">Have you seen this person? 🤔</p>
			</div>
		),
	},
};
