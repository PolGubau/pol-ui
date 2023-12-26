import type { BannerTheme } from './Banner'

export const bannerTheme: BannerTheme = {
  root: {
    base: 'flex w-full gap-2 items-center justify-between',
    bordered: {
      on: 'border-b border-b-secondary',
      off: '',
    },
  },
}
