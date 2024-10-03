"use client"

import { TbDotsVertical } from "react-icons/tb"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../../helpers"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  customHandle: CustomHandle,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
  customHandle?: React.ReactNode
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "group relative flex w-px items-center justify-center bg-secondary/30 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {CustomHandle
      ? CustomHandle
      : withHandle && (
          <div className="z-10 rounded-full flex h-10 w-fit items-center justify-center bg-secondary-200 dark:bg-secondary-400 text-background">
            <TbDotsVertical className="h-6 w-4" />
          </div>
        )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
