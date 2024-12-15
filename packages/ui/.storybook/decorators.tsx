import type { PropsWithChildren } from "react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../src";
import PhoneMockup from "../src/components/Mockups/Phone/Phone";

export const PhoneDecorator = (props: PropsWithChildren) => <PhoneMockup>{props.children}</PhoneMockup>;

export const ResponsiveDecorator = (props: PropsWithChildren) => (
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel className="invisible hover:visible" />
    <ResizableHandle />
    <ResizablePanel defaultSize={100} minSize={30}>
      {props.children}
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel className="invisible hover:visible" />
  </ResizablePanelGroup>
);
