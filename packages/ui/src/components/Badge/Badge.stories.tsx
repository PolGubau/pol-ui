import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../theme";
import { Badge } from "./badge-ui";
import { badgeExampleProps } from "./test/props";
import {
	itsDisplayed,
	shouldAcceptRoundessAndSize,
	shouldBeLink,
	shouldHaveIcon,
} from "./test/utils";

type Story = StoryObj<typeof Badge>;

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		color: {
			options: Object.keys(theme.badge.root.color),
			control: { type: "inline-radio" },
		},
		size: {
			options: Object.keys(theme.badge.root.size),
			control: { type: "inline-radio" },
		},
	},
	decorators: [
		(Story) => (
			<div className="flex p-6 flex-col  justify-center items-center ">
				<Story />
			</div>
		),
	],
};
export default meta;

export const Default: Story = {
	args: badgeExampleProps.default,
	play: async ({ args, canvasElement, step }) => {
		await step("Basic Usage", async () => {
			await itsDisplayed(canvasElement, args);
		});
	},
};
export const WithIcon: Story = {
	args: badgeExampleProps.withIcon,
	play: async ({ args, canvasElement, step }) => {
		await step("Basic Usage", async () => {
			await itsDisplayed(canvasElement, args);
		});
		await step("Should have icon", async () => {
			await shouldHaveIcon(canvasElement);
		});
	},
};
export const AsLink: Story = {
	args: badgeExampleProps.asLink,
	play: async ({ args, canvasElement, step }) => {
		await step("Basic Usage", async () => {
			await itsDisplayed(canvasElement, args);
		});
		await step("Basic be a link", async () => {
			await shouldBeLink(canvasElement, args);
		});
	},
};
export const SmallAndRounded: Story = {
	args: badgeExampleProps.smallAndRounded,
	play: async ({ args, canvasElement, step }) => {
		await step("Basic Usage", async () => {
			await itsDisplayed(canvasElement, args);
		});
		await step("Correct classes", async () => {
			await shouldAcceptRoundessAndSize(canvasElement, args);
		});
	},
};
