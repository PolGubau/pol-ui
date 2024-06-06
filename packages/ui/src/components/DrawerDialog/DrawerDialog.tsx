import * as React from 'react'

import { useMediaQuery } from '../../hooks/use-media-query'
import { Dialog } from '../Dialog'
import { Drawer, DrawerProps } from '../Drawer'

export const DrawerDialog = ({ children, ...props }: DrawerProps) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} {...props}>
        {children}
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} {...props}>
      {children}
    </Drawer>
  )
}
