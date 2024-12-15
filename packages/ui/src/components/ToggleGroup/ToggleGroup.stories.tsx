import type { Meta } from "@storybook/react";
import { TbBold, TbItalic, TbUnderline } from "react-icons/tb";
import { Switch } from "../Switch";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
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
} as Meta;

export const Default = () => {
  return (
    <div className="flex gap-2">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <div>
            <Switch /> Test 1
          </div>
          <TbBold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <TbItalic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <TbUnderline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
