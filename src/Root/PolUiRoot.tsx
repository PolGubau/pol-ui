import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styled";
import { getTheme } from "../utils/getTheme";
import { Layout } from "../components/Layout/Layout";
import { PolUiRootProps } from "../types";
import Toast from "../components/Popups/Toast/Toast";

//
const PolUiRoot = ({ children, theme = "mercury", navBar }: PolUiRootProps) => {
  try {
    const themeObject = typeof theme === "string" ? getTheme(theme) : theme;

    return (
      <ThemeProvider theme={themeObject}>
        <GlobalStyles>
          <Layout navBar={navBar}>{children}</Layout>
        </GlobalStyles>
      </ThemeProvider>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default PolUiRoot;
