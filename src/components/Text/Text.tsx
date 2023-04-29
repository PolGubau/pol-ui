import React from "react";
import TextStyled from "./Styled";
import { TextProps } from "types";

const isALink = (href: string | undefined, text: string) => {
  if (href) {
    return <a href={href}>{text}</a>;
  }
  return text;
};

const textSizer = (
  size: number | undefined,
  value: string,
  href: string | undefined
) => {
  switch (size) {
    case 1:
      return <h1>{isALink(href, value)}</h1>;
    case 2:
      return <h2>{isALink(href, value)}</h2>;
    case 3:
      return <h3>{isALink(href, value)}</h3>;
    case 4:
      return <h4>{isALink(href, value)}</h4>;
    case 5:
      return <h5>{isALink(href, value)}</h5>;
    case 6:
      return <h6>{isALink(href, value)}</h6>;
    default:
      return <p>{isALink(href, value)}</p>;
  }
};

const Text = ({
  children, // Text to be displayed
  value = "", // Value of the text
  size = undefined, // Size of the text
  weight = "normal", // Weight of the text
  color = undefined, // Color of the text
  href = undefined, // Link to the text
}: TextProps) => {
  const text = value ? value : children;

  return (
    <TextStyled weight={weight} color={color}>
      {textSizer(size, text, href)}
    </TextStyled>
  );
};
export default Text;
