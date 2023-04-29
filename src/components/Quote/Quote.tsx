// Author: Pol Gubau Amores 2023

import Icon from "../../components/Icon/Icon";
import { QuoteStyled } from "./Styled";
import React from "react";
import { QuoteProps } from "../../types";

const Quote = ({ children, color, icon }: QuoteProps) => {
  return (
    <QuoteStyled color={color} hasIcon={icon}>
      <article>
        {icon && <Icon icon={icon} />}

        {children}
      </article>
    </QuoteStyled>
  );
};
export default Quote;
