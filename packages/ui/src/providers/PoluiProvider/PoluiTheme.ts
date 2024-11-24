import type { AccordionTheme } from "../../components/Accordion"
import type { AlertTheme } from "../../components/Alert"
import type { AnimateHeadingTheme } from "../../components/AnimatedHeading/theme"
import type { AvatarTheme } from "../../components/Avatar"
import type { BadgeTheme } from "../../components/Badge"
import type { BannerTheme } from "../../components/Banner"
import type { BreadcrumbTheme } from "../../components/Breadcrumb"
import type { BubbleHeadingTheme } from "../../components/BubbleHeading/theme"
import type { ButtonTheme } from "../../components/Button"
import type { CardTheme } from "../../components/Card"
import type { CheckboxTheme } from "../../components/Checkbox"
import type { ChipTheme } from "../../components/Chip/theme"
import type { ContainerScrollTheme } from "../../components/ContainerScroll/theme"
import type { ConveyorTheme } from "../../components/Conveyor/theme"
import type { CopyrightTheme } from "../../components/Copyright/theme"
import type { DatepickerTheme } from "../../components/Datepicker"
import type { DirectionHoverTheme } from "../../components/DirectionHover/theme"
import type { DividerTheme } from "../../components/Divider"
import type { DropdownTheme } from "../../components/Dropdown"
import type { DropzoneTheme } from "../../components/Dropzone/theme"
import type { FileInputTheme } from "../../components/FileInput"
import { FocusEffectTheme } from "../../components/FocusEffect/theme"
import type { FollowerPointerTheme } from "../../components/FollowerPointer/theme"
import type { FooterTheme } from "../../components/Footer"
import { GaugeTheme } from "../../components/Gauge"
import type { HamburguerTheme } from "../../components/Hamburguer/theme"
import type { HelperTextTheme } from "../../components/HelperText/theme"
import type { IconButtonTheme } from "../../components/IconButton"
import type { ImageTrailTheme } from "../../components/ImageTrail/theme"
import type { InputTheme } from "../../components/Input"
import type { KanbanTheme } from "../../components/Kanban/theme"
import type { KbdTheme } from "../../components/Kbd"
import type { LabelTheme } from "../../components/Label"
import type { LinkTheme } from "../../components/Link/theme"
import type { ListGroupTheme } from "../../components/ListGroup"
import type { LoaderTheme } from "../../components/Loader"
import { MessageTheme } from "../../components/Message/theme"
import type { NavbarTheme } from "../../components/Navbar"
import type { NavigationMenuTheme } from "../../components/NavigationMenu/theme"
import type { OtpInputTheme } from "../../components/OtpInput/theme"
import type { PaginationTheme } from "../../components/Pagination"
import type { ParallaxTextTheme } from "../../components/ParallaxText"
import type { PerspectiveCardTheme } from "../../components/PerspectiveCard/theme"
import type { PopoverTheme } from "../../components/Popover"
import type { ProgressTheme } from "../../components/Progress"
import type { RadioTheme } from "../../components/Radio"
import type { RatingTheme } from "../../components/Rating"
import type { SelectTheme } from "../../components/Select"
import type { SidebarTheme } from "../../components/Sidebar"
import type { SliderTheme } from "../../components/Slider"
import type { StickyScrollTheme } from "../../components/StickyScroll/theme"
import type { SwitchTheme } from "../../components/Switch"
import type { TabsTheme } from "../../components/Tabs"
import type { TextGeneratorTheme } from "../../components/TextGenerator/theme"
import type { TimelineTheme } from "../../components/Timeline"
import type { ToastTheme } from "../../components/Toaster/theme"
import type { ToggleTheme } from "../../components/Toggle/theme"
import type { TooltipTheme } from "../../components/Tooltip"
import type { DeepPartial } from "../../types/types"

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
  datepicker: DatepickerTheme
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
  otpInput: OtpInputTheme
}
