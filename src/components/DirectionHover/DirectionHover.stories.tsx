import type { Meta, StoryFn } from '@storybook/react'
import { DirectionHover } from './DirectionHover'

export default {
  title: 'Components/DirectionHover',
  component: DirectionHover,
  decorators: [
    Story => (
      <div className="flex p-6 bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
export const Line: StoryFn = () => (
  <div className="flex gap-2">
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
)
export const Default: StoryFn = () => (
  <div className="flex gap-2">
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
)
export const Grid: StoryFn = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-2">
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://source.unsplash.com/random">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
)
