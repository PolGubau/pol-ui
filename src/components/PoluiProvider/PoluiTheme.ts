import type { DeepPartial } from '../../types';
import type { AccordionTheme } from '../Accordion';
import type { AlertTheme } from '../Alert';
import type { AvatarTheme } from '../Avatar';
import type { BadgeTheme } from '../Badge';
import type { BlockquoteTheme } from '../Blockquote';
import type { BreadcrumbTheme } from '../Breadcrumb';
import type { ButtonGroupTheme, ButtonTheme } from '../Button';
import type { CardTheme } from '../Card';
import type { CarouselTheme } from '../Carousel';
import type { CheckboxTheme } from '../Checkbox';
import type { DarkThemeToggleTheme } from '../DarkThemeToggle';
import type { DatepickerTheme } from '../Datepicker';
import type { DropdownTheme } from '../Dropdown';
import type { FileInputTheme } from '../FileInput';
import type { FloatingLabelTheme } from '../FloatingLabel';
import type { FooterTheme } from '../Footer';
import type { HelperTextTheme } from '../HelperText';
import type { KbdTheme } from '../Kbd';
import type { LabelTheme } from '../Label';
import type { ListGroupTheme } from '../ListGroup';
import type { ListTheme } from '../List';
import type { ModalTheme } from '../Modal';
import type { NavbarTheme } from '../Navbar';
import type { PaginationTheme } from '../Pagination';
import type { ProgressTheme } from '../Progress';
import type { RadioTheme } from '../Radio';
import type { RangeSliderTheme } from '../RangeSlider';
import type { RatingAdvancedTheme, RatingTheme } from '../Rating';
import type { SelectTheme } from '../Select';
import type { SidebarTheme } from '../Sidebar';
import type { SpinnerTheme } from '../Spinner';
import type { TableTheme } from '../Table';
import type { TabsTheme } from '../Tabs';
import type { TextInputTheme } from '../TextInput';
import type { TextareaTheme } from '../Textarea';
import type { TimelineTheme } from '../Timeline';
import type { ToastTheme } from '../Toast';
import type { ToggleSwitchTheme } from '../ToggleSwitch';
import type { TooltipTheme } from '../Tooltip';

export type CustomPoluiTheme = DeepPartial<PoluiTheme>;

export interface PoluiTheme {
  accordion: AccordionTheme;
  alert: AlertTheme;
  avatar: AvatarTheme;
  badge: BadgeTheme;
  blockquote: BlockquoteTheme;
  breadcrumb: BreadcrumbTheme;
  button: ButtonTheme;
  buttonGroup: ButtonGroupTheme;
  card: CardTheme;
  carousel: CarouselTheme;
  datepicker: DatepickerTheme;
  darkThemeToggle: DarkThemeToggleTheme;
  footer: FooterTheme;
  kbd: KbdTheme;
  listGroup: ListGroupTheme;
  list: ListTheme;
  modal: ModalTheme;
  navbar: NavbarTheme;
  rating: RatingTheme;
  ratingAdvanced: RatingAdvancedTheme;
  pagination: PaginationTheme;
  sidebar: SidebarTheme;
  progress: ProgressTheme;
  spinner: SpinnerTheme;
  tabs: TabsTheme;
  toast: ToastTheme;
  tooltip: TooltipTheme;
  dropdown: DropdownTheme;
  checkbox: CheckboxTheme;
  fileInput: FileInputTheme;
  floatingLabel: FloatingLabelTheme;
  label: LabelTheme;
  radio: RadioTheme;
  rangeSlider: RangeSliderTheme;
  select: SelectTheme;
  textInput: TextInputTheme;
  textarea: TextareaTheme;
  toggleSwitch: ToggleSwitchTheme;
  helperText: HelperTextTheme;
  table: TableTheme;
  timeline: TimelineTheme;
}

export interface IBoolean {
  off: string;
  on: string;
}

export enum BooleanEnum {
  off = 'off',
  on = 'on',
}

export interface StateColors {
  info: string;
  error: string;
  success: string;
  warning: string;
}

export interface Colors extends StateColors {
  [key: string]: string;
  primary: string;
  secondary: string;
}

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface Positions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface MainSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Sizes extends MainSizes {
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface RoundedSizes extends MainSizes {
  '2xl': string;
  '3xl': string;
  full: string;
  none: string;
  [key: string]: string;
}

export interface ContentPositions {
  center: string;
}
