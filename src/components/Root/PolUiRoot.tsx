import { ThemeProvider } from "styled-components";
import { mercuryTheme } from "../../styles/themes/mercuryTheme";
import { GlobalStyles } from "./Styled";
import "@fontsource/poppins";

const PolUiRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={mercuryTheme}>
      <GlobalStyles>{children}</GlobalStyles>
    </ThemeProvider>
  );
};

export default PolUiRoot;
