import React from "react"
import * as D from "@radix-ui/react-dialog"
import { TbX } from "react-icons/tb"

import { cn } from "../../../helpers"
import { SizesEnum } from "../../../types"
import { IconButton } from "../../IconButton"
import { DialogPortal } from "../Dialog"
import { DialogOverlay } from "./overlay"

type CommonPopupContentProps = {
  withOverlay?: boolean
  overlayProps?: D.DialogOverlayProps
}

type DialogContentProps = React.ComponentPropsWithoutRef<typeof D.Content> &
  CommonPopupContentProps & {
    hasCloseButton?: boolean
    closeIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  }

const DialogContent = React.forwardRef<
  React.ElementRef<typeof D.Content>,
  DialogContentProps
>(
  (
    {
      className,
      overlayProps,
      withOverlay = true,
      closeIcon: Icon = TbX,
      hasCloseButton = true,
      children,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      {withOverlay && <DialogOverlay {...overlayProps} />}{" "}
      <D.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg max-h-[85dvh] overflow-auto translate-x-[-50%] translate-y-[-50%] gap-4 border border-secondary/10 bg-secondary-50 dark:bg-secondary-900 text-secondary-900  dark:text-secondary-50 p-6 shadow-lg duration-200",
          //
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl",
          className
        )}
        {...props}
      >
        {children}
        {hasCloseButton && (
          <D.Close asChild className="absolute right-2 top-2">
            <IconButton size={SizesEnum.sm}>
              <Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </IconButton>
          </D.Close>
        )}
      </D.Content>
    </DialogPortal>
  )
)
DialogContent.displayName = D.Content.displayName

export { DialogContent, type DialogContentProps, type CommonPopupContentProps }
