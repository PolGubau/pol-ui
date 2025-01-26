import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";
import { accordionExampleProps } from "./test/props";
import {
  canBeUsedWithKeyboard,
  headersShouldBeButtons,
  itsDisplayedAndWorks,
  shouldUseAriaLabel,
  shouldUseAriaLabelledBy,
  shouldUseId,
} from "./test/utils";

type Story = StoryObj<typeof Accordion>;

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;
export default meta;

export const Default: Story = {
  args: accordionExampleProps.default,
  play: async ({ args, canvasElement, step }) => {
    await step("Basic Usage", async () => {
      await itsDisplayedAndWorks(canvasElement, args);
    });
    await step("Keyboard Usage", async () => {
      await canBeUsedWithKeyboard(canvasElement, args);
    });
    await step("A11y tests", async () => {
      shouldUseAriaLabel(canvasElement, args);
      shouldUseAriaLabelledBy(canvasElement, args);
      await headersShouldBeButtons(canvasElement, args);
      shouldUseId(canvasElement, args);
    });
  },
};
export const WithJSX: Story = {
  args: accordionExampleProps.withJSX,
  play: async ({ args, canvasElement, step }) => {
    await step("A11y tests", async () => {
      await shouldUseAriaLabelledBy(canvasElement, args);
    });
  },
};
export const CustomIcons: Story = {
  args: accordionExampleProps.customIcons,
};
export const CustomClassname: Story = {
  args: accordionExampleProps.customClassname,
};
export const CustomTheme: Story = {
  args: accordionExampleProps.customTheme,
};
