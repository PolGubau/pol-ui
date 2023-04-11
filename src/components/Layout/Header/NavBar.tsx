import React from "react";
import { Button } from "../../Button";
import { NavBarStyled } from "./Styled";
import { INavBar } from "../Layout";

const NavBar = ({ links, title }: INavBar) => {
  return (
    <NavBarStyled>
      <section className="left">{title && <h1>{title}</h1>}</section>
      <section className="right">
        {links &&
          links.map((link, index) => {
            return (
              <Button key={index} onClick={link.onClick} color="primary">
                {link.text}
              </Button>
            );
          })}
      </section>
    </NavBarStyled>
  );
};
export default NavBar;
