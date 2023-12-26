'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { HeadingLevel, IBoolean } from '../PoluiProvider'
import { useAccordionContext } from './AccordionPanelContext'
import { HeadingLevelEnum } from '../PoluiProvider/enums'
import DynamicHeading from '../Text/DynamicHeading/DynamicHeading'
import { useRipple } from '../../hooks'
export interface AccordionTitleTheme {
  arrow: {
    base: string
    open: IBoolean
  }
  base: string
  isBordered: IBoolean
  heading: string
  open: IBoolean
}

export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>
  as?: HeadingLevel
  theme?: DeepPartial<AccordionTitleTheme>
  rippleClassName?: string
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Component = HeadingLevelEnum.h2,
  children,
  className,
  rippleClassName,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, isBordered: bordered, isOpen, setOpen } = useAccordionContext()
  const onClick = () => typeof setOpen !== 'undefined' && setOpen()

  const theme = mergeDeep(getTheme().accordion.title, customTheme)
  const [ripple, event] = useRipple({
    disabled: !setOpen,
    className: twMerge('bg-secondary', rippleClassName),
  })
  return (
    <button
      ref={ripple}
      onPointerUp={event}
      className={twMerge(
        theme.base,
        theme.isBordered[bordered ? 'on' : 'off'],
        theme.open[isOpen ? 'on' : 'off'],
        className,
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      <DynamicHeading as={Component} className={theme.heading} data-testid="ui-accordion-heading">
        {children}
      </DynamicHeading>

      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={twMerge(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off'])}
          data-testid="ui-accordion-arrow"
        />
      )}
    </button>
  )
}
