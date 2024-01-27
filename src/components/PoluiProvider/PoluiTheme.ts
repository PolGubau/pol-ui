import type { DeepPartial } from '../../types'
import type { AccordionTheme } from '../Accordion'
import type { AlertTheme } from '../Alert'
import type { AvatarTheme } from '../Avatar'
import type { BadgeTheme } from '../Badge'
import type { BlockquoteTheme } from '../Blockquote'
import type { BreadcrumbTheme } from '../Breadcrumb'
import type { ButtonGroupTheme, ButtonTheme } from '../Button'
import type { CardTheme } from '../Card'
import type { CarouselTheme } from '../Carousel'
import type { CheckboxTheme } from '../Checkbox'
import type { DarkThemeToggleTheme } from '../DarkThemeToggle'
import type { DatepickerTheme } from '../Datepicker'
import type { DropdownTheme } from '../Dropdown'
import type { FileInputTheme } from '../FileInput'
import type { FloatingLabelTheme } from '../FloatingLabel'
import type { FooterTheme } from '../Footer'
import type { KbdTheme } from '../Kbd'
import type { LabelTheme } from '../Label'
import type { ListGroupTheme } from '../ListGroup'
import type { ListTheme } from '../List'
import type { ModalTheme } from '../Modal'
import type { NavbarTheme } from '../Navbar'
import type { PaginationTheme } from '../Pagination'
import type { ProgressTheme } from '../Progress'
import type { RadioTheme } from '../Radio'
import type { RangeSliderTheme } from '../RangeSlider'
import type { RatingTheme } from '../Rating'
import type { SelectTheme } from '../Select'
import type { SidebarTheme } from '../Sidebar'
import type { LoaderTheme } from '../Loader'
import type { TableTheme } from '../Table'
import type { TabsTheme } from '../Tabs'
import type { InputTheme } from '../Input'
import type { TimelineTheme } from '../Timeline'
import type { ToastTheme } from '../Toast'
import type { TooltipTheme } from '../Tooltip'
import type {
  BooleanEnum,
  BrandColorsEnum,
  HeadingLevelEnum,
  MainSizesEnum,
  StateColorsEnum,
  SizesEnum,
  RoundedSizesEnum,
  GetValuesEnum,
  ColorsEnum,
  TriggerReasonEnum,
} from '../../types/enums'
import type { BannerTheme } from '../Banner/Banner'
import type { SwitchTheme } from '../Switch'
import type { IconButtonTheme } from '../IconButton'
import type { HelperTextTheme } from '../HelperText/theme'
import type { CopyrightTheme } from '../Copyright/theme'
import type { DirectionHoverTheme } from '../DirectionHover/theme'

export type CustomPoluiTheme = DeepPartial<PoluiTheme>

/**
 * @name PoluiTheme
 * @description Interface for the PoluiTheme, it includes all the different components themes, and the different colors, sizes, etc. that are used in the library
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface PoluiTheme {
  accordion: AccordionTheme
  alert: AlertTheme
  avatar: AvatarTheme
  badge: BadgeTheme
  banner: BannerTheme
  blockquote: BlockquoteTheme
  breadcrumb: BreadcrumbTheme
  button: ButtonTheme
  buttonGroup: ButtonGroupTheme
  iconButton: IconButtonTheme
  card: CardTheme
  copyright: CopyrightTheme
  carousel: CarouselTheme
  datepicker: DatepickerTheme
  darkThemeToggle: DarkThemeToggleTheme
  footer: FooterTheme
  kbd: KbdTheme
  listGroup: ListGroupTheme
  list: ListTheme
  modal: ModalTheme
  navbar: NavbarTheme
  rating: RatingTheme
  pagination: PaginationTheme
  sidebar: SidebarTheme
  progress: ProgressTheme
  loader: LoaderTheme
  tabs: TabsTheme
  toast: ToastTheme
  directionHover: DirectionHoverTheme
  tooltip: TooltipTheme
  dropdown: DropdownTheme
  checkbox: CheckboxTheme
  fileInput: FileInputTheme
  floatingLabel: FloatingLabelTheme
  label: LabelTheme
  radio: RadioTheme
  rangeSlider: RangeSliderTheme
  select: SelectTheme
  textInput: InputTheme
  switch: SwitchTheme
  helperText: HelperTextTheme
  table: TableTheme
  timeline: TimelineTheme
}

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
export interface Colors extends ColorsType {
  [key: string]: string
}

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

export type MainSizes = Record<GetValuesEnum<typeof MainSizesEnum>, string>

/**
 * @name MainSizesElastic
 * @description Type for the main different sizes, from xs to xl, it also includes any value provided by the user
 * @see MainSizesEnum for the different sizes of the library
 * @property {string} [key] - Any value provided by the user
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface MainSizesElastic extends MainSizes {
  [key: string]: string
}
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
export type RoundedSizes = Record<GetValuesEnum<typeof RoundedSizesEnum>, string>

/**
 * @name RoundedSizesElastic
 * @description Type for the different rounded sizes, from xs to 7xl, dynamic from the RoundedSizesEnum enum, it also includes any value provided by the user
 * @see RoundedSizesEnum for the different sizes
 * @extends RoundedSizesType
 * @author Pol Gubau Amores - https://polgubau.com
 */
export interface RoundedSizesElastic extends RoundedSizes {
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
