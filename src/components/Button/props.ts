import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import type { Colors, DeepPartial, MainSizes, RoundedSizes } from '../../types'
import type { ButtonTheme } from '.'
import type { PositionInButtonGroup } from '../ButtonGroup'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T | null



  href?: string
  /**
   * @name color
   * @description Optional prop to dictaminate the color of the button.
   * @default primary
   * @type Colors
   * @see {@link https://github.com/PolGubau/pol-ui/blob/main/src/types/types.ts} for the list of available colors.
   * @example
   * ```tsx
   * <Button color="primary">Primary</Button>
   * <Button color="secondary">Secondary</Button>
   * <Button color="success">Success</Button>
   * ```
   * @enum [primary, secondary, success, danger, warning, info, light, dark, link]
   */
  color?: Colors

  /**
   * @name FullSized
   * @description Optional prop to make the button full width.
   * @default false
   * @type boolean
   * @example
   * ```tsx
   * <Button fullSized>Full Sized</Button>
   * ```
   *  */

  fullSized?: boolean

  /**
   * @name loading
   * @description Optional prop to show a loader inside the button.
   * @default false
   * @type boolean
   * @example
   * ```tsx
   * <Button loading>Primary</Button>
   * ```
   *  */
  loading?: boolean

  /**
   * @name loadingLabel
   * @description Optional prop to change the label of the button when loading.
   * @default Loading...
   * @type string
   * @example
   * ```tsx
   * <Button loading loadingLabel="Processing...">Primary</Button>
   * ```
   */
  loadingLabel?: string

  /**
   * @name hasMotion
   * @description Optional prop to add motion to the button.
   * @default false
   * @type boolean
   * @example
   * ```tsx
   * <Button hasMotion>Primary</Button>
   * ```
   */
  hasMotion?: boolean

  /**
   * @name hasBackground
   * @description Optional prop to remove the background of the button.
   * @default true
   * @type boolean
   * @example
   * ```tsx
   * <Button hasBackground={false}>Primary</Button>
   * ```
   *
   */

  hasBackground?: boolean
  /**
   * @name loader
   * @description Optional prop to change the loader of the button.
   * @default null
   * @type ReactNode
   * @example
   * ```tsx
   * <Button loading loader={<Spinner />}>Primary</Button>
   * ```
   *
   */
  loader?: ReactNode

  /**
   * @name label
   * @description Optional prop to change the label of the button. CHILDREN WILL OVERRIDE THIS PROP.
   * @default null
   * @type ReactNode
   * @example
   * ```tsx
   * <Button label="Primary">Primary</Button>
   */
  label?: ReactNode

  /**
   * @name outline
   * @description Optional prop to make the button outlined.
   * @default false
   * @type boolean
   * @example
   * ```tsx
   * <Button outline>Primary</Button>
   * ```
   */
  outline?: boolean

  /**
   * @name rounded
   * @description Optional prop to change the border radius of the button.
   * @default md
   * @type RoundedSizes
   * @enum [none, xs, sm, md, lg, xl]
   * @example
   * ```tsx
   * <Button rounded="md">Primary</Button>
   * ```
   */
  rounded?: RoundedSizes

  /**
   * @name positionInGroup
   * @description Optional prop to change the position of the button in a group.
   * @default none
   * @type PositionInButtonGroup
   * @enum [none, first, middle, last]
   * @example
   * ```tsx
   * <Button positionInGroup="first">Primary</Button>
   * ```
   */
  positionInGroup?: keyof PositionInButtonGroup

  /**
   * @name size
   * @description The size of the button.
   * @default md
   * @type MainSizes
   * @enum [xs, sm, md, lg, xl]
   * @control inline-radio
   */
  size?: MainSizes

  /**
   * @name theme
   * @description Optional prop to change the theme of the button.
   * @default {}
   *  
   * @example
   * ```tsx
   * <Button theme={{ color: { primary: 'bg-red-500' } }}>Primary</Button>
   * ```

   */
  theme?: DeepPartial<ButtonTheme>

  /**
   * @name innerClassname
   * @description Optional prop to add a class to the inner span of the button.
   * @default ''
   * @type string
   * @example
   * ```tsx
   * <Button innerClassname="text-red-500">Primary</Button>
   * ```
   *
   */
  innerClassname?: string

  /**
   * @name target
   * @description Optional prop to change the target of the button when using the href prop.
   * @default null
   * @type string
   * @example
   * ```tsx
   * <Button href="https://google.com" target="_blank">Primary</Button>
   * ```
   *
   */
  target?: string
} & ComponentPropsWithoutRef<T>
