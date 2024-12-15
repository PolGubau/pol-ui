import type { Meta, StoryFn } from "@storybook/react";

import { Button } from "../Button";
import { Dialog, DialogClose, type DialogProps } from "./Dialog";
import { DialogFooter, DialogHeader, DialogTitle } from "./extras";

export default {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<DialogProps> = (args) => {
  return (
    <Dialog {...args}>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <p>
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </p>
      </DialogHeader>
      <DialogFooter>
        <DialogClose>
          <Button color="secondary">Cancel</Button>
        </DialogClose>
        <Button color="error">Delete</Button>
      </DialogFooter>
    </Dialog>
  );
};

export const Default = Template.bind({});
