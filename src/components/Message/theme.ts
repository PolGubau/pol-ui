import { IBoolean } from '../../types'

export interface MessageTheme {
  message: {
    base: string
    content: {
      base: string
      mine: IBoolean
    }
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
    content: {
      base: 'rounded-xl py-1 px-3 z-10 flex items-end gap-3 text-pretty',
      mine: {
        on: 'bg-primary',
        off: 'bg-secondary',
      },
    },

    date: 'text-xs text-secondary-800',
    arrow: {
      base: 'absolute w-0 h-0 border-r-[10px] border-t-[10px] border-l-[10px] border-primary border-transparent',
      mine: {
        on: 'right-0 border-t-primary',
        off: 'left-0 border-t-secondary',
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
