import React from "react";
import TextStyled from "./Styled";
import { TextProps } from "./types";

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
