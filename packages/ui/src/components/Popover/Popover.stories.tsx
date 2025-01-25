import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { TbFile } from "react-icons/tb";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Popover, type PopoverProps } from "./Popover";

export default {
  title: "Components/Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
} as Meta;
const ExampleContent = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl">
      <Avatar size="lg" img={"https://avatars.githubusercontent.com/u/63197171?v=4"} />
      <h2 className="text-lg font-bold mt-2">Pol Gubau Amores</h2>
      <p className="text-sm text-secondary-500">
        Software Engineer at <b>Pol-ui</b>
      </p>

      <div className="mt-4 flex items-center">
        <Button color="secondary">View Profile</Button>
        <Button color="primary" className="ml-2">
          Follow
        </Button>
      </div>
    </div>
  );
};
const Template: StoryFn<PopoverProps> = (args) => <Popover {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <ExampleContent />,
};

export const IconUseCase = Template.bind({});
IconUseCase.args = {
  children: <ExampleContent />,
  trigger: (
    <IconButton>
      <TbFile />
    </IconButton>
  ),
};

export function Controlled() {
  const [open, setOpen] = useState(false);
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          onClick={() => {
            setOpen((v) => !v);
          }}
        >
          My trigger
        </Button>
      }
    >
      <ExampleContent />
    </Popover>
  );
}
