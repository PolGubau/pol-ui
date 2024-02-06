import type { DirEnum } from './enums'
import {
  type BooleanEnum,
  type StateColorsEnum,
  type BrandColorsEnum,
  type GetValuesEnum,
  type ColorsEnum,
  type HeadingLevelEnum,
  type MainSizesEnum,
  type SizesEnum,
  type RoundedSizesEnum,
  type TriggerReasonEnum,
  type DirectionEnum,
  type AlignEnum,
} from './enums'

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

/**
 * @name IBoolean
 * @description Type for booleans, on and off states
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type IBoolean = Record<BooleanEnum, string>

/**
 * @name StateColors
 * @description Type for the different state colors
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type StateColors = Record<StateColorsEnum, string>

/**
 * @name BrandColors
 * @description Type for the different brand colors
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type BrandColors = Record<BrandColorsEnum, string>

/**
 * @name ColorsType
 * @description Type for the different colors, including state and brand colors
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type ColorsType = Record<GetValuesEnum<typeof ColorsEnum>, string>

/**
 * @name Colors
 * @description Type for the different colors, including state and brand colors, and custom colors if provided by the user
 * @author Pol Gubau Amores - https://polgubau.com
 */

export type Colors = keyof typeof ColorsEnum

/**
 * @name HeadingLevel
 * @description Type for the different heading levels, from h1 to h6
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type HeadingLevel = keyof typeof HeadingLevelEnum

/**
 * @name Positions
 * @description Type for the different positions, from top-left to bottom-right, and center, center-left, center-right, top-center and bottom-center
 * @see PositionsEnum for the different positions
 * @alias PositionsEnum
 * @author Pol Gubau Amores - https://polgubau.com
 *
 */
export interface Positions {
  'bottom-left': string
  'bottom-right': string
  'bottom-center': string
  'top-left': string
  'top-center': string
  'top-right': string
  'center-left': string
  center: string
  'center-right': string
}

/**
 * @name MainSizes
 * @description Type for the main different sizes, from xs to xl
 * @see MainSizesEnum for the different sizes
 * @author Pol Gubau Amores - https://polgubau.com
 */

export type MainSizesType = Record<GetValuesEnum<typeof MainSizesEnum>, string>

/**
 * @name MainSizesElastic
 * @description Type for the main different sizes, from xs to xl, it also includes any value provided by the user
 * @see MainSizesEnum for the different sizes of the library
 * @property {string} [key] - Any value provided by the user
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type MainSizes = keyof typeof MainSizesEnum

/**
 * @name Sizes
 * @description Type for the different sizes, from xs to 7xl, dynamic from the SizesEnum enum
 * @see SizesEnum for the different sizes
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type Sizes = Record<GetValuesEnum<typeof SizesEnum>, string>

/**
 * @name RoundedSizes
 * @description Type for the different rounded sizes, from xs to 7xl, dynamic from the RoundedSizesEnum enum
 * @see RoundedSizesEnum for the different sizes
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type RoundedSizes = keyof typeof RoundedSizesEnum

/**
 * @name RoundedSizesTypes
 * @description Type for the different rounded sizes, from xs to 7xl, dynamic from the RoundedSizesEnum enum
 * @see RoundedSizesEnum for the different sizes
 * @extends RoundedSizesType
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type RoundedSizesTypes = Record<GetValuesEnum<typeof RoundedSizesEnum>, string>

/**
 * @name RoundedSizesElastic
 * @description Type for the different rounded sizes, from xs to 7xl, dynamic from the RoundedSizesEnum enum, it also includes any value provided by the user
 * @see RoundedSizesEnum for the different sizes
 * @extends RoundedSizesType
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface RoundedSizesElastic extends RoundedSizesTypes {
  [key: string]: string
}

/**
 * @name ContentPositions
 * @description Interface for the different content positions
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface ContentPositions {
  center: string
}

/**
 * @name TriggerReason
 * @description Type for the different trigger reasons, from click to hover, dynamic from the TriggerReasonEnum enum
 * @see TriggerReasonEnum for the different trigger reasons
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type TriggerReason = `${TriggerReasonEnum}`

/**
 * @name Direction
 * @description Type for the different directions, from top to bottom, dynamic from the DirectionEnum enum
 * @see DirectionEnum for the different directions
 * @author Pol Gubau Amores - https://polgubau.com
 */
export type Direction = `${DirectionEnum}`

export type Align = `${AlignEnum}`

export type Dir = `${DirEnum}`
