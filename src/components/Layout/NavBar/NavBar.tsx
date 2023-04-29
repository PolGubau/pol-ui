import React from "react";
import { Button } from "../../Button";
import { NavBarStyled } from "./Styled";
import { INavBar } from "../../../types";

const NavBar = ({ links, title }: INavBar) => {
  return (
    <NavBarStyled>
      <section className="left">{title && <h1>{title}</h1>}</section>
      <section className="right">
        {links &&
          links.map((link, index) => {
            // if action is not defined, then it is a text.
            // if action is defined, then look the type of action
            // if action is a string, then it is a link
            // if action is a function, then it is a button

            const isLink = typeof link.action === "string";
            const isButton = typeof link.action === "function";
            return (
              <div key={index}>
                {isLink && <a href={link.action as string}>{link.text}</a>}
                {isButton && (
                  <Button onClick={link.action as () => void}>
                    {link.text}
                  </Button>
                )}
              </div>
            );
          })}
      </section>
    </NavBarStyled>
  );
};
export default NavBar;
