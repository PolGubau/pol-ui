'use client'

import { Toaster as PrimitiveToaster } from 'sonner'
import { Loader } from '../Loader'
import type { ToasterProps } from './types'

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
