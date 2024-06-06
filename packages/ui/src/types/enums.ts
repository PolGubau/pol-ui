/*
THIS FILE LIST ALL THE ENUMS USED IN THE BASE POL-UI THEME
*/

/**
 * @name GetValuesEnum
 * @description Helper type to get the values of an enum dynamically
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type GetValuesEnum<T> = T[keyof T]

/**
 * @name MainSizesEnum
 * @description Enum for the different sizes of the components
 * @property {string} xs - Extra small
 * @property {string} sm - Small
 * @property {string} md - Medium
 * @property {string} lg - Large
 * @property {string} xl - Extra large
 * @example
 * <Button size={MainSizesEnum.xs} />
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum MainSizesEnum {
  /**
   * @name ExtraSmall
   * @description Extra small size for the components
   * @example
   * <Button size={MainSizesEnum.xs} />
   */
  xs = 'xs',

  /**
   * @name Small
   * @description Small size for the components
   * @example
   * <Button size={MainSizesEnum.sm} />
   */
  sm = 'sm',

  /**
   * @name Medium
   * @description Medium size for the components
   * @example
   * <Button size={MainSizesEnum.md} />
   */
  md = 'md',

  /**
   * @name Large
   * @description Large size for the components
   * @example
   * <Button size={MainSizesEnum.lg} />
   */
  lg = 'lg',

  /**
   * @name ExtraLarge
   * @description Extra large size for the components
   * @example
   * <Button size={MainSizesEnum.xl} />
   */
  xl = 'xl',
}

/**
 * @name SizesEnum
 * @description Enum for the different sizes of the components including the main sizes
 * @property {string} xs - Extra small
 * @property {string} sm - Small
 * @property {string} md - Medium
 * @property {string} lg - Large
 * @property {string} xl - Extra large
 * @property {string} 2xl - 2 extra large
 * @property {string} 3xl - 3 extra large
 * @property {string} 4xl - 4 extra large
 * @property {string} 5xl - 5 extra large
 * @property {string} 6xl - 6 extra large
 * @property {string} 7xl - 7 extra large
 * @example
 * <Button size={SizesEnum.5xl} />
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const SizesEnum = {
  ...MainSizesEnum,

  /**
   * @name 2xl
   * @description 2 extra large size for the components
   * @example
   * <Button size={SizesEnum.2xl} />
   */
  '2xl': '2xl',

  /**
   * @name 3xl
   * @description 3 extra large size for the components
   * @example
   * <Button size={SizesEnum.3xl} />
   */
  '3xl': '3xl',

  /**
   * @name 4xl
   * @description 4 extra large size for the components
   * @example
   * <Button size={SizesEnum.4xl} />
   */
  '4xl': '4xl',

  /**
   * @name 5xl
   * @description 5 extra large size for the components
   * @example
   * <Button size={SizesEnum.5xl} />
   */
  '5xl': '5xl',

  /**
   * @name 6xl
   * @description 6 extra large size for the components
   * @example
   * <Button size={SizesEnum.6xl} />
   */
  '6xl': '6xl',

  /**
   * @name 7xl
   * @description 7 extra large size for the components
   * @example
   * <Button size={SizesEnum.7xl} />
   */
  '7xl': '7xl',
}

/**
 * @name RoundedSizesEnum
 * @description Enum for the different rounded sizes of the components including full and none
 * @example
 * <Button rounded={RoundedSizesEnum.full} /> // Full rounded
 * <Button rounded={RoundedSizesEnum.none} /> // No rounded
 * <Button rounded={RoundedSizesEnum.md} /> // Medium rounded
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const RoundedSizesEnum = {
  ...MainSizesEnum,

  /**
   * @name 2xl
   * @description 2 extra large rounded size for the components
   * @example
   * <Button rounded={RoundedSizesEnum.2xl} /> // 2 extra large rounded
   */
  '2xl': '2xl',

  /**
   * @name 3xl
   * @description 3 extra large rounded size for the components
   * @example
   * <Button rounded={RoundedSizesEnum.3xl} /> // 3 extra large rounded
   */
  '3xl': '3xl',

  /**
   * @name Full
   * @description Full rounded size for the components
   * @example
   * <Button rounded={RoundedSizesEnum.full} /> // Full rounded
   */
  full: 'full',

  /**
   * @name None
   * @description No rounded size for the components
   * @example
   * <Button rounded={RoundedSizesEnum.none} /> // No rounded
   */
  none: 'none',
}

