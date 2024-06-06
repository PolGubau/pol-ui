export type PopoverTheme = {
  content: {
    base: string
    animation: string
  }
  close: string
}

export const popoverTheme: PopoverTheme = {
  content: {
    base: 'relative rounded-lg p-4 w-[260px] bg-secondary-50 dark:bg-secondary-900 shadow-lg',
    animation:
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },
  close: 'absolute top-2 right-2 height-[25px] width-[25px]',
}
