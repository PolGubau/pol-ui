import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { toast } from "../Toaster";
import type { DeleteButtonProps } from "./DeleteButton";
import { DeleteButton } from "./DeleteButton";
type Story = StoryObj<typeof DeleteButton>;

const meta: Meta<typeof DeleteButton> = {
  title: "Components/DeleteButton",
  component: DeleteButton,
  decorators: [
    (Story) => (
      <div className="flex">
        <Story />
      </div>
    ),
  ],
} as Meta;
export default meta;
const Template: StoryFn<DeleteButtonProps> = (args) => {
  return <DeleteButton {...args} />;
};

export const Default: Story = Template.bind({});
Default.args = {
  onConfirm: () => {
    toast("Confirmed!");
  },
};
