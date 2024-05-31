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
/**
 * Interface representing classnames for different parts of a toast.
 * @interface ToastClassnames
 * @property {string} [toast] - Classname for the toast container.
 * @property {string} [title] - Classname for the title of the toast.
 * @property {string} [description] - Classname for the description of the toast.
 * @property {string} [loader] - Classname for the loader of the toast.
 * @property {string} [closeButton] - Classname for the close button of the toast.
 * @property {string} [cancelButton] - Classname for the cancel button of the toast.
 * @property {string} [actionButton] - Classname for the action button of the toast.
 * @property {string} [success] - Classname for success-themed toast.
 * @property {string} [error] - Classname for error-themed toast.
 * @property {string} [info] - Classname for info-themed toast.
 * @property {string} [warning] - Classname for warning-themed toast.
 * @property {string} [loading] - Classname for loading-themed toast.
 * @property {string} [default] - Classname for default-themed toast.
 */
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
/**
 * Interface representing the properties of a toast component.
 * @interface ToastT
 */

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'

/**
 * Interface representing options for customizing the behavior and appearance of a toast.
 * @interface ToastOptions
 */
export interface ToastOptions {
  /**
   * @name className
   * @type {string}
   * @description Specifies additional class names for the toast.
   * @default undefined
   */
  className?: string

  /**
   * @name closeButton
   * @type {boolean}
   * @description Enables the close button for the toast.
   * @default undefined
   */
  closeButton?: boolean

  /**
   * @name descriptionClassName
   * @type {string}
   * @description Specifies additional class names for the toast description.
   * @default undefined
   */
  descriptionClassName?: string

  /**
   * @name style
   * @type {React.CSSProperties}
   * @description Specifies additional styles for the toast.
   * @default undefined
   */
  style?: React.CSSProperties

  /**
   * @name cancelButtonStyle
   * @type {React.CSSProperties}
   * @description Specifies additional styles for the cancel button (if present).
   * @default undefined
   */
  cancelButtonStyle?: React.CSSProperties

  /**
   * @name actionButtonStyle
   * @type {React.CSSProperties}
   * @description Specifies additional styles for the action button (if present).
   * @default undefined
   */
  actionButtonStyle?: React.CSSProperties

  /**
   * @name duration
   * @type {number}
   * @description Specifies the duration for which the toast will be displayed.
   * @default undefined
   */
  duration?: number

  /**
   * @name unstyled
   * @type {boolean}
   * @description Disables default styles for the toast.
   * @default undefined
   */
  unstyled?: boolean

  /**
   * @name classNames
   * @type {ToastClassnames}
   * @description Specifies class names for different parts of the toast.
   * @default undefined
   * @see {@link ToastClassnames}
   */
  classNames?: ToastClassnames
}

/**
 * Interface representing properties for the Toaster component.
 * @interface ToasterProps
 */
export interface ToasterProps {
  /**
   * @name invert
   * @type {boolean}
   * @default false
   * @description Inverts the color of the toast.
   */
  invert?: boolean

  /**
   * @name theme
   * @type {'light' | 'dark' | 'system'}
   * @description Specifies the theme for the toaster.
   * @default undefined
   */
  theme?: 'light' | 'dark' | 'system'

  /**
   * @name position
   * @type {Position}
   * @description Specifies the position of the toaster on the screen.
   * @default undefined
   */
  position?: Position

  /**
   * @name hotkey
   * @type {string[]}
   * @description Specifies the hotkey(s) to trigger the toaster.
   * @default undefined
   */
  hotkey?: string[]

  /**
   * @name richColors
   * @type {boolean}
   * @description Enables rich colors for the toasts.
   * @default undefined
   */
  richColors?: boolean

  /**
   * @name expand
   * @type {boolean}
   * @description Enables expanding behavior for the toasts.
   * @default undefined
   */
  expand?: boolean

  /**
   * @name duration
   * @type {number}
   * @description Specifies the duration for which the toasts will be displayed.
   * @default undefined
   */
  duration?: number

  /**
   * @name gap
   * @type {number}
   * @description Specifies the gap between toasts.
   * @default undefined
   */
  gap?: number

  /**
   * @name visibleToasts
   * @type {number}
   * @description Specifies the maximum number of visible toasts.
   * @default undefined
   */
  visibleToasts?: number

  /**
   * @name closeButton
   * @type {boolean}
   * @description Enables the close button for each toast.
   * @default undefined
   */
  closeButton?: boolean

  /**
   * @name toastOptions
   * @type {ToastOptions}
   * @description Specifies additional options for the toasts.
   * @default undefined
   * @see {@link ToastOptions}
   */
  toastOptions?: ToastOptions

  /**
   * @name className
   * @type {string}
   * @description Specifies additional class names for the toaster.
   * @default undefined
   */
  className?: string

  /**
   * @name style
   * @type {React.CSSProperties}
   * @description Specifies additional styles for the toaster.
   * @default undefined
   */
  style?: React.CSSProperties

  /**
   * @name offset
   * @type {string | number}
   * @description Specifies the offset for the toaster.
   * @default undefined
   */
  offset?: string | number

  /**
   * @name dir
   * @type {'rtl' | 'ltr' | 'auto'}
   * @description Specifies the text direction for the toaster.
   * @default undefined
   */
  dir?: 'rtl' | 'ltr' | 'auto'

  /**
   * @name loadingIcon
   * @type {React.ReactNode}
   * @description Specifies the loading icon for the toaster.
   * @default undefined
   */
  loadingIcon?: React.ReactNode

  /**
   * @name containerAriaLabel
   * @type {string}
   * @description Specifies the ARIA label for the toaster container.
   * @default undefined
   */
  containerAriaLabel?: string

  /**
   * @name pauseWhenPageIsHidden
   * @type {boolean}
   * @description Pauses toasts when the page is hidden.
   * @default undefined
   */
  pauseWhenPageIsHidden?: boolean
}
