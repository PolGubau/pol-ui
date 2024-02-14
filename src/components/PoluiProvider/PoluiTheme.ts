import type { DeepPartial } from '../../types/types'
import type { AccordionTheme } from '../Accordion'
import type { AlertTheme } from '../Alert'
import type { AvatarTheme } from '../Avatar'
import type { BadgeTheme } from '../Badge'
import type { BreadcrumbTheme } from '../Breadcrumb'
import type { ButtonTheme } from '../Button'
import type { CardTheme } from '../Card'
import type { CarouselTheme } from '../Carousel'
import type { CheckboxTheme } from '../Checkbox'
import type { DarkThemeToggleTheme } from '../DarkThemeToggle'
import type { DatepickerTheme } from '../Datepicker'
import type { DropdownTheme } from '../Dropdown'
import type { FileInputTheme } from '../FileInput'
import type { FooterTheme } from '../Footer'
import type { KbdTheme } from '../Kbd'
import type { LabelTheme } from '../Label'
import type { ListGroupTheme } from '../ListGroup'
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
import type { TooltipTheme } from '../Tooltip'
import type { BannerTheme } from '../Banner'
import type { SwitchTheme } from '../Switch'
import type { IconButtonTheme } from '../IconButton'
import type { HelperTextTheme } from '../HelperText/theme'
import type { CopyrightTheme } from '../Copyright/theme'
import type { DirectionHoverTheme } from '../DirectionHover/theme'
import type { ConveyorTheme } from '../Conveyor/theme'
import type { PopoverTheme } from '../Popover'
import type { ButtonGroupTheme } from '../ButtonGroup'
import type { ToastTheme } from '../Toaster/theme'
import type { DividerTheme } from '../Divider'
import type { LinkTheme } from '../Link/theme'
import type { FollowerPointerCardTheme } from '../FollowingPointer/theme'
import type { StickyScrollTheme } from '../StickyScroll/theme'
import type { ParallaxTextTheme } from '../ParallaxText'
import type { TextGeneratorTheme } from '../TextGenerator/theme'
import type { PerspectiveCardTheme } from '../PerspectiveCard/theme'
import type { KanbanTheme } from '../Kanban/theme'
import type { BubbleHeadingTheme } from '../BubbleText/theme'

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
  popover: PopoverTheme
  banner: BannerTheme
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
  modal: ModalTheme
  navbar: NavbarTheme
  rating: RatingTheme
  pagination: PaginationTheme
  sidebar: SidebarTheme
  progress: ProgressTheme
  loader: LoaderTheme
  link: LinkTheme
  tabs: TabsTheme
  toast: ToastTheme
  directionHover: DirectionHoverTheme
  tooltip: TooltipTheme
  dropdown: DropdownTheme
  checkbox: CheckboxTheme
  divider: DividerTheme
  fileInput: FileInputTheme
  label: LabelTheme
  stickyScroll: StickyScrollTheme
  followerPointerCard: FollowerPointerCardTheme
  radio: RadioTheme
  rangeSlider: RangeSliderTheme
  select: SelectTheme
  textInput: InputTheme
  switch: SwitchTheme
  helperText: HelperTextTheme
  table: TableTheme
  timeline: TimelineTheme
  conveyor: ConveyorTheme
  parallaxText: ParallaxTextTheme
  textGenerator: TextGeneratorTheme
  perspectiveCard: PerspectiveCardTheme
  kanban: KanbanTheme
  bubbleHeading: BubbleHeadingTheme
}
