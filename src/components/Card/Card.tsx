import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { omit } from '../../helpers/omit'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { CardTheme } from './theme'

interface CommonCardProps extends ComponentProps<'div'> {
  horizontal?: boolean
  childrenClass?: string
  href?: string
  imageClass?: string
  theme?: DeepPartial<CardTheme>
}

export type CardProps = (
  | { imgAlt?: string; imgSrc?: string; renderImage?: never; className?: string }
  | {
      /** Allows to provide a custom render function for the image component. Useful in Next.JS and Gatsby. **Setting this will disable `imgSrc` and `imgAlt`**.
       */
      renderImage?: (theme: DeepPartial<CardTheme>, horizontal: boolean) => JSX.Element
      imgAlt?: never
      imgSrc?: never
      className?: string
    }
) &
  CommonCardProps

/**
 * @name Card
 * @description A Card component that can be used to display content in a card-like style.
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
export const Card: FC<CardProps> = props => {
  const { children, className, horizontal, href, theme: customTheme = {}, childrenClass = '', imageClass = '' } = props

  // Card component will be an Anchor link if href prop is passed.

  const Component = typeof href === 'undefined' ? 'div' : 'a'
  const externalProps = removeCustomProps(props)
  const theme = mergeDeep(getTheme().card, customTheme)

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
      <img src={props.imgSrc} alt={props.imgAlt} className={imageClass} />
      {/* <Image {...props} className={imageClass} /> */}
      <div className={twMerge(theme.root.children, childrenClass)}>{children}</div>
    </Component>
  )
}

const removeCustomProps = omit([
  'renderImage',
  'imgSrc',
  'imgAlt',
  'children',
  'className',
  'horizontal',
  'href',
  'theme',
])
