import type { Meta } from "@storybook/react"

import { LazyImage } from "./LazyImage"

export default {
  title: "Components/LazyImage",
  component: LazyImage,
  tags: ["autodocs"],
} as Meta

export const Default = () => {
  return (
    <section className="grid grid-rows-2 w-[200px] gap-3">
      <div className="border flex flex-col gap-4 p-2 rounded-xl">
        Image 1
        <LazyImage src="https://picsum.photos/600" className="rounded-lg" />
      </div>
      <div className="border flex flex-col gap-4 p-2 rounded-xl">
        Image 2
        <LazyImage src="https://picsum.photos/599" className="rounded-lg" />
      </div>
      <div className="border flex flex-col gap-4 p-2 rounded-xl">
        Image 3
        <LazyImage src="https://picsum.photos/588" className="rounded-lg" />
      </div>
    </section>
  )
}
