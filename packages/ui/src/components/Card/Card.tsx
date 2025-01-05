"use client";

import type { ComponentProps, FC } from "react";

import { cn, mergeDeep, omit } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types/types";
import { FocusEffect } from "../FocusEffect";
import type { CardTheme } from "./theme";

export interface CardProps extends ComponentProps<"div"> {
  href?: string;
  theme?: DeepPartial<CardTheme>;
  className?: string;
  disabled?: boolean;
}

/**
 * @name Card
 * @description A Card component that can be used to display content in a card-like style. Usefull in a blog, a social network, a forum... It can be horizontal or vertical and can contain an image.
 *
 * @param {React.ReactNode} props.children The content of the card.
 *
 * @param {string} props.className Custom class name for the card.
 *
 *
 * @param {string} props.href, If provided, the card will be an anchor link.
 *
 *
 * @param {DeepPartial<CardTheme>} props.theme, To override default theme for the card.
 *
 * @param {string} props.childrenClass, Custom class name for the children.
 *
 * @returns {React.ReactNode} A Card component.
 *
 * @example ```
 * <Card>
 *    <h5 className="text-2xl font-bold">Card title!</h5>
 *     <p className="font-normal text-secondary-700">
 *       Hello there!
 *    </p>
 * </Card>
 * ```
 */
export const Card: FC<CardProps> = (props): React.ReactNode => {
  const { children, className, href, theme: customTheme = {} } = props;

  // Card component will be an Anchor link if href prop is passed.
  const Component = typeof href === "undefined" ? "div" : "a";
  const theme = mergeDeep(getTheme().card, customTheme);
  const propsToOmit: (keyof CardProps)[] = ["children", "className", "href", "theme"];
  const externalProps = omit(props, propsToOmit);

  return (
    <Component
      data-testid="ui-card"
      href={href}
      className={cn(theme.root.base, href && theme.root.href, className)}
      {...externalProps}
    >
      {props.onClick && <FocusEffect />}

      {children}
    </Component>
  );
};
