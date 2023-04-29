export type weightType = "normal" | "bold" | "lighter";
export interface GroupProps {
  /**
   * Children of the group
   */
  children: React.ReactNode;

  /**
   * Should the group be vertical?
   * @default false
   * @type boolean
   * @example <Group vertical />
   * @author pol
   * @version 1.0.0
   */
  vertical?: boolean;

  /**
   * Should the group be full size?
   * @default false
   * @type boolean
   * @example <Group fullSize />
   *  @author pol
   * @version 1.0.0
   */
  fullSize?: boolean;

  /**
   * Should the group be centered?
   * @default false
   * @type boolean
   * @example <Group center />
   * @author pol
   * @version 1.0.0
   * */
  center?: boolean;

  /**
   * How much space should be between the children?
   * @default "none"
   * @type "none" | "small" | "medium" | "large"
   * @example <Group space="medium" />
   * @author pol
   * @version 1.0.0
   * */
  space?: GroupSpace;
}

export interface ButtonProps {
  /**
   * Button click handler
   * @default null
   * @type function
   * @example () => console.log("clicked")
   */
  onClick?: () => void;
  /**
   * Button color
   * @default undefined
   * @type string or undefined
   * @example "red"
   * @description if undefined, the button will have a default color
   * @author pol
   * @name Button
   * @version 1.0.0
   *
   *
   */
  color?: string | undefined;

  /**
   * Icon
   * @default null
   * @type React.ReactNode or string
   * @example <Icon /> or "arrow"
   * @description if null, the button will not have an icon
   * @author pol
   * @version 1.0.0
   *
   */
  icon?: React.ReactNode | IconNameType | null;

  /**
   * Button text
   * @default null or ""
   * @type string or null
   * @example "Click Me"
   * @description if null, the button will not have text
   * @author pol
   * @version 1.0.0
   */
  text?: string;

  /**
   * primary
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be bigger and have a different color
   * @author pol
   * @version 1.0.0
   *  */
  primary?: boolean;

  /**
   * disabled
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be disabled   
   *  @author pol
   * @version 1.0.0

   *
   * */
  disabled?: boolean;

  /**
   * fullWidth
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be full width
   * @author pol
   * @version 1.0.0
   * */
  fullWidth?: boolean;

  /**
   * children
   * @default null
   * @type React.ReactNode
   * @example <div>children</div>
   * @description if null, the button will not have children
   * @author pol
   * @version 1.0.0
   * */
  children?: React.ReactNode;

  /**
   * outlined
   * @default false
   * @type boolean
   * @example false
   * @description if true, the button will be outlined
   * @author pol
   * @version 1.0.0
   * */
  outlined?: boolean;
}

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  icon?: React.ReactNode | null;
}

export interface INavBar {
  title?: string;
  links?: ILinks[];
}
export interface ILinks {
  text: string;
  action?: string | null | Function;
}

export interface LayoutProps {
  children: React.ReactNode;
  navBar?: INavBar;
}

export interface QuoteProps {
  children: React.ReactNode;

  /**
   * The color of the quote
   * @default #000000
   * @type string | undefined
   * @example "red"
   * @description if undefined, the quote will have a default color
   * @author pol
   * @name Quote
   * @version 1.0.0
   **/
  color?: string;

  /**
   * The icon to be displayed next to the quote text
   * @default null
   * @type React.ReactNode | IconName | null
   * @example <Icon /> or "arrow"
   * @description if null, the quote will not have an icon
   * @author pol
   * @version 1.0.0
   **/
  icon?: React.ReactNode | IconName | null;

  /**
   * Trigger on click
   * @default null
   * @type function
   * @example () => console.log("clicked")
   *
   * */
  onClick?: () => void;
}

export interface TextProps {
  children?: any;
  /**
   * Text value
   * @default ""
   * @type string
   * @example "Hello World"
   * @description Text to be displayed
   * */

  value?: string;
  /**
   * Text size
   * @default undefined
   * @type 1 | 2 | 3 | 4 | 5 | 6
   * @example <Text size={1} />
   * @description 1 is the biggest and 6 is the smallest
   * */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Text weight
   * @default undefined
   * @type "normal" | "bold" | "lighter"
   * @example <Text weight="bold" />
   * @description "normal" is the default, "bold" is bold and "lighter" is lighter
   * */
  weight?: weightType;
  /**
   * Text color
   * @default undefined
   * @type string
   * @example <Text color="#000" />
   * @description Color of the text
   * */
  color?: string;

  /**
   * href
   * @default undefined
   * @type string
   * @example <Text href="https://www.google.com" />
   * @description Link to be used
   * */
  href?: string;

  /**
   * isUnderline
   * @default false
   * @type boolean
   *
   * */
  isUnderline?: boolean;

  /**
   * isItalic
   * @default false
   * @type boolean
   *
   * */
  isItalic?: boolean;

  /**
   * isBold
   * @default false
   * @type boolean
   *
   * */
  isBold?: boolean;
}

export type IconNameType =
  | "arrow"
  | "arrow-left"
  | "arrow-up"
  | "arrow-down"
  | "arrow-up-short"
  | "minimize"
  | "expand"
  | "shuffle"
  | "settings"
  | "settings-off"
  | "alarm"
  | "alert"
  | "alert-filled"
  | "layout"
  | "layout-filled"
  | "backspace"
  | "baguette"
  | "balloon"
  | "battery"
  | "battery-empty"
  | "battery-full"
  | "battery-charging"
  | "battery-eco"
  | "zoom"
  | "zoom-out"
  | "world"
  | "window-minimize"
  | "terminal"
  | "text-size"
  | "trash"
  | "trending-up"
  | "user-circle"
  | "volume"
  | "volume-3"
  | "wifi"
  | "wifi-off"
  | "battery-1"
  | "battery-2"
  | "battery-4"
  | "battery-charging"
  | "battery-eco"
  | "volume-off"
  | "user"
  | "trend"
  | "hd-chatText"
  | "hd-cupCake"
  | "hd-exclamation"
  | "hd-heart"
  | "hd-notes"
  | "hd-star"
  | "hd-undraw"
  | "hd-user";

export interface ITheme {
  content: {
    width: string;
    maxWidth: string;
    centered: boolean;
    padding: string;
  };

  colors: {
    primary: string;
    secondary: string;
    neutral: string;
    accent: string;
    error: string;
  };
  borderRadius: {
    none: string;
    small: string;
    medium: string;
    large: string;
    rounded: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
}

export type themesType = "mercury" | "venus";

export interface PolUiRootProps {
  children: React.ReactNode;
  theme?: themesType | ITheme;
  navBar?: INavBar;
}

export interface UseKeyboardShortcutsProps {
  /**
   * key
   * @default ""
   * @type string
   * @example "Control+Shift+P"
   * @description The key to listen for
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */
  key: string;

  /**
   * action
   * @default () => {}
   * @type Function
   * @example () => { console.log("Hello World") }
   * @description The action to perform when the key is pressed
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */

  action: Function;
}

export interface UseOnScreenOptions {
  /**
   * rootMargin
   * @default "0px"
   * @type string
   * @example "0px 0px 300px 0px"
   *
   *
   * @description Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */
  rootMargin?: string;
  /**
   * once
   * @default false
   * @type boolean
   * @example true
   * @description Whether to stop observing the element after it has been intersected once.
   * @author Pol Gubau Amores
   * @version 0.0.42
   * */
  once?: boolean;
}

export interface ILanguageAndText {
  text: string;
  language: string;
}

export interface ILanguage {
  code: string;
  name: string;
  short: string;
  available: boolean;
}
