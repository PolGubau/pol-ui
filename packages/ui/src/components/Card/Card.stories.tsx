import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { toast } from "../Toaster";
import type { CardProps } from "./Card";
import { Card } from "./Card";

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};
export default meta;

const Template: StoryFn<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <div className="flex flex-col gap-2">
      <h5 className="font-bold text-2xl text-black tracking-tight dark:text-white">Check this Card!</h5>
      <p className="font-normal text-secondary-700 dark:text-secondary-400">
        This components is quite flexible and can be used in many ways. Customize it to your needs!
      </p>
    </div>
  </Card>
);

export const Default: Story = Template.bind({});
Default.args = {};

export const Clicable: Story = Template.bind({});
Clicable.args = {
  onClick: () => toast("Click"),
};
