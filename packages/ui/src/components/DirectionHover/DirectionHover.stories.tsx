import type { Meta, StoryFn } from "@storybook/react"

import { DirectionHover } from "./DirectionHover"

export default {
  title: "Components/DirectionHover",
  component: DirectionHover,

  parameters: {
    layout: "fullscreen",
  },
} as Meta
export const Line: StoryFn = () => (
  <div className="flex gap-2">
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
)
export const Default: StoryFn = () => (
  <div className="flex gap-2">
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
)
export const Grid: StoryFn = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-2">
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
    <DirectionHover imageUrl="https://picsum.photos/600">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-white">Hover me</h2>
      </div>
    </DirectionHover>
  </div>
)
