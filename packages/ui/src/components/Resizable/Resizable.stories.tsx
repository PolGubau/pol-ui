import type { Meta } from '@storybook/react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './Resizable'

export default {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50} className="flex h-[200px] items-center justify-center p-6">
        <span className="font-semibold">One</span>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25} className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75} className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
