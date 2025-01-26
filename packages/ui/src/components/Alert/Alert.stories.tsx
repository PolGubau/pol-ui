import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";
import { alertExampleProps } from "./test/props";
import { itsDisplayed, shouldBeBordered, shouldCanDismiss, shouldSquare } from "./test/utils";
type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
};
export default meta;

export const Default: Story = {
  args: alertExampleProps.default,
  play: async ({ args, canvasElement, step }) => {
    await step("Is Displayed", async () => {
      await itsDisplayed(canvasElement, args);
    });
  },
};

export const CustomIcon: Story = {
  args: alertExampleProps.customIcon,
  play: async ({ args, canvasElement, step }) => {
    await step("Is Displayed", async () => {
      await itsDisplayed(canvasElement, args);
    });
  },
};

export const Dismissable: Story = {
  args: alertExampleProps.dismissable,
  play: async ({ args, canvasElement, step }) => {
    await step("Is Displayed", async () => {
      await itsDisplayed(canvasElement, args);
    });
    await step("Is dismissable", async () => {
      await shouldCanDismiss(canvasElement);
    });
  },
};

export const Square: Story = {
  args: alertExampleProps.square,
  play: ({ canvasElement, step }) => {
    step("Is squared", () => {
      shouldSquare(canvasElement);
    });
  },
};
export const Bordered: Story = {
  args: alertExampleProps.bordered,
  play: async ({ canvasElement, step }) => {
    await step("Is Displayed", async () => {
      await shouldBeBordered(canvasElement);
    });
  },
};
