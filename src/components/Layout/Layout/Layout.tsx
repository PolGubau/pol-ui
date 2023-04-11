import React from "react";
import NavBar from "../Header/NavBar";
import { LayoutStyled } from "./Styled";
import { LayoutProps } from "./types";

const Layout = ({ children, navBar }: LayoutProps) => {
  return (
    <LayoutStyled>
      <nav>
        <NavBar title={navBar?.title} links={navBar?.links} />
      </nav>
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
