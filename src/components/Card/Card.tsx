'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { CardTheme } from './theme'
import { omit } from '../../helpers'

interface CommonCardProps extends ComponentProps<'div'> {
  horizontal?: boolean
  childrenClass?: string
  href?: string
  imageClass?: string
  theme?: DeepPartial<CardTheme>
  className?: string
}

export type CardProps = (
  | { imgAlt?: string; imgSrc?: string; renderImage?: never }
  | {
      renderImage?: (theme: DeepPartial<CardTheme>, horizontal: boolean) => JSX.Element
      imgAlt?: never
      imgSrc?: never
    }
) &
  CommonCardProps

/**
 * @name Card
 * @description A Card component that can be used to display content in a card-like style. Usefull in a blog, a social network, a forum... It can be horizontal or vertical and can contain an image.
 *
 * @param {React.ReactNode} props.children The content of the card.
 * @param {string} props.className Custom class name for the card.
 * @param {boolean} props.horizontal, Whether the card should be horizontal or not.
 * @param {string} props.href, If provided, the card will be an anchor link.
 * @param {string} props.imageClass, Custom class name for the image.
 * @param {DeepPartial<CardTheme>} props.theme, To override default theme for the card.
 * @param {string} props.childrenClass, Custom class name for the children.
 * @param {string} props.imgAlt, The alt text for the image.
 * @param {string} props.imgSrc, The source of the image.
 * @param {() => JSX.Element} props.renderImage, A custom render function for the image component.

 * 
 * @returns {React.ReactNode} A Card component.
 * 
 * @example
 * <Card>
 *    <h5 className="text-2xl font-bold">Card title!</h5>
 *     <p className="font-normal text-secondary-700">
 *       Hello there!
 *    </p>
 * </Card>
 * 
 */
export const Card: FC<CardProps> = (props): React.ReactNode => {
  const {
    children,
    className,
    horizontal = false,
    href,
    theme: customTheme = {},
    childrenClass = '',
    imageClass = '',
    renderImage,
  } = props

  // Card component will be an Anchor link if href prop is passed.

  const Component = typeof href === 'undefined' ? 'div' : 'a'

  const theme = mergeDeep(getTheme().card, customTheme)
  const externalProps = omit([
    'children',
    'className',
    'horizontal',
    'href',
    'theme',
    'childrenClass',
    'imageClass',
    'renderImage',
  ])(props)
  return (
    <Component
      data-testid="ui-card"
      href={href}
      className={twMerge(
        theme.root.base,
        theme.root.horizontal[horizontal ? 'on' : 'off'],
        href && theme.root.href,
        className,
      )}
      {...externalProps}
    >
      {!renderImage && props.imgSrc && (
        <img src={props.imgSrc} alt={props.imgAlt} className={imageClass} data-testid="ui-card-image" />
      )}
      {renderImage?.(theme, horizontal)}
      <div className={twMerge(theme.root.children, childrenClass)}>{children}</div>
    </Component>
  )
}
