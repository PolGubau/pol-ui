import type React from 'react'

export type ToastTypes = 'normal' | 'action' | 'success' | 'info' | 'warning' | 'error' | 'loading' | 'default'
export type PromiseT<Data = unknown> = Promise<Data> | (() => Promise<Data>)
export type PromiseExternalToast = Omit<ExternalToast, 'description'>
export type PromiseData<ToastData = unknown> = PromiseExternalToast & {
  loading?: string | React.ReactNode
  success?: string | React.ReactNode | ((data: ToastData) => React.ReactNode | string)
  error?: string | React.ReactNode | ((error: unknown) => React.ReactNode | string)
  description?: string | React.ReactNode | ((data: unknown) => React.ReactNode | string)
  finally?: () => void | Promise<void>
}
export interface ToastClassnames {
  toast?: string
  title?: string
  description?: string
  loader?: string
  closeButton?: string
  cancelButton?: string
  actionButton?: string
  success?: string
  error?: string
  info?: string
  warning?: string
  loading?: string
  default?: string
}
export interface ToastT {
  id: number | string
  title?: string | React.ReactNode
  type?: ToastTypes
  icon?: React.ReactNode
  jsx?: React.ReactNode
  invert?: boolean
  closeButton?: boolean
  dismissible?: boolean
  description?: React.ReactNode
  duration?: number
  delete?: boolean
  important?: boolean
  action?: {
    label: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  cancel?: {
    label: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  onDismiss?: (toast: ToastT) => void
  onAutoClose?: (toast: ToastT) => void
  promise?: PromiseT
  cancelButtonStyle?: React.CSSProperties
  actionButtonStyle?: React.CSSProperties
  style?: React.CSSProperties
  unstyled?: boolean
  className?: string
  classNames?: ToastClassnames
  descriptionClassName?: string
  position?: Position
}
export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
export interface ToastOptions {
  className?: string
  closeButton?: boolean
  descriptionClassName?: string
  style?: React.CSSProperties
  cancelButtonStyle?: React.CSSProperties
  actionButtonStyle?: React.CSSProperties
  duration?: number
  unstyled?: boolean
  classNames?: ToastClassnames
}
export interface ToasterProps {
  invert?: boolean
  theme?: 'light' | 'dark' | 'system'
  position?: Position
  hotkey?: string[]
  richColors?: boolean
  expand?: boolean
  duration?: number
  gap?: number
  visibleToasts?: number
  closeButton?: boolean
  toastOptions?: ToastOptions
  className?: string
  style?: React.CSSProperties
  offset?: string | number
  dir?: 'rtl' | 'ltr' | 'auto'
  loadingIcon?: React.ReactNode
  containerAriaLabel?: string
  pauseWhenPageIsHidden?: boolean
}
export type ExternalToast = Omit<ToastT, 'id' | 'type' | 'title' | 'jsx' | 'delete' | 'promise'> & {
  id?: number | string
}
