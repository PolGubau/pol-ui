import React from "react";
import { Theme } from "../../types";
import { ThemeProvider as StyledTheme } from "styled-components";
import { mercury } from "../../style/themes/mercury";
interface Props {
	theme: Theme;
	children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ theme = mercury, children }) => {
	// we have some predefinedThemes, but the user can send a custom theme

	return <StyledTheme theme={theme}>{children}</StyledTheme>;
};

export default ThemeProvider;
