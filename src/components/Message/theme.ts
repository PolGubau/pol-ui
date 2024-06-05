import { IBoolean } from '../../types'

export interface MessageTheme {
  message: {
    base: string
    content: string
    date: string
    arrow: {
      base: string
      mine: IBoolean
    }
  }
  messageGroup: {
    base: string
    mine: IBoolean
  }
}
export const messageTheme: MessageTheme = {
  message: {
    base: 'relative px-2 flex max-w-[80%] w-fit',
    content: 'bg-primary rounded-xl py-1 px-3 z-10 flex items-end gap-3 text-pretty',
    date: 'text-xs text-secondary-800',
    arrow: {
      base: 'absolute w-0 h-0 border-r-[10px] border-t-[10px] border-l-[10px] border-primary border-transparent border-t-primary',
      mine: {
        on: 'right-0',
        off: 'left-0',
      },
    },
  },
  messageGroup: {
    base: 'flex flex-col gap-1',
    mine: {
      on: 'items-end',
      off: 'items-start',
    },
  },
}
