import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Divider } from "../../DataDisplay";

const meta = {
	title: "Buttons/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				story:
					"The button component is one of the main axes of the design system. It is used by default to create buttons, but it can also be used to create links. Various components use it internally, such as the `ButtonGroup` or the `IconButton`.",
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The button component is one of the main axes of the design system. It is used by default to create buttons, but it can also be used to create links. Various components use it internally, such as the `ButtonGroup` or the `IconButton`.",
			},
		},
	},
	args: {
		children: "I'm a normal button",
		iconPosition: "left",
		rounded: "lg",
		autoFocus: false,
		fullWidth: false,
		variant: "filled",
		color: "primary",
		size: "md",
		disabled: false,
		id: "button",
	},
};
export const Link: Story = {
	args: {
		...Default.args,
		children: "I'm a link",
		href: "https://polgubau.com",
	},
};
export const Outlined: Story = {
	args: {
		...Default.args,
		children: "I have an outline",
		variant: "outlined",
	},
};
export const Text: Story = {
	args: {
		...Default.args,

		children: "More discreet",
		variant: "text",
	},
};
export const Accent: Story = {
	args: {
		...Default.args,

		children: "The important one",
		color: "accent",
	},
};
export const FullWidth: Story = {
	args: {
		...Default.args,
		fullWidth: true,
		children: "Largy largy",
	},
};
export const FullWidthCentered: Story = {
	args: {
		...Default.args,
		fullWidth: true,
		centered: true,
		children: "Largy largy",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,

		children: "Not here anymore",
		disabled: true,
	},
};

export const SmallButton: Story = {
	args: {
		...Default.args,

		children: "Small",
		size: "sm",
	},
};
export const NormalButton: Story = {
	args: {
		...Default.args,

		children: "Normal",
		size: "md",
	},
};
export const LargeButton: Story = {
	args: {
		...Default.args,

		children: "The big one",
		size: "lg",
	},
};
export const SquareButton: Story = {
	args: {
		...Default.args,

		children: "I'm a rectangle",
		rounded: "none",
	},
};
export const WithIcon: Story = {
	args: {
		...Default.args,

		children: "I have an icon",
		icon: "check",
		iconPosition: "left",
	},
};
export const AccentWithIcon: Story = {
	args: {
		...Default.args,
		color: "accent",
		iconPosition: "left",
		children: "I have an icon",
		icon: "check",
	},
};
export const WithIconRight: Story = {
	args: {
		...Default.args,
		children: "I have an icon",
		icon: "check",
		iconPosition: "right",
	},
};

