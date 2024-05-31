'use client'

import { Toaster as PrimitiveToaster, toast as primitiveToast } from 'sonner'
import { Loader } from '../Loader'
import type { ToastClassnames, ToasterProps as PrimitiveToasterProps } from './types'
import { mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import { DeepPartial } from '../../types'
import { ToastTheme } from './theme'

export const toast = primitiveToast

export interface ToasterProps extends Omit<PrimitiveToasterProps, 'theme'> {
  theme?: DeepPartial<ToastTheme>
}

export const Toaster = ({ theme: customTheme = {}, ...props }: ToasterProps): React.ReactNode => {
  const theme = mergeDeep(getTheme().toast, customTheme)

  const classNames: ToastClassnames = {
    toast: theme.base,
    title: theme.title,
    description: theme.description,
    success: theme.success,
    error: theme.error,
    info: theme.info,
    warning: theme.warning,
    loading: theme.loading,
    default: theme.default,
  }

  return PrimitiveToaster({
    loadingIcon: (
      <div className="flex">
        <Loader size="sm" />
      </div>
    ),
    toastOptions: { classNames, ...props.toastOptions },
    richColors: props.richColors ?? true,
    closeButton: props.closeButton ?? true,
    ...props,
  })
}
