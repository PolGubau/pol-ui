import React from "react";
import { ThemeProvider } from "styled-components";
import { mercuryTheme } from "themes";
import { GlobalStyles } from "./Styled";

const PolUiRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={mercuryTheme}>
      <GlobalStyles>{children}</GlobalStyles>
    </ThemeProvider>
  );
};

export default PolUiRoot;
