import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import { Text } from "../../Text";
import { ContentDistributions, ContentPositions } from "../../../types";

const meta = {
	title: "Layout/Stack",
	component: Stack,
	tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Stack is a component that allows you to stack elements on top of each other. It uses flexbox to do so. It has a few special props that allow you to customize it. (see props)",
			},
		},
	},

	args: {
		children: [
			<>
				<div className="bg-danger w-20 h-20 flex items-center justify-center">1</div>
				<div className="bg-info w-20 h-20 flex items-center justify-center">2</div>
				<div className="bg-success w-20 h-20 flex items-center justify-center">3</div>
			</>,
		],
	},
};

export const CustomGap: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Gap is a special prop for Stack. It allows you to set the gap between the children. If gap is number = gap in px, if its an string you can use any valid css unit",
			},
		},
	},

	args: {
		...Default.args,
	},
	render: (args: any) => (
		<>
			<Text className="text-center" value="0 (0px)" />
			<Stack {...args} gap={0} />
			<Text className="text-center" value="10 (10px)" />
			<Stack {...args} gap={10} />
			<Text className="text-center" value="'30px'" />
			<Stack {...args} gap="30px" />
			<Text className="text-center" value="'10%'" />
			<Stack {...args} gap="10%" />
			<Text className="text-center" value="'20vw'" />
			<Stack {...args} gap="20vw" />
		</>
	),
};

export const Direction: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Direction is a special prop for Stack. It allows you to set the direction of the children. It can be row, column, row-reverse or column-reverse. (see type FlexDirections)",
			},
		},
	},

	args: {
		...Default.args,
	},
	render: (args: any) => (
		<>
			<Text className="text-center" value="row" />
			<Stack {...args} direction="row" />
			<Text className="text-center" value="column" />
			<Stack {...args} direction="column" />
		</>
	),
};

export const AlignItems: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"AlignItems is a special prop for Stack. It allows you to set the alignment of the children. It can be start, end, center, stretch, baseline or even a custom value. (see type AlignItem)",
			},
		},
	},

	args: {
		...Default.args,
	},
	render: (args: any) => (
		<Stack direction="row" gap={40} className=" w-full">
			<Stack {...args} alignItems="start" direction="column" className="bg-danger" />
			<Stack {...args} alignItems="center" direction="column" className="bg-success" />
			<Stack {...args} alignItems="end" direction="column" className="bg-info" />
		</Stack>
	),
};
export const JustifyContent: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"JustifyContent is a special prop for Stack. It allows you to set the justification of the children. It can be start, end, center, stretch, space-between, space-around, space-evenly or even a custom value. (see type JustifyContent)",
			},
		},
	},

	args: {
		...Default.args,
	},
	render: (args: any) => (
		<Stack direction="column" gap={40} className=" w-full">
			<Stack direction="column">
				<Text value="'start' (ContentPositions.start)" />
				<Stack {...args} justify={ContentPositions.start} className="bg-blue-200" />
			</Stack>
			<Stack direction="column">
				<Text value="'center' (ContentPositions.center)" />
				<Stack {...args} justify={ContentPositions.center} className="bg-red-200" />
			</Stack>
			<Stack direction="column">
				<Text value="'end' (ContentPositions.end)" />
				<Stack {...args} justify={ContentPositions.end} className="bg-green-200" />
			</Stack>
			<Stack direction="column">
				<Text value="'space-between' (ContentDistributions.between)" />
				<Stack {...args} justify={ContentDistributions.between} className="bg-orange-100" />
			</Stack>
			<Stack direction="column">
				<Text value="'space-evenly' (ContentDistributions.evenly)" />
				<Stack {...args} justify={ContentDistributions.evenly} className="bg-yellow-100" />
			</Stack>
			<Text value="... all vanilla flex properties" />
		</Stack>
	),
};

export const CustomWidth: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Width can be defined as gap, it can be a number (px) or a string (any valid css unit). Always think that **wrap is set to wrap by default**, so if you want to set a no wrap you should set wrap to nowrap.",
			},
		},
	},

	args: {
		...Default.args,
	},
	render: (args: any) => (
		<Stack direction="row" gap={40} className=" w-full">
			<Stack direction="column">
				<Text value="width={250} -> 250px" />
				<Stack {...args} className="bg-red-200" width={250} />
			</Stack>
			<Stack direction="column">
				<Text value="width='50%'" />
				<Stack {...args} className="bg-green-200" width={"50%"} />
			</Stack>
			<Stack direction="column">
				<Text value="width='100%', this is the default prop" />
				<Stack {...args} className="bg-blue-200" width={"100%"} />
			</Stack>
		</Stack>
	),
};

export const CustomElement: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"As prop 'as' you can pass any valid HTML tag name. This allows you to use Stack as a header or footer or whatever you want. Use this tag to improve SEO and your syntax.",
			},
		},
	},

	args: {
		...Default.args,
	},
	render: (args: any) => (
		<Stack direction="column" gap={40} className=" w-full">
			<Stack direction="column">
				<Text value="As header" />
				<Stack {...args} className="bg-red-200" as="header" />
			</Stack>
			<Stack direction="column">
				<Text value="As footer" />
				<Stack {...args} className="bg-green-200" as="footer" />
			</Stack>
			<Stack direction="column">
				<Text value="As button" />
				<Stack
					{...args}
					className="bg-blue-200"
					as="button"
					onClick={() => alert("Now I am a button")}
				/>
			</Stack>
		</Stack>
	),
};
