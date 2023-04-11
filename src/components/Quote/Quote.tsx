// Author: Pol Gubau Amores 2023

import { IconByName, IconNameType } from "../../utils";
import { QuoteStyled } from "./Styled";
import { QuoteProps } from "./types";
import React from "react";

const Quote = ({ children, color, icon }: QuoteProps) => {
  return (
    <QuoteStyled color={color} hasIcon={icon}>
      <article>
        {icon && (
          <div className="icon_quote">
            {typeof icon === "string" ? IconByName(icon as IconNameType) : icon}
          </div>
        )}
        {children}
      </article>
    </QuoteStyled>
  );
};
export default Quote;
