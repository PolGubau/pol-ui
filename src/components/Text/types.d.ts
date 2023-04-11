export type weightType = "normal" | "bold" | "lighter";

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
