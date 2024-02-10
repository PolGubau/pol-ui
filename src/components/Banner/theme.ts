import type { ColorsType, IBoolean } from '../../types'

export interface BannerTheme {
  base: string
  bordered: IBoolean
  color: ColorsType
}
export const bannerTheme: BannerTheme = {
  base: 'flex w-full gap-2 items-center justify-between py-2 px-4 rounded-2xl',
  bordered: {
    on: 'border-b border-b-secondary',
    off: '',
  },
  color: {
    error: 'text-error-900 bg-error-200 dark:text-error-50 dark:bg-error-800',
    info: 'text-info-900 bg-info-200 dark:text-info-50 dark:bg-info-800',
    success: 'text-success-900  bg-success-200 dark:text-success-50 dark:bg-success-800',
    warning: 'text-warning-900  bg-warning-200 dark:text-warning-50 dark:bg-warning-800',
    secondary: 'text-secondary-900 bg-secondary-200 dark:text-secondary-50 dark:bg-secondary-800',
    primary: 'text-primary-900 bg-primary-200 dark:text-primary-50 dark:bg-primary-800',
  },
}
