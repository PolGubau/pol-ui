import type { Meta } from "@storybook/react";
import { TbChevronDown } from "react-icons/tb";
import { useBoolean } from "../../hooks";
import { Button } from "../Button";
import { Toaster } from "../Toaster";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./Collapsible";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export function Default() {
  const { value: isOpen, toggle } = useBoolean();

  return (
    <Collapsible open={isOpen} onOpenChange={toggle} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@anna starred 3 repositories</h4>
        <CollapsibleTrigger asChild={true}>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <TbChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">@PolGubau/polgubau</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@PolGubau/pol-ui</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@PolGubau/games</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
