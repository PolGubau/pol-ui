import { useState } from "react"
import { TbEdit, TbPlus } from "react-icons/tb"

import { getMainField } from "../../helpers/get-main-field/get-main-field"
import useArray from "../../hooks/use-array/use-array"
import { Button } from "../Button"
import { Card } from "../Card"
import { ConfirmDialog } from "../ConfirmDialog"
import { DialogClose } from "../Dialog"
import { Drawer } from "../Drawer/Drawer"
import { IconButton } from "../IconButton"
import DrawerContent from "./DrawerContent"

export interface DrawerArrayProps<T> {
  values: T[]
  initialProperty: T
  onChange: (values: T[]) => void
  label?: string
  form: (props: { value: T; onChange: (value: T) => void }) => JSX.Element
  view?: (value: T) => JSX.Element
}

export const DrawerArray = <T extends object>({
  values = [],
  onChange,
  initialProperty,
  form,
  label,
  view,
}: DrawerArrayProps<T>) => {
  //
  const { array, push, update, remove } = useArray(values, onChange)

  const [newProp, setNewProp] = useState<T>(initialProperty)
  const handleCreateNew = (e: any) => {
    e.preventDefault()
    push(newProp)
    setNewProp(initialProperty)
  }

  return (
    <section className="flex flex-col gap-2 overflow-hidden">
      <header className="flex gap-2 items-center justify-between">
        {label && (
          <div className="flex gap-1">
            <span className="">{label}</span>
            <span className="text-sm opacity-95">({array.length})</span>
          </div>
        )}
      </header>

      {array.map((item, index) => (
        <Card
          key={index}
          className="flex flex-row w-full justify-between items-center p-0 gap-0 overflow-hidden"
        >
          <Drawer
            direction="right"
            className="overflow-x-hidden"
            trigger={
              <div className=" gap-2 flex-1 w-full flex items-center justify-between p-1 truncate pl-3">
                {view ? (
                  view(item)
                ) : (
                  <p className="flex items-center gap-1">
                    <span className="hidden md:flex">
                      {index + 1}. {` `}
                    </span>
                    {getMainField(item).value}
                  </p>
                )}
                <IconButton size={"sm"}>
                  <TbEdit size={17} />
                </IconButton>
              </div>
            }
          >
            <DrawerContent
              item={item}
              handleUpdate={(value) => update(index, value)}
              handelRemove={() => remove(index)}
              form={form}
            />
          </Drawer>
          <div className="pr-1">
            <ConfirmDialog onConfirm={() => remove(index)} />
            {/* <DeleteButton onConfirm={() => remove(index)} /> */}
          </div>
        </Card>
      ))}
      <Drawer
        direction="right"
        trigger={
          <Button
            color={"secondary"}
            variant={"ghost"}
            className="text-left justify-start"
          >
            <TbPlus />
            {"AddNew"}
          </Button>
        }
      >
        <form
          onSubmit={handleCreateNew}
          className="grid h-full grid-rows-[1fr,auto] gap-4 overflow-hidden pt-10"
        >
          <div className="">
            {form({ value: newProp, onChange: setNewProp })}
          </div>
          <DialogClose>
            <Button>{"create"}</Button>
          </DialogClose>
        </form>
      </Drawer>
    </section>
  )
}
