import type { Meta } from '@storybook/react'
import { Drawer, NestedDrawer } from './Drawer'
import { TbDotsVertical } from 'react-icons/tb'
import { IconButton } from '../IconButton'
import React from 'react'
import { Button } from '../Button'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const SampleContent = () => (
  <div className="flex flex-col h-full gap-4 pt-8">
    <h1 className="text-2xl font-bold text-center">Drawer Content</h1>
    <p className="text-gray-500 text-center">This is a sample content for the drawer</p>

    <div className="flex gap-2 justify-center">
      <Button>Action 1</Button>
      <Button>Action 2</Button>
      <Button>Action 3</Button>
    </div>
  </div>
)

export const Example = () => {
  return (
    <Drawer>
      <SampleContent />
    </Drawer>
  )
}
export const CustomTrigger = () => {
  return (
    <Drawer
      trigger={
        <IconButton className="w-[40px]">
          <TbDotsVertical />
        </IconButton>
      }
    >
      <SampleContent />
    </Drawer>
  )
}

export const Controlled = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <pre> The drawer is {open ? 'open' : 'closed'} </pre>
      <Drawer open={open} onClose={() => setOpen(false)} label="Now the state commes from the other button">
        <SampleContent />
      </Drawer>
    </>
  )
}

export const NotScaledBackground = () => {
  return (
    <Drawer shouldScaleBackground={false}>
      <SampleContent />
    </Drawer>
  )
}
export const Directions = () => {
  return (
    <div className="flex flex-col gap-4">
      <Drawer direction="bottom" label="Bottom">
        <SampleContent />
      </Drawer>
      <Drawer direction="left" label="Left">
        <SampleContent />
      </Drawer>
      <Drawer direction="right" label="Right">
        <SampleContent />
      </Drawer>
      <Drawer direction="top" label="Top">
        <SampleContent />
      </Drawer>
    </div>
  )
}
export const DirectionsFilled = () => {
  return (
    <div className="flex flex-col gap-4">
      <Drawer direction="bottom" label="Bottom" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
      <Drawer direction="left" label="Left" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
      <Drawer direction="right" label="Right" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
      <Drawer direction="top" label="Top" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
    </div>
  )
}
export const Undismissible = () => {
  return (
    <Drawer dismissible={false}>
      <SampleContent />
    </Drawer>
  )
}

export const HandleOnly = () => {
  return (
    <Drawer handleOnly>
      <SampleContent />
    </Drawer>
  )
}

export const Nested = () => {
  return (
    <Drawer>
      <NestedDrawer>
        <NestedDrawer>
          <NestedDrawer>
            <NestedDrawer>
              <SampleContent />
            </NestedDrawer>
          </NestedDrawer>
        </NestedDrawer>
      </NestedDrawer>
    </Drawer>
  )
}