/**
 * @name BooleanEnum
 * @description Enum for booleans, on and off states
 * @example
 * <Button loading={BooleanEnum.on} /> // Processing button
 * <Button loading={BooleanEnum.off} /> // Not processing button
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum BooleanEnum {
  off = 'off',
  on = 'on',
}

/**
 * @name StateColorsEnum
 * @description Enum for the different state colors
 * @property {string} info - Info color
 * @property {string} error - Error color
 * @property {string} success - Success color
 * @property {string} warning - Warning color
 * @example
 * <Button color={StateColorsEnum.info} /> // Info color
 * <Button color={StateColorsEnum.error} /> // Error color
 * <Button color={StateColorsEnum.success} /> // Success color
 * <Button color={StateColorsEnum.warning} /> // Warning color
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum StateColorsEnum {
  /**
   * Info color
   * @description Color for giving information to the user
   * @example
   * <Button color={StateColorsEnum.info} /> // Info color
   */
  info = 'info',

  /**
   * Error color
   * @description Color for expressing error states
   * @example
   * <Button color={StateColorsEnum.error} /> // Info color
   */
  error = 'error',

  /**
   * Success color
   * @description Color for expressing success states
   * @example
   * <Button color={StateColorsEnum.success} /> // Info color
   */
  success = 'success',

  /**
   * Warning color
   * @description Color for expressing warning states
   * @example
   * <Button color={StateColorsEnum.warning} /> // Info color
   */
  warning = 'warning',
}

/**
 * @name BrandColorsEnum
 * @description Enum for the different brand colors
 * @property {string} primary - Primary color
 * @property {string} secondary - Secondary color
 * @example
 * <Button color={BrandColorsEnum.primary} /> // Primary color
 * <Button color={BrandColorsEnum.secondary} /> // Secondary color
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum BrandColorsEnum {
  /**
   * Primary color
   * @description Primary color for the brand
   * @example
   * <Button color={BrandColorsEnum.primary} /> // Primary color
   */
  primary = 'primary',

  /**
   * Secondary color
   * @description Secondary color for the brand, also used for backgrounds, etc.
   * @example
   * <Button color={BrandColorsEnum.secondary} /> // Secondary color
   */
  secondary = 'secondary',
}

