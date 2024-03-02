'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial, HeadingLevel, IBoolean } from '../../types/types'
import { useAccordionContext } from './AccordionPanelContext'
import { HeadingLevelEnum } from '../../types/enums'
import DynamicHeading from '../DynamicHeading/DynamicHeading'
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

/**
 * @name AccordionTitleProps
 * @description Props for the AccordionTitle component.
 * @property {React.ReactNode} children
 * @property {string} className
 * @property {string} colorToTailwindName
 * @property {DeepPartial<AccordionTitleTheme>} theme
 * @property {HeadingLevel} as
 * @property {FC<ComponentProps<'svg'>>} arrowIcon
 */
export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>
  as?: HeadingLevel
  theme?: DeepPartial<AccordionTitleTheme>
  colorToTailwindName?: string
}

/**
 * @name AccordionTitle
 * @param {AccordionTitleProps} props
 * @description AccordionTitle is the title of the accordion panel that is shown when the panel is closed.
 * @example
 * <AccordionTitle>
 *   <p>Content</p>
 * </AccordionTitle>
 * @returns {JSX.Element}
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Component = HeadingLevelEnum.h2,
  children,
  className,
  colorToTailwindName,
  theme: customTheme = {},
  ...props
}: AccordionTitleProps): JSX.Element => {
  const { arrowIcon: ArrowIcon, isBordered: bordered, isOpen, setOpen } = useAccordionContext()
  const onClick = () => typeof setOpen !== 'undefined' && setOpen()

  const theme = mergeDeep(getTheme().accordion.title, customTheme)
  const [ripple, event] = useRipple({
    disabled: !setOpen,
    className: twMerge('bg-secondary-700', colorToTailwindName),
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
