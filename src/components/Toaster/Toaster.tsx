'use client'

import { Toaster as PrimitiveToaster, toast as primitiveToast } from 'sonner'
import type { ToastT, ToasterProps } from './types'
import { Loader } from '../Loader'
import { mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { ToastTheme } from './theme'

/**
 * Toaster component for displaying toasts.
 * @param {ToasterProps} props - The properties of the Toaster component.
 * @returns {React.ReactNode} - Rendered Toaster component.
 */
export const Toaster = (props: ToasterProps): React.ReactNode => {
  return PrimitiveToaster({
    loadingIcon: <Loader size="sm" />,
    ...props,
  })
}
/**
 * Interface representing the properties of a toast component.
 * @interface ToastProps
 * @extends {Omit<ToastT, 'id'>}
 */
export interface ToastProps extends Omit<ToastT, 'id'> {
  /**
   * @name theme
   * @type {DeepPartial<ToastTheme>}
   * @description Optional prop to change the theme of the toast.
   * @default undefined
   * @see {@link DeepPartial}
   * @see {@link ToastTheme}
   * @example
   * ```tsx
   * <Toast theme={{ color: 'text-red-500' }} />
   * ```
   */
  theme?: DeepPartial<ToastTheme>
}
/**
 * Display a toast notification.
 * @function toast
 * @param {ToastProps} props - The properties of the toast notification.
 * @returns {void} - Displays a toast notification.
 */
export const toast = ({
  title,
  theme: customTheme = {},

  ...props
}: ToastProps): void => {
  const theme = mergeDeep(getTheme().toast, customTheme)

  primitiveToast(title, {
    unstyled: true,

    classNames: {
      toast: theme.base,
      title: theme.title,
      description: theme.description,
      success: theme.success,
      error: theme.error,
      info: theme.info,
      warning: theme.warning,
      loading: theme.loading,
      default: theme.default,
    },
    dismissible: true,
    ...props,
  })
}
