'use client'

import { getTheme } from '../../theme-store'
import type { IconButtonTheme } from './theme'
import { Tooltip } from '../Tooltip'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { Button, type ButtonProps } from '../Button'
import React from 'react'
import type { DeepPartial } from '../../types'
import { cn } from '../../helpers'

export interface IconButtonProps extends ButtonProps {
  theme?: DeepPartial<IconButtonTheme>
  label?: string
  allowTooltip?: boolean
}

/**
 * @name IconButton
 *
 * @description Base component for displaying icons as button with ripple effect, tooltip, and loading state
 *
 * @param props IconButtonProps extends ButtonBaseProps
 *
 * @returns React.FC IconButton component
 *
 * @example ```
 * <IconButton label="Search" color="primary" size="md" rounded="full" isLoading={false} outline={false}>
 *    <TbSearch />
 * </IconButton>
 *
 * <IconButton>
 *    <MdFilter />
 * </IconButton>
 *
 * <IconButton color="info" size="xl" rounded="none">
 *    <LogoIcon />
 * </IconButton>
 * ```
 *
 * @see https://ui.polgubau.com/docs/iconButton
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'ghost',
      rounded = 'full',
      theme: customTheme = {},
      label = null,
      loadingLabel = null,
      allowTooltip = true,
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().iconButton, customTheme)

    return (
      <Tooltip label={allowTooltip && label}>
        <Button
          {...props}
          variant={variant}
          ref={ref}
          rounded={rounded}
          loadingLabel={loadingLabel}
          className={cn(theme.base, className)}
        />
      </Tooltip>
    )
  },
)
IconButton.displayName = 'IconButton'
