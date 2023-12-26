'use client'

import type { FC, MouseEventHandler } from 'react'
import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import { ColorsEnum } from '../PoluiProvider/enums'
import { twMerge } from 'tailwind-merge'
export type CloseBannerButtonProps = ButtonProps

export const CloseButton: FC<CloseBannerButtonProps> = ({ children, ...props }) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = event => {
    const button = event.target as HTMLButtonElement
    const banner = button.closest('[role="banner"]')
    banner?.remove()
  }

  return (
    <Button
      onClick={onClick}
      color={ColorsEnum.secondary}
      {...props}
      className={twMerge('bg-transparent text-current rounded-full', props.className)}
    >
      {children}
    </Button>
  )
}

CloseButton.displayName = 'Banner.CloseButton'
