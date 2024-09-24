import * as React from "react"

import { useMediaQuery } from "../../hooks/use-media-query"
import { Dialog, DialogProps } from "../Dialog"
import { Drawer, DrawerProps } from "../Drawer"

export type DrawerDialogProps = DrawerProps &
  DialogProps & {
    children: React.ReactNode
  }

export const DrawerDialog = ({ children, ...rest }: DrawerDialogProps) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    const propsForDialog = rest as DialogProps
    return (
      <Dialog open={open} onOpenChange={setOpen} {...propsForDialog}>
        {children}
      </Dialog>
    )
  }
  const propsForDrawer = rest as DrawerProps

  return (
    <Drawer open={open} onOpenChange={setOpen} {...propsForDrawer}>
      {children}
    </Drawer>
  )
}
