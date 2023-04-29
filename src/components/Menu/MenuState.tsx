import { atom } from "recoil";
import { defaultMenu } from "./defaultMenu";
import { IMenuItem } from "./menuTypes";

export const MenuOpenedState = atom({
  key: "MenuOpenedState",
  default: false,
});
export const MenuFilterState = atom({
  key: "MenuFilterState",
  default: "",
});

export const MenuTabsState = atom({
  key: "MenuTabsState",
  default: defaultMenu,
});

export const MenuSelectedTabState = atom({
  key: "MenuSelectedTabState",
  default: defaultMenu[0] as IMenuItem,
});

// submenu pannel

export const SubMenuPannelShowState = atom({
  key: "SubMenuPannelState",
  default: false,
});

export const SubMenuPannelDataState = atom({
  key: "SubMenuPannelDataState",
  default: undefined,
});

// search bar

export const IsSearchBarFocusedState = atom({
  key: "IsSearchBarFocusedState",
  default: false,
});
