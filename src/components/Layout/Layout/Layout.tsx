import React from "react";
import NavBar from "../NavBar/NavBar";
import { LayoutStyled } from "./Styled";
import { LayoutProps } from "./types";

const Layout = ({ children, navBar }: LayoutProps) => {
  return (
    <LayoutStyled>
      {navBar && <NavBar title={navBar.title} links={navBar.links} />}
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
