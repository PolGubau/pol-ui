import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";
import { Divider } from "../../DataDisplay";

const meta = {
	title: "Buttons/Link",
	component: Link,
	tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: "https://polgubau.com",
		children: "I'm a normal Link",
		iconPosition: "left",
		rounded: "lg",
		autoFocus: false,
		fullWidth: false,
		variant: "filled",
		color: "primary",
		size: "md",
		id: "button",
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
			<Link {...args} size="xs" children="Extra Small" />
			<Link {...args} size="sm" children="Small" />
			<Link {...args} size="md" children="Normal" />
			<Link {...args} size="lg" children="Large" />
			<Link {...args} size="xl" children="Extra Large" />
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a Link",
	},
};
export const AllRoundTypes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Link {...args} rounded="none" children="NONE" />
			<Link {...args} rounded="xs" children="XS" />
			<Link {...args} rounded="sm" children="SM" />
			<Link {...args} rounded="md" children="MD" />
			<Link {...args} rounded="lg" children="LG" />
			<Link {...args} rounded="xl" children="XL" />
			<Link {...args} rounded="full" children="FULL" />
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a Link",
	},
};
export const CustomPadding: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Link
				{...args}
				padding={{
					x: "none",
					y: "lg",
				}}
				children="Weird Link"
			/>
			<Link
				{...args}
				padding={{
					x: "md",
					y: "md",
				}}
				children="Weird Link"
			/>
			<Link
				{...args}
				padding={{
					x: "xs",
					y: "xl",
				}}
				children="Weird Link"
			/>
			<Link
				{...args}
				padding={{
					x: "xl",
					y: "md",
				}}
				children="Weird Link"
			/>
			<Link
				{...args}
				padding={{
					x: "lg",
					y: "none",
				}}
				children="Weird Link"
			/>
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a Link",
	},
};
export const AllColors: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<div className="flex flex-col gap-2">
				<Link {...args} color="primary" children="primary" />
				<Link {...args} color="secondary" children="secondary" />
				<Link {...args} color="accent" children="accent" />
				<Divider />
				<Link {...args} color="success" children="success" />
				<Link {...args} color="danger" children="danger" />
				<Link {...args} color="info" children="info" />
			</div>
			<div className="flex flex-col gap-2">
				<Link {...args} variant="outlined" color="primary" children="primary" />
				<Link {...args} variant="outlined" color="secondary" children="secondary" />
				<Link {...args} variant="outlined" color="accent" children="accent" /> <Divider />
				<Link {...args} variant="outlined" color="success" children="success" />
				<Link {...args} variant="outlined" color="danger" children="danger" />
				<Link {...args} variant="outlined" color="info" children="info" />
			</div>
			<div className="flex flex-col gap-2">
				<Link {...args} variant="text" color="primary" children="primary" />
				<Link {...args} variant="text" color="secondary" children="secondary" />
				<Link {...args} variant="text" color="accent" children="accent" /> <Divider />
				<Link {...args} variant="text" color="success" children="success" />
				<Link {...args} variant="text" color="danger" children="danger" />
				<Link {...args} variant="text" color="info" children="info" />
			</div>
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a Link",
	},
};
