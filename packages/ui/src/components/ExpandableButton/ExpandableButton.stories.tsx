import type { Meta } from "@storybook/react";
import { TbChevronRight, TbSend } from "react-icons/tb";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { TextArea } from "../Textarea/Textarea";
import ExpandableButton from "./ExpandableButton";

export default {
  title: "Components/ExpandableButton",
  component: ExpandableButton,

  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => (
  <ExpandableButton showLabelInDrawer={false}>
    <div className="p-2 flex flex-col gap-2 rounded-b-lg py-3">
      <h4>Add comment</h4>
      <TextArea className="w-full" label="Write a comment" />
      <nav className="flex flex-row-reverse justify-right w-full">
        <Button size={"sm"}>
          Send
          <TbChevronRight className="w-4 h-4" />
        </Button>
      </nav>
    </div>
  </ExpandableButton>
);

export const CustomTrigger = () => (
  <div className="flex justify-center items-center">
    <ExpandableButton
      trigger={
        <IconButton className="w-[50px]">
          <TbSend />
        </IconButton>
      }
    >
      <div className="bg-secondary-100 p-2 flex flex-col gap-2 rounded-b-lg py-3">
        <h4>Add comment</h4>
        <TextArea className="w-full" label="Write a comment" />
        <nav className="flex flex-row-reverse justify-right w-full">
          <Button size={"sm"}>
            Send
            <TbChevronRight className="w-4 h-4" />
          </Button>
        </nav>
      </div>
    </ExpandableButton>
  </div>
);
export const Once = () => (
  <ExpandableButton once={true}>
    <div className="bg-secondary-100 p-2 flex flex-col gap-2 rounded-b-lg py-3">
      <h4>Add comment</h4>
      <TextArea className="w-full" label="Write a comment" />
      <nav className="flex flex-row-reverse justify-right w-full">
        <Button size={"sm"}>
          Send
          <TbChevronRight className="w-4 h-4" />
        </Button>
      </nav>
    </div>
  </ExpandableButton>
);
