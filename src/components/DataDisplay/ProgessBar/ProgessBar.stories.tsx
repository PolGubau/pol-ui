import type { Meta, StoryObj } from "@storybook/react";
import ProgessBar from "./ProgessBar";
import { Text } from "../../Text";

const meta = {
	title: "Data Display/Progess Bar",
	component: ProgessBar,
	tags: ["autodocs"],
} satisfies Meta<typeof ProgessBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { value: 50 },
};
export const Rounded: Story = {
	args: { value: 50, rounded: "rounded" },
};
export const Squared: Story = {
	args: { value: 50, rounded: "square" },
};
export const Marks: Story = {
	args: { value: 50, marks: 9 },
};
export const FewMarks: Story = {
	args: { value: 25, marks: 4 },
};
export const PointerDown: Story = {
	args: { value: 70, pointerPosition: "bottom" },
};
export const WithoutPointer: Story = {
	args: { value: 70, pointer: false },
};
export const WithValueInside: Story = {
	args: { value: 70, pointerPosition: "bottom", hasValueInside: true },
};
export const JustValueInside: Story = {
	args: { value: 70, hasValueInside: true, pointer: false },
};

export const AllColors: Story = {
	render: (args) => (
		<div className=" gap-8 flex p-8 ">
			<ProgessBar {...args} variant="accent" value={10} />
			<ProgessBar {...args} variant="success" value={20} />
			<ProgessBar {...args} variant="danger" value={30} />
			<ProgessBar {...args} variant="warning" value={40} />
			<ProgessBar {...args} variant="info" value={50} />
			<ProgessBar {...args} variant="dark" value={60} />
			<ProgessBar {...args} variant="light" value={70} />
			<ProgessBar {...args} variant="default" value={80} />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllColorsVertical: Story = {
	render: (args) => (
		<div className=" gap-8 flex-col flex p-8 ">
			<ProgessBar {...args} variant="accent" value={10} />
			<ProgessBar {...args} variant="success" value={20} />
			<ProgessBar {...args} variant="danger" value={30} />
			<ProgessBar {...args} variant="warning" value={40} />
			<ProgessBar {...args} variant="info" value={50} />
			<ProgessBar {...args} variant="dark" value={60} />
			<ProgessBar {...args} variant="light" value={70} />
			<ProgessBar {...args} variant="default" value={80} />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className=" gap-8 flex-col flex p-8 ">
			<ProgessBar {...args} size="xs" />
			<ProgessBar {...args} size="sm" />
			<ProgessBar {...args} size="md" />
			<ProgessBar {...args} size="lg" />
			<ProgessBar {...args} size="xl" />
		</div>
	),
	args: {
		...Default.args,
	},
};
export const ShowingMin: Story = {
	args: { value: 70, showMin: true, pointerPosition: "bottom" },
};
export const ShowingMax: Story = {
	args: { value: 70, showMax: true, pointerPosition: "bottom" },
};
export const ShowingMaxAndMax: Story = {
	args: { value: 70, showMax: true, showMin: true, pointerPosition: "bottom" },
};

export const CustomMinAndMax: Story = {
	args: { value: 7, showMax: true, showMin: true, min: 1, max: 10, pointerPosition: "bottom" },
};
export const MoreThan100Percent: Story = {
	args: { value: 99, showMax: true, showMin: true, min: 1, max: 2, pointerPosition: "bottom" },
};

export const SchoolMarks: Story = {
	render: (args) => (
		<div className=" gap-8 flex-col flex p-8 ">
			<Text value="My marks in school" />
			<ProgessBar
				{...args}
				value={9}
				marks={10}
				min={0}
				max={10}
				variant="info"
				marksColor="light"
				marksOpacity={60}
			/>
		</div>
	),
	args: {
		...Default.args,
	},
};
export const CustomMarksOpacity: Story = {
	render: (args) => (
		<div className=" gap-8 flex-col flex p-8 ">
			<ProgessBar {...args} value={50} marks={10} marksOpacity={10} />
			<ProgessBar {...args} value={50} marks={10} marksOpacity={40} />
			<ProgessBar {...args} value={50} marks={10} marksOpacity={100} />
		</div>
	),
	args: {
		...Default.args,
	},
};
