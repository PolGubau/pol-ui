import React from 'react'

type ToastTypes = 'normal' | 'action' | 'success' | 'info' | 'warning' | 'error' | 'loading' | 'default'
type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>)
type PromiseExternalToast = Omit<ExternalToast, 'description'>
type PromiseData<ToastData = any> = PromiseExternalToast & {
  loading?: string | React.ReactNode
  success?: string | React.ReactNode | ((data: ToastData) => React.ReactNode | string)
  error?: string | React.ReactNode | ((error: any) => React.ReactNode | string)
  description?: string | React.ReactNode | ((data: any) => React.ReactNode | string)
  finally?: () => void | Promise<void>
}
interface ToastClassnames {
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
  content?: string
  icon?: string
}
interface ToastIcons {
  success?: React.ReactNode
  info?: React.ReactNode
  warning?: React.ReactNode
  error?: React.ReactNode
  loading?: React.ReactNode
}
interface ToastAction {
  label: string | JSX.Element
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  actionButtonStyle?: React.CSSProperties
}
interface ToastT {
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
  action?: ToastAction | React.ReactNode
  cancel?: ToastAction | React.ReactNode
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
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
interface ToastOptions {
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
type CnFunction = (...classes: Array<string | undefined>) => string
interface ToasterProps {
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
  icons?: ToastIcons
  containerAriaLabel?: string
  pauseWhenPageIsHidden?: boolean
  cn?: CnFunction
}
type ExternalToast = Omit<ToastT, 'id' | 'type' | 'title' | 'jsx' | 'delete' | 'promise'> & {
  id?: number | string
}

declare const toast: ((message: string | React.ReactNode, data?: ExternalToast) => string | number) & {
  success: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  info: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  warning: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  error: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  custom: (jsx: (id: number | string) => React.ReactElement, data?: ExternalToast) => string | number
  message: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  promise: <ToastData>(promise: PromiseT<ToastData>, data?: PromiseData<ToastData>) => string | number
  dismiss: (id?: number | string) => string | number
  loading: (message: string | React.ReactNode, data?: ExternalToast) => string | number
}

declare const Toaster: (props: ToasterProps) => JSX.Element

export {
  type ExternalToast,
  type ToastT,
  Toaster,
  toast,
  type ToastClassnames,
  type ToastOptions,
  type ToasterProps,
  type ToastIcons,
  type PromiseData,
  type PromiseT,
  type PromiseExternalToast,
  type Position,
  type ToastAction,
  type ToastTypes,
}
