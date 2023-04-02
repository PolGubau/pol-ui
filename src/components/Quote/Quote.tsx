// Author: Pol Gubau Amores 2023

import { IconByName, IconName } from "../../assets/iconByName";
import { QuoteStyled } from "./Styled";

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
}

const Quote = ({ children, color, icon }: QuoteProps) => {
  return (
    <QuoteStyled color={color} hasIcon={icon}>
      <article>
        {icon && (
          <div className="icon_quote">
            {typeof icon === "string" ? IconByName(icon as IconName) : icon}
          </div>
        )}
        {children}
      </article>
    </QuoteStyled>
  );
};
export default Quote;