/**
 * @name HeadingLevelEnum
 * @description Enum for the different heading levels
 * @property {string} h1 - Heading level 1
 * @property {string} h2 - Heading level 2
 * @property {string} h3 - Heading level 3
 * @property {string} h4 - Heading level 4
 * @property {string} h5 - Heading level 5
 * @property {string} h6 - Heading level 6
 * @example
 * <Heading level={HeadingLevelEnum.h1} /> // Heading level 1
 * <Heading level={HeadingLevelEnum.h2} /> // Heading level 2
 * <Heading level={HeadingLevelEnum.h3} /> // Heading level 3
 * <Heading level={HeadingLevelEnum.h4} /> // Heading level 4
 * <Heading level={HeadingLevelEnum.h5} /> // Heading level 5
 * <Heading level={HeadingLevelEnum.h6} /> // Heading level 6
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum HeadingLevelEnum {
  /**
   * Heading level 1
   * @description The master title of the page, maximum one per page and 150 characters maximum to avoid SEO problems
   * @example
   * <Heading level={HeadingLevelEnum.h1} /> // Heading level 1
   *
   */
  h1 = 'h1',

  /**
   * Heading level 2
   * @description Main titles of the page, multiple but not too many to avoid SEO problems
   * @example
   * <Heading level={HeadingLevelEnum.h2} /> // Heading level 2
   *
   */
  h2 = 'h2',

  /**
   * Heading level 3
   * @description Subtitles of the page, you can use some to structure the content
   * @example
   * <Heading level={HeadingLevelEnum.h3} /> // Heading level 3
   *
   */
  h3 = 'h3',

  /**
   * Heading level 4
   * @description Subtitles of the page, usable to structure the content and to separate sections
   * @example
   * <Heading level={HeadingLevelEnum.h4} /> // Heading level 4
   *
   */
  h4 = 'h4',

  /**
   * Heading level 5
   * @description Subtitles of the page, usable to structure the content and to separate small sections
   * @example
   * <Heading level={HeadingLevelEnum.h5} /> // Heading level 5
   *
   */
  h5 = 'h5',

  /**
   * Heading level 6
   * @description Small subtitles, usable to structure the content and to separate small sections under a h5
   * @example
   * <Heading level={HeadingLevelEnum.h6} /> // Heading level 6
   *
   */
  h6 = 'h6',
}

/**
 * @name ColorsEnum
 * @description Enum for the different colors, merging state and brand colors
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const ColorsEnum = { ...StateColorsEnum, ...BrandColorsEnum }

/**
 * @name TriggerReasonEnum
 * @description Enum for the different trigger reasons, hover and click
 * @property {string} hover - Hover trigger
 * @property {string} click - Click trigger
 * @example
 * <Tooltip trigger={TriggerReasonEnum.hover} ... // Hover trigger
 * <Tooltip trigger={TriggerReasonEnum.click} ... // Hover trigger
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum TriggerReasonEnum {
  /**
   * @name Hover
   * @description Hover trigger
   * @example
   * <Tooltip trigger={TriggerReasonEnum.hover} ... // Hover trigger
   */
  hover = 'hover',
  /**
   * @name Click
   * @description Click trigger
   * @example
   * <Tooltip trigger={TriggerReasonEnum.click} ... // Hover trigger
   */
  click = 'click',
}

/**
 * @name DirectionEnum
 * @description Enum for the different directions, top, right, bottom and left
 * @property {string} top - Top direction
 * @property {string} right - Right direction
 * @property {string} bottom - Bottom direction
 * @property {string} left - Left direction
 * @example
 * <Tooltip direction={DirectionEnum.top} ... // Top direction
 * <Tooltip direction={DirectionEnum.right} ... // Right direction
 * <Tooltip direction={DirectionEnum.bottom} ... // Bottom direction
 * <Tooltip direction={DirectionEnum.left} ... // Left direction
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum DirectionEnum {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

/**
 * @name AlignEnum
 * @description Enum for the different alignments, start, center and end
 * @property {string} start - Start alignment
 * @property {string} center - Center alignment
 * @property {string} end - End alignment
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum AlignEnum {
  start = 'start',
  center = 'center',
  end = 'end',
}

/**
 * @name DirEnum
 * @description Enum for the different directions, rtl, ltr and auto
 * @property {string} rtl - Right to left direction
 * @property {string} ltr - Left to right direction
 * @property {string} auto - Automatic direction
 * @example
 * <Tooltip dir={DirEnum.rtl} ... // Right to left direction
 * <Tooltip dir={DirEnum.ltr} ... // Left to right direction
 * <Tooltip dir={DirEnum.auto} ... // Automatic direction
 * @see getDocumentDirection for the usage of this enum
 * @author Pol Gubau Amores - https://polgubau.com
 */
export enum DirEnum {
  rtl = 'rtl',
  ltr = 'ltr',
  auto = 'auto',
}

export enum SidesEnum {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}
