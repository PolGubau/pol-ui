import type { DeepPartial } from "../../types/types"
import type { AccordionTheme } from "../Accordion"
import type { AlertTheme } from "../Alert"
import type { AnimateHeadingTheme } from "../AnimatedHeading/theme"
import type { AutocompleteTheme } from "../Autocomplete/theme"
import type { AvatarTheme } from "../Avatar"
import type { BadgeTheme } from "../Badge"
import type { BannerTheme } from "../Banner"
import type { BreadcrumbTheme } from "../Breadcrumb"
import type { BubbleHeadingTheme } from "../BubbleHeading/theme"
import type { ButtonTheme } from "../Button"
import type { CardTheme } from "../Card"
import type { CarouselTheme } from "../Carousel"
import type { CheckboxTheme } from "../Checkbox"
import type { ChipTheme } from "../Chip/theme"
import type { CommandTheme } from "../Command/theme"
import type { ContainerScrollTheme } from "../ContainerScroll/theme"
import type { ConveyorTheme } from "../Conveyor/theme"
import type { CopyrightTheme } from "../Copyright/theme"
import type { DarkThemeToggleTheme } from "../DarkThemeToggle"
import type { DatepickerTheme } from "../Datepicker"
import type { DirectionHoverTheme } from "../DirectionHover/theme"
import type { DividerTheme } from "../Divider"
import type { DropdownTheme } from "../Dropdown"
import type { DropzoneTheme } from "../Dropzone/theme"
import type { FileInputTheme } from "../FileInput"
import { FocusEffectTheme } from "../FocusEffect/theme"
import type { FollowerPointerTheme } from "../FollowerPointer/theme"
import type { FooterTheme } from "../Footer"
import { GaugeTheme } from "../Gauge"
import type { HamburguerTheme } from "../Hamburguer/theme"
import type { HelperTextTheme } from "../HelperText/theme"
import type { IconButtonTheme } from "../IconButton"
import type { ImageTrailTheme } from "../ImageTrail/theme"
import type { InputTheme } from "../Input"
import type { KanbanTheme } from "../Kanban/theme"
import type { KbdTheme } from "../Kbd"
import type { LabelTheme } from "../Label"
import type { LinkTheme } from "../Link/theme"
import type { ListGroupTheme } from "../ListGroup"
import type { LoaderTheme } from "../Loader"
import { MessageTheme } from "../Message/theme"
import type { NavbarTheme } from "../Navbar"
import type { NavigationMenuTheme } from "../NavigationMenu/theme"
import type { OtpInputTheme } from "../OtpInput/theme"
import type { PaginationTheme } from "../Pagination"
import type { ParallaxTextTheme } from "../ParallaxText"
import type { PerspectiveCardTheme } from "../PerspectiveCard/theme"
import type { PopoverTheme } from "../Popover"
import type { ProgressTheme } from "../Progress"
import type { RadioTheme } from "../Radio"
import type { RatingTheme } from "../Rating"
import type { SelectTheme } from "../Select"
import type { SidebarTheme } from "../Sidebar"
import type { SliderTheme } from "../Slider"
import type { StickyScrollTheme } from "../StickyScroll/theme"
import type { SwitchTheme } from "../Switch"
import type { TabsTheme } from "../Tabs"
import type { TextGeneratorTheme } from "../TextGenerator/theme"
import type { TimelineTheme } from "../Timeline"
import type { ToastTheme } from "../Toaster/theme"
import type { ToggleTheme } from "../Toggle/theme"
import type { TooltipTheme } from "../Tooltip"

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
  gauge: GaugeTheme
  banner: BannerTheme
  breadcrumb: BreadcrumbTheme
  message: MessageTheme
  button: ButtonTheme
  focusEffect: FocusEffectTheme
  iconButton: IconButtonTheme
  card: CardTheme
  copyright: CopyrightTheme
  carousel: CarouselTheme
  datepicker: DatepickerTheme
  darkThemeToggle: DarkThemeToggleTheme
  footer: FooterTheme
  kbd: KbdTheme
  listGroup: ListGroupTheme
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
  followerPointer: FollowerPointerTheme
  radio: RadioTheme
  slider: SliderTheme
  select: SelectTheme
  textInput: InputTheme
  switch: SwitchTheme
  helperText: HelperTextTheme
  // table: TableTheme
  timeline: TimelineTheme
  conveyor: ConveyorTheme
  parallaxText: ParallaxTextTheme
  textGenerator: TextGeneratorTheme
  perspectiveCard: PerspectiveCardTheme
  kanban: KanbanTheme
  bubbleHeading: BubbleHeadingTheme
  imageTrail: ImageTrailTheme
  containerScroll: ContainerScrollTheme
  animatedText: AnimateHeadingTheme
  toggle: ToggleTheme
  hamburguer: HamburguerTheme
  navigationMenu: NavigationMenuTheme
  chip: ChipTheme
  dropzone: DropzoneTheme
  command: CommandTheme
  otpInput: OtpInputTheme
  autocomplete: AutocompleteTheme
}
