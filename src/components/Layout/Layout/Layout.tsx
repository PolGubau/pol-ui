import React from "react";
import NavBar from "../Header/NavBar";
import { LayoutStyled } from "./Styled";
import { INavBar, LayoutProps } from "./types";

const defaultNavBar: INavBar = {
  title: "PolUi",
  links: [
    {
      text: "Home",
      action: "/",
    },
    {
      text: "About",
      action: "/about",
    },
  ],
};
const Layout = ({ children, navBar = defaultNavBar }: LayoutProps) => {
  return (
    <LayoutStyled>
      <NavBar title={navBar?.title} links={navBar?.links} />
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
