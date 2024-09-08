"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "pol-ui";
import { PropsWithChildren } from "react";

const Resizable = (props: PropsWithChildren) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>{props.children}</ResizablePanel>
      <ResizableHandle withHandle={true} />
      <ResizablePanel>test</ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Resizable;
