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
import type { HelperTextTheme } from '../HelperText'
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
import type { RatingAdvancedTheme, RatingTheme } from '../Rating'
import type { SelectTheme } from '../Select'
import type { SidebarTheme } from '../Sidebar'
import type { LoaderTheme } from '../Loader'
import type { TableTheme } from '../Table'
import type { TabsTheme } from '../Tabs'
import type { TextInputTheme } from '../TextInput'
import type { TextareaTheme } from '../Textarea'
import type { TimelineTheme } from '../Timeline'
import type { ToastTheme } from '../Toast'
import type { ToggleSwitchTheme } from '../ToggleSwitch'
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
} from './enums'
import type { BannerTheme } from '../Banner/Banner'

export type CustomPoluiTheme = DeepPartial<PoluiTheme>

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
  card: CardTheme
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
  ratingAdvanced: RatingAdvancedTheme
  pagination: PaginationTheme
  sidebar: SidebarTheme
  progress: ProgressTheme
  loader: LoaderTheme
  tabs: TabsTheme
  toast: ToastTheme
  tooltip: TooltipTheme
  dropdown: DropdownTheme
  checkbox: CheckboxTheme
  fileInput: FileInputTheme
  floatingLabel: FloatingLabelTheme
  label: LabelTheme
  radio: RadioTheme
  rangeSlider: RangeSliderTheme
  select: SelectTheme
  textInput: TextInputTheme
  textarea: TextareaTheme
  toggleSwitch: ToggleSwitchTheme
  helperText: HelperTextTheme
  table: TableTheme
  timeline: TimelineTheme
}

/**
 * @name IBoolean
 * @description Type for booleans, on and off states
 * @author Pol Gubau - https://github.com/polgubau
 */
export type IBoolean = Record<BooleanEnum, string>

/**
 * @name StateColors
 * @description Type for the different state colors
 * @author Pol Gubau - https://github.com/polgubau
 */
export type StateColors = Record<StateColorsEnum, string>

/**
 * @name BrandColors
 * @description Type for the different brand colors
 * @author Pol Gubau - https://github.com/polgubau
 */
export type BrandColors = Record<BrandColorsEnum, string>

/**
 * @name ColorsType
 * @description Type for the different colors, including state and brand colors
 * @author Pol Gubau - https://github.com/polgubau
 */

export type ColorsType = Record<GetValuesEnum<typeof StateColorsEnum>, string>

/**
 * @name Colors
 * @description Type for the different colors, including state and brand colors, and custom colors if provided by the user
 * @author Pol Gubau - https://github.com/polgubau
 */
export interface Colors extends ColorsType {
  [key: string]: string
}

/**
 * @name HeadingLevel
 * @description Type for the different heading levels, from h1 to h6
 * @author Pol Gubau - https://github.com/polgubau
 */

export type HeadingLevel = keyof typeof HeadingLevelEnum

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
 * @author Pol Gubau - https://github.com/polgubau
 * @see MainSizesEnum for the different sizes
 */

export type MainSizes = Record<GetValuesEnum<typeof MainSizesEnum>, string>

/**
 * @name Sizes
 * @description Type for the different sizes, from xs to 7xl, dynamic from the SizesEnum enum
 * @see SizesEnum for the different sizes
 * @author Pol Gubau - https://github.com/polgubau
 */
export type Sizes = Record<GetValuesEnum<typeof SizesEnum>, string>

/**
 * @name RoundedSizesType
 * @description Type for the different rounded sizes, from xs to 7xl, dynamic from the RoundedSizesEnum enum
 * @see RoundedSizesEnum for the different sizes
 * @author Pol Gubau - https://github.com/polgubau
 */
export type RoundedSizes = Record<GetValuesEnum<typeof RoundedSizesEnum>, string>

/**
 * @name RoundedSizes
 * @description Type for the different rounded sizes, from xs to 7xl, dynamic from the RoundedSizesEnum enum, it also includes any value provided by the user
 * @see RoundedSizesEnum for the different sizes
 * @extends RoundedSizesType
 * @author Pol Gubau - https://github.com/polgubau
 */
export interface RoundedSizesElastic extends RoundedSizes {
  [key: string]: string
}

/**
 * @name ContentPositions
 * @description Interface for the different content positions
 * @author Pol Gubau - https://github.com/polgubau
 */
export interface ContentPositions {
  center: string
}
