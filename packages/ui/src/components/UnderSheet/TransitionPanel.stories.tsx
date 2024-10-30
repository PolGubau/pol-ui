import type { Meta } from "@storybook/react"
import { TbHeart, TbLock, TbPlus, TbShare, TbWand, TbX } from "react-icons/tb"

import { Button } from "../Button"
import { IconButton } from "../IconButton"
import { UnderSheet } from "./UnderSheet"

export default {
  title: "Components/UnderSheet",
  component: UnderSheet,
  decorators: [
    (Story) => (
      <div className=" ">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta
export const Default = () => {
  return (
    <UnderSheet
      content={
        <div className="flex flex-col space-y-2 px-4">
          <header className="flex items-center justify-between gap-2 pb-5 pt-3">
            <IconButton size={"sm"}>
              <TbPlus className="h-4 w-4" />
            </IconButton>
            <div className="text-center">Actions</div>
            <IconButton size={"sm"} onClick={() => {}}>
              <TbX className="h-4 w-4" />
            </IconButton>
          </header>

          <div className="flex gap-2 justify-between md:justify-center">
            <Button color={"secondary"} variant={"ghost"}>
              <TbHeart className="h-4 w-4" />
              <span className="text-sm">Like</span>
            </Button>
            <Button color={"secondary"} variant={"ghost"}>
              <TbLock className="h-4 w-4" />
              <span className="text-sm">Lock</span>
            </Button>
            <Button color={"secondary"} variant={"ghost"}>
              <TbShare className="h-4 w-4" />
              <span className="text-sm">Share</span>
            </Button>
          </div>
          <Button fullSized>
            <TbWand className="h-4 w-4" />
            <span className="text-sm">Regenerate</span>
          </Button>
        </div>
      }
    >
      <div className="dark:text-secondary-50">
        <h3 className="font-medium text-lg pb-2">Lorem ipsum dolor sit amet</h3>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          recusandae, perspiciatis tempore optio laboriosam ex neque provident
          temporibus similique dolores saepe repellat dolorem nobis vitae et
          fuga minus itaque atque cupiditate.
        </p>
        <p className="opacity-80">
          Ipsam excepturi accusamus, consequatur sequi? Autem necessitatibus
          incidunt impedit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et, recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </UnderSheet>
  )
}
