/*
THIS FILE LIST ALL THE ENUMS USED IN THE BASE POL-UI THEME
*/

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
 * @author Pol Gubau - https://github.com/polgubau
 */
export enum MainSizesEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}



export const SizesEnum = {
  /**
   * @name SizesEnum
   * @description Enum for the different sizes of the components including the extra large sizes
   * @example 
   * <Button size={SizesEnum.7xl} />
   * @author Pol Gubau - https://github.com/polgubau
   */
  ...MainSizesEnum,
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
  '6xl': '6xl',
  '7xl': '7xl',
};

export const RoundedSizesEnum = {
  ...MainSizesEnum,
  '2xl': '2xl',
  '3xl': '3xl',
  full: 'full',
  none: 'none',
};

export enum BooleanEnum {
  off = 'off',
  on = 'on',
}

export enum StateColorsEnum {
  info = 'info',
  error = 'error',
  success = 'success',
  warning = 'warning',
}

export enum BrandColorsEnum {
  primary = 'primary',
  secondary = 'secondary',
}
export enum HeadingLevelEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
} 