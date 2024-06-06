import type { IBoolean } from '../../types'

export interface LinkTheme {
  base: string
  underline: IBoolean
}
export const linkTheme: LinkTheme = {
  base: '',
  underline: {
    off: 'no-underline',
    on: 'underline',
  },
}
