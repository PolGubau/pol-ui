import { INavBar } from "../components/Layout/Layout";

export type themesType = "mercury" | "venus";

export interface PolUiRootProps {
  children: React.ReactNode;
  theme?: themesType | ITheme;
  navBar?: INavBar;
}
