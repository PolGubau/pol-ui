import { useState } from "react"

import { ColorsEnum } from "../../types"
import { Button } from "../Button"
import { DialogClose, DialogProps } from "../Dialog"
import { DrawerProps } from "../Drawer"
import { DrawerDialog } from "../DrawerDialog"
import { TimedButton } from "../TimedButton"

type DrawerDialogWithoutChildren = Omit<DrawerProps, "children">

export type ConfirmDialogProps = DrawerDialogWithoutChildren & {
  isOpen?: boolean
  title?: string
  message?: string
  onConfirm: () => void
  onCancel?: () => void
  cancelText?: string
  confirmText?: string
  hold?: boolean
  dialogProps?: DialogProps
  drawerProps?: DrawerProps
}

export const ConfirmDialog = ({
  title = "Are you sure?",
  message = "This action cannot be undone.",
  onConfirm,
  onCancel,
  cancelText = "Cancel",
  confirmText = "Delete",
  hold = false,
  ...rest
}: ConfirmDialogProps) => {
  const drawerDialogProps = rest as DrawerProps
  const [open, setOpen] = useState(false)
  return (
    <DrawerDialog open={open} onOpenChange={setOpen} {...drawerDialogProps}>
      <header className="flex pb-2 p-4 md:bg-secondary/10">
        <h2>{title}</h2>
      </header>
      <main className="px-4 py-2">
        <p>{message}</p>
      </main>
      <footer className="flex justify-end p-2 md:border-t gap-2">
        {onCancel && (
          <DialogClose asChild>
            <Button
              variant={"ghost"}
              color={ColorsEnum.secondary}
              onClick={onCancel}
            >
              {cancelText}
            </Button>
          </DialogClose>
        )}
        {hold ? (
          <TimedButton
            color={ColorsEnum.error}
            onLongPress={() => {
              onConfirm()
              setOpen(false)
            }}
          >
            {confirmText}
          </TimedButton>
        ) : (
          <DialogClose asChild>
            <Button autoFocus color={ColorsEnum.error} onClick={onConfirm}>
              {confirmText}
            </Button>
          </DialogClose>
        )}
      </footer>
    </DrawerDialog>
  )
}
