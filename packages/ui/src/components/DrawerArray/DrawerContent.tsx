import { useState } from "react"
import { TbDeviceFloppy, TbTrash, TbX } from "react-icons/tb"

import { Button } from "../Button"
import { DialogClose } from "../Dialog"
import { IconButton } from "../IconButton"
import { DrawerArrayProps } from "./DrawerArray"

interface DrawerContentProps<T> extends Pick<DrawerArrayProps<T>, "form"> {
  item: T
  handelRemove: () => void
  handleUpdate: (e: T) => void
}
export const DrawerContent = <T extends object>({
  form,
  item,
  handleUpdate,
  handelRemove,
}: DrawerContentProps<T>) => {
  const [innerState, setInnerState] = useState<T>(item)

  return (
    <form
      className="grid h-full grid-rows-[1fr,auto] gap-4 overflow-hidden min-w-[350px] pt-6"
      onSubmit={(e) => {
        e.preventDefault()
        handleUpdate(innerState)
      }}
    >
      <div className="flex flex-col gap-2">
        {form({ value: innerState, onChange: (e) => setInnerState(e) })}
      </div>

      <footer className="flex gap-1 items-center justify-end">
        <DialogClose asChild>
          <Button variant="ghost" color={"secondary"} type="button">
            <TbX size={15} />
            Cancel
          </Button>
        </DialogClose>
        <DialogClose disabled={innerState === item} asChild>
          <Button type="submit">
            <TbDeviceFloppy size={15} />
            Save
          </Button>
        </DialogClose>
        <IconButton
          size={"sm"}
          color={"error"}
          type="button"
          label={"Delete"}
          onClick={handelRemove}
        >
          <TbTrash size={15} />
        </IconButton>
      </footer>
    </form>
  )
}

export default DrawerContent
