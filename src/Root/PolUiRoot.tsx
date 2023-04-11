import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styled";
import { getTheme } from "../utils/getTheme";
import { PolUiRootProps } from "./types";
import { Layout } from "../components/Layout/Layout";

const PolUiRoot = ({ children, theme = "mercury" }: PolUiRootProps) => {
  try {
    const themeObject = typeof theme === "string" ? getTheme(theme) : theme;
    return (
      <ThemeProvider theme={themeObject}>
        <GlobalStyles>
          <Layout>{children}</Layout>
        </GlobalStyles>
      </ThemeProvider>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default PolUiRoot;
