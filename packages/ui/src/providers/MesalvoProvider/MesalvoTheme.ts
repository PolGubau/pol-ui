import type { DeepPartial } from '../../types/types'
import type { AccordionTheme } from '../../components/Accordion'
import type { AlertTheme } from '../../components/Alert'
import type { AvatarTheme } from '../../components/Avatar'
import type { BadgeTheme } from '../../components/Badge'
import type { BreadcrumbTheme } from '../../components/Breadcrumb'
import type { CardTheme } from '../../components/Card'
import type { CheckboxTheme } from '../../components/Checkbox'
import type { DropdownTheme } from '../../components/Dropdown'
import type { FileInputTheme } from '../../components/FileInput'
import type { KbdTheme } from '../../components/Kbd'
import type { LabelTheme } from '../../components/Label'
import type { NavbarTheme } from '../../components/Navbar'
import type { ProgressTheme } from '../../components/Progress'
import type { RadioTheme } from '../../components/Radio'
import type { RatingTheme } from '../../components/Rating'
import type { SelectTheme } from '../../components/Select'
import type { SidebarTheme } from '../../components/Sidebar'
import type { LoaderTheme } from '../../components/Loader'
import type { InputTheme } from '../../components/Input'
import type { TimelineTheme } from '../../components/Timeline'
import type { TooltipTheme } from '../../components/Tooltip'
import type { SwitchTheme } from '../../components/Switch'
import type { IconButtonTheme } from '../../components/IconButton'
import type { PopoverTheme } from '../../components/Popover'
import type { ToastTheme } from '../../components/Toaster/theme'
import type { DividerTheme } from '../../components/Divider'
import type { ToggleTheme } from '../../components/Toggle/theme'
import type { ChipTheme } from '../../components/Chip/theme'
import type { DropzoneTheme } from '../../components/Dropzone/theme'
import type { CommandTheme } from '../../components/Command/theme'
import type { OtpInputTheme } from '../../components/OtpInput/theme'
import { TabsTheme } from '../../components/Tabs/theme'
import { FocusEffectTheme } from '../../components/FocusEffect/theme'

export type CustomMesalvoTheme = DeepPartial<MesalvoTheme>

/**
 * @name MesalvoTheme
 * @description Interface for the MesalvoTheme, it includes all the different components themes, and the different colors, sizes, etc. that are used in the library
 * @author SUS
 */
export interface MesalvoTheme {
  accordion: AccordionTheme
  alert: AlertTheme
  avatar: AvatarTheme
  badge: BadgeTheme
  popover: PopoverTheme
  tabs: TabsTheme
  breadcrumb: BreadcrumbTheme
  iconButton: IconButtonTheme
  card: CardTheme
  kbd: KbdTheme
  navbar: NavbarTheme
  rating: RatingTheme
  sidebar: SidebarTheme
  progress: ProgressTheme
  loader: LoaderTheme
  toast: ToastTheme
  tooltip: TooltipTheme
  dropdown: DropdownTheme
  checkbox: CheckboxTheme
  divider: DividerTheme
  fileInput: FileInputTheme
  label: LabelTheme
  radio: RadioTheme
  select: SelectTheme
  textInput: InputTheme
  switch: SwitchTheme
  timeline: TimelineTheme
  toggle: ToggleTheme
  chip: ChipTheme
  dropzone: DropzoneTheme
  command: CommandTheme
  otpInput: OtpInputTheme
  focusEffect: FocusEffectTheme
}
