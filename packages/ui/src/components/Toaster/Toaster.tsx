"use client"

/**
 * Based on Sonner's Toaster component, see [Sonner](https://sonner.emilkowal.ski/).
 */
import { Toaster as PrimitiveToaster, toast } from "sonner"

import { mergeDeep } from "../../helpers"
import { getTheme } from "../../theme-store"
import { DeepPartial } from "../../types"
import { Loader } from "../Loader"
import { ToastTheme } from "./theme"
import type { ToasterProps as PrimitiveToasterProps } from "./types"

export interface ToasterProps extends Omit<PrimitiveToasterProps, "theme"> {
  theme?: DeepPartial<ToastTheme>
}

export const Toaster = ({
  theme: customTheme = {},
  ...props
}: ToasterProps): React.ReactNode => {
  const theme = mergeDeep(getTheme().toast, customTheme)

  const classNames = {
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
export { toast }
