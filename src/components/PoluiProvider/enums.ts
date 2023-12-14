/*
THIS FILE LIST ALL THE ENUMS USED IN THE BASE POL-UI THEME
*/


/**
 * @name GetValuesEnum
 * @description Helper type to get the values of an enum dynamically
 * @author Pol Gubau - https://github.com/polgubau
 */
export type GetValuesEnum<T> = T[keyof T];


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
 * @author Pol Gubau - https://github.com/polgubau
 */
export const SizesEnum = {
  ...MainSizesEnum,
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
  '6xl': '6xl',
  '7xl': '7xl',
};




/**
 * @name RoundedSizesEnum
 * @description Enum for the different rounded sizes of the components including full and none
 * @example 
 * <Button rounded={RoundedSizesEnum.full} /> // Full rounded
 * <Button rounded={RoundedSizesEnum.none} /> // No rounded
 * <Button rounded={RoundedSizesEnum.md} /> // Medium rounded
 * @author Pol Gubau - https://github.com/polgubau
 */
export const RoundedSizesEnum = {
  ...MainSizesEnum,
  '2xl': '2xl',
  '3xl': '3xl',
  full: 'full',
  none: 'none',
};





/**
 * @name BooleanEnum
 * @description Enum for booleans, on and off states
 * @example 
 * <Button isProcessing={BooleanEnum.on} /> // Processing button
 * <Button isProcessing={BooleanEnum.off} /> // Not processing button
 * @author Pol Gubau - https://github.com/polgubau
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
 * @author Pol Gubau - https://github.com/polgubau
 */
export enum StateColorsEnum {
  info = 'info',
  error = 'error',
  success = 'success',
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
 * @author Pol Gubau - https://github.com/polgubau
 */
export enum BrandColorsEnum {
  primary = 'primary',
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
 * @author Pol Gubau - https://github.com/polgubau
 */
export enum HeadingLevelEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
} 


/**
 * @name ColorsEnum
 * @description Enum for the different colors, merging state and brand colors
 * @author Pol Gubau - https://github.com/polgubau
 */
export const ColorsEnum = { ...StateColorsEnum, ...BrandColorsEnum };