import { TextStyled } from "./Styled";
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
}
const Text = ({
  children, // Text to be displayed
  value = "", // Value of the text
  size = undefined, // Size of the text
  weight = "normal", // Weight of the text
  color = undefined, // Color of the text
}: TextProps) => {
  return (
    <TextStyled weight={weight} color={color}>
      {size === 1 && <h1>{value ? value : children}</h1>}
      {size === 2 && <h2>{value ? value : children}</h2>}
      {size === 3 && <h3>{value ? value : children}</h3>}
      {size === 4 && <h4>{value ? value : children}</h4>}
      {size === 5 && <h5>{value ? value : children}</h5>}
      {size === 6 && <h6>{value ? value : children}</h6>}
      {!size && <p>{value ? value : children}</p>}
    </TextStyled>
  );
};
export default Text;
