import {
  MenuOpenedState,
  MenuSelectedTabState,
  SubMenuPannelDataState,
  SubMenuPannelShowState,
} from "components/Menu/MenuState";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MenuItemStyled from "./MenuItemStyled";
import { IMenuItem } from "../menuTypes";
export interface MenuItemProps {
  tab: IMenuItem;
  isSelected?: boolean;
}

export const MenuItem = ({ tab, isSelected = false }: MenuItemProps) => {
  const navigate = useNavigate();
  const isMenuOpened = useRecoilValue(MenuOpenedState);
  const setSubMenuPannelShow = useSetRecoilState<any>(SubMenuPannelShowState);

  const setSubMenuPannelData = useSetRecoilState<any>(SubMenuPannelDataState);

  const handleOpenPannel = () => {
    setSubMenuPannelData(tab);
    setSubMenuPannelShow(true);
  };
  const setMenuSelectedTabState =
    useSetRecoilState<IMenuItem>(MenuSelectedTabState);

  const handleNavigate = (tab: IMenuItem) => {
    tab.to && navigate(tab.to);
    tab.to && setMenuSelectedTabState(tab);
  };

  return (
    <>
      <MenuItemStyled
        isSelected={isSelected}
        isMenuOpened={isMenuOpened}
        onClick={() => {
          tab.action
            ? tab.action()
            : tab.subMenus
            ? handleOpenPannel()
            : handleNavigate(tab);
        }}
      >
        {tab.icon && <span>{tab.icon}</span>}
        {isMenuOpened && <h5>{tab.label}</h5>}
      </MenuItemStyled>
    </>
  );
};
