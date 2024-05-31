import { ToastT, toast as primitiveToast } from 'sonner'
import { DeepPartial } from '../../types'
import { ToastTheme } from './theme'

export interface ToastProps extends ToastT {
  theme?: DeepPartial<ToastTheme>
}
/**
 * Display a toast notification.
 * @function toast
 * @param {ToastProps} props - The properties of the toast notification.
 * @returns {void} - Displays a toast notification.
 */

type message = string | React.ReactNode

// export const toast = (props: toastType) => {
//   // const theme = mergeDeep(getTheme().toast, customTheme)
//   return primitiveToast(props)
// }

export const toast = primitiveToast
