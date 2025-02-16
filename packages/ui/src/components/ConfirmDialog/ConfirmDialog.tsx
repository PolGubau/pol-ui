"use client";

import { useState } from "react";

import { ColorsEnum } from "../../types";
import { Button } from "../Button";
import { DialogClose, DialogFooter, type DialogProps } from "../Dialog";
import type { DrawerProps } from "../Drawer";
import { DrawerDialog } from "../DrawerDialog";
import { TimedButton } from "../TimedButton";

type DrawerDialogWithoutChildren = Omit<DrawerProps, "children">;

export type ConfirmDialogProps = DrawerDialogWithoutChildren & {
  isOpen?: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  cancelText?: string;
  confirmText?: string;
  hold?: boolean;
  dialogProps?: DialogProps;
  drawerProps?: DrawerProps;
};

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
  const drawerDialogProps = rest as DrawerProps;
  const [open, setOpen] = useState(false);
  return (
    <DrawerDialog open={open} onOpenChange={setOpen} {...drawerDialogProps}>
      <header>
        <h2>{title}</h2>
      </header>
      <main className="text-sm">
        <p>{message}</p>
      </main>
      <DialogFooter>
        {onCancel && (
          <DialogClose asChild={true}>
            <Button variant={"ghost"} color={ColorsEnum.secondary} onClick={onCancel}>
              {cancelText}
            </Button>
          </DialogClose>
        )}
        {hold ? (
          <TimedButton
            color={ColorsEnum.error}
            onLongPress={() => {
              onConfirm();
              setOpen(false);
            }}
          >
            {confirmText}
          </TimedButton>
        ) : (
          <DialogClose asChild={true}>
            <Button autoFocus={true} color={ColorsEnum.error} onClick={onConfirm}>
              {confirmText}
            </Button>
          </DialogClose>
        )}
      </DialogFooter>
    </DrawerDialog>
  );
};