export const AllSizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Button {...args} size="xs" children="Extra Small" />
			<Button {...args} size="sm" children="Small" />
			<Button {...args} size="md" children="Normal" />
			<Button {...args} size="lg" children="Large" />
			<Button {...args} size="xl" children="Extra Large" />
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a button",
	},
};
export const AllRoundTypes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Button {...args} rounded="none" children="NONE" />
			<Button {...args} rounded="xs" children="XS" />
			<Button {...args} rounded="sm" children="SM" />
			<Button {...args} rounded="md" children="MD" />
			<Button {...args} rounded="lg" children="LG" />
			<Button {...args} rounded="xl" children="XL" />
			<Button {...args} rounded="full" children="FULL" />
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a button",
	},
};
export const CustomPadding: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Button
				{...args}
				padding={{
					x: "none",
					y: "lg",
				}}
				children="Weird Button"
			/>
			<Button
				{...args}
				padding={{
					x: "md",
					y: "md",
				}}
				children="Weird Button"
			/>
			<Button
				{...args}
				padding={{
					x: "xs",
					y: "xl",
				}}
				children="Weird Button"
			/>
			<Button
				{...args}
				padding={{
					x: "xl",
					y: "md",
				}}
				children="Weird Button"
			/>
			<Button
				{...args}
				padding={{
					x: "lg",
					y: "none",
				}}
				children="Weird Button"
			/>
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a button",
	},
};
export const AllColors: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<div className="flex flex-col gap-2">
				<Button {...args} color="primary" children="primary" />
				<Button {...args} color="secondary" children="secondary" />
				<Button {...args} color="accent" children="accent" />
				<Divider />
				<Button {...args} color="success" children="success" />
				<Button {...args} color="danger" children="danger" />
				<Button {...args} color="info" children="info" />
			</div>
			<div className="flex flex-col gap-2">
				<Button {...args} variant="outlined" color="primary" children="primary" />
				<Button {...args} variant="outlined" color="secondary" children="secondary" />
				<Button {...args} variant="outlined" color="accent" children="accent" /> <Divider />
				<Button {...args} variant="outlined" color="success" children="success" />
				<Button {...args} variant="outlined" color="danger" children="danger" />
				<Button {...args} variant="outlined" color="info" children="info" />
			</div>
			<div className="flex flex-col gap-2">
				<Button {...args} variant="text" color="primary" children="primary" />
				<Button {...args} variant="text" color="secondary" children="secondary" />
				<Button {...args} variant="text" color="accent" children="accent" /> <Divider />
				<Button {...args} variant="text" color="success" children="success" />
				<Button {...args} variant="text" color="danger" children="danger" />
				<Button {...args} variant="text" color="info" children="info" />
			</div>
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a button",
	},
};
export const AllColorsBlackMode: Story = {
	render: (args) => (
		<main className="dark">
			<div className="flex gap-2 p-8 bg-background dark:bg-background-inverted">
				<div className="flex flex-col gap-2">
					<Button {...args} color="primary" children="primary" />
					<Button {...args} color="secondary" children="secondary" />
					<Button {...args} color="accent" children="accent" />
					<Divider />
					<Button {...args} color="success" children="success" />
					<Button {...args} color="danger" children="danger" />
					<Button {...args} color="info" children="info" />
				</div>
				<div className="flex flex-col gap-2">
					<Button {...args} variant="outlined" color="primary" children="primary" />
					<Button {...args} variant="outlined" color="secondary" children="secondary" />
					<Button {...args} variant="outlined" color="accent" children="accent" /> <Divider />
					<Button {...args} variant="outlined" color="success" children="success" />
					<Button {...args} variant="outlined" color="danger" children="danger" />
					<Button {...args} variant="outlined" color="info" children="info" />
				</div>
				<div className="flex flex-col gap-2">
					<Button {...args} variant="text" color="primary" children="primary" />
					<Button {...args} variant="text" color="secondary" children="secondary" />
					<Button {...args} variant="text" color="accent" children="accent" /> <Divider />
					<Button {...args} variant="text" color="success" children="success" />
					<Button {...args} variant="text" color="danger" children="danger" />
					<Button {...args} variant="text" color="info" children="info" />
				</div>
			</div>
		</main>
	),
	args: {
		...Default.args,
		children: "I'm a button",
	},
};
export const DarkMode: Story = {
	render: (args) => (
		<div className="dark">
			<Button {...args} children="Dark Button" className="" />
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a button",
	},
};
export const CustomRipple: Story = {
	render: (args) => (
		<div className="dark flex gap-1">
			<Button {...args} children="Normal" padding="lg" />
			<Button {...args} children="Slow danger" rippleColor="danger" rippleDuration={1} />
			<Button {...args} children="fast accent" rippleColor="accent" rippleDuration={0.2} />
			<Button {...args} children="all accent" rippleColor="accent" color="accent" />
			<Button
				{...args}
				children="info full opacity"
				rippleColor="info"
				rippleOpacity={100}
				rippleDuration={0.4}
			/>
		</div>
	),
	args: {
		...Default.args,
		padding: "lg",
	},
};
export const HideTextInTablet: Story = {
	args: {
		...Default.args,
		icon: "check",
		children: "Resize your screen",
		hideWhenLessThan: 666,
	},
};
