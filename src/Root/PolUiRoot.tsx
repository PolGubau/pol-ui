import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styled";
import { getTheme } from "../utils/getTheme";
import { Layout } from "../components/Layout/Layout";
import { RecoilRoot } from "recoil";
import { PolUiRootProps } from "../types";
import { useToast } from "../hooks";
import Toast from "../components/Toast/Toast";

//
const PolUiRoot = ({ children, theme = "mercury", navBar }: PolUiRootProps) => {
  try {
    const themeObject = typeof theme === "string" ? getTheme(theme) : theme;

    const { toast } = useToast();

    return (
      <ThemeProvider theme={themeObject}>
        <GlobalStyles>
          <RecoilRoot>
            {toast.show && <Toast />}
            <Layout navBar={navBar}>{children}</Layout>
          </RecoilRoot>
        </GlobalStyles>
      </ThemeProvider>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default PolUiRoot;
