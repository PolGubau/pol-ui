import { MenuDesign } from "components/Menu/Styles/MenuDesign";
import { TbArrowBarToLeft, TbArrowBarToRight, TbSearch } from "react-icons/tb";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  IsSearchBarFocusedState,
  MenuFilterState,
  MenuOpenedState,
  MenuSelectedTabState,
  MenuTabsState,
  SubMenuPannelDataState,
  SubMenuPannelShowState,
} from "./MenuState";
import { defaultMenu, menuWithoutDashboard } from "./defaultMenu";
import { MenuItem } from "./MenuItem/MenuItem";
import SubMenuPannel from "./SubMenuPannel/SubMenuPannel";
import { useNavigate } from "react-router-dom";
import useKeyboardShortcuts from "hooks/useKeyboardShortcuts";
import { useEffect, useRef } from "react";
import { suggestSimilarStrings } from "utils/similarString";
import { IMenuItem } from "./menuTypes";
//

const CustomMenu = () => {
  const navigate = useNavigate();
  useKeyboardShortcuts();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isMenuOpened, setIsMenuOpened] =
    useRecoilState<boolean>(MenuOpenedState);

  const [menuTabs, setMenuTabs] = useRecoilState<any>(MenuTabsState);
  const [menuFilterState, setMenuFilterState] =
    useRecoilState<string>(MenuFilterState);

  const [menuSelectedTabState, setMenuSelectedTabState] =
    useRecoilState<any>(MenuSelectedTabState);

  const [subMenuPannelShow, setSubMenuPannelShow] = useRecoilState<any>(
    SubMenuPannelShowState
  );

  const isSearchFocus = useRecoilValue<boolean>(IsSearchBarFocusedState);

  // focus search bar when isSearchFocus is true or when menu is opened
  useEffect(() => {
    if (isSearchFocus || isMenuOpened) {
      searchInputRef.current?.focus();
    }
  }, [isSearchFocus, isMenuOpened]);

  const subMenuPannelDataState = useRecoilValue<any>(SubMenuPannelDataState);

  //
  const handleSearchChange = (value: string) => {
    setMenuFilterState(value);
    if (value === "") {
      setMenuTabs(defaultMenu);
      handleNewSelectedTab(defaultMenu[0]);
      return;
    }
    const allPosibleFilterabled = () => {
      const allNames = menuWithoutDashboard.map((tab: IMenuItem) => tab.name);
      const allSubMenuType = menuWithoutDashboard.map(
        (tab: IMenuItem) => tab.subMenuType
      );
      return [...allNames, ...allSubMenuType];
    };

    const filteredMenu = menuWithoutDashboard.filter((tab: IMenuItem) => {
      const allNames = tab.name.toLowerCase().includes(value.toLowerCase());
      const filteredBySubMenuType = tab.subMenuType
        .toLowerCase()
        .includes(value.toLowerCase());

      return allNames || filteredBySubMenuType;
    });

    const handleSuggestions = () => {
      const similarStrings = suggestSimilarStrings(
        value,
        allPosibleFilterabled()
      );

      const menusWithSimilarName = similarStrings.map((item: string) => {
        const menu = menuWithoutDashboard.find((tab: IMenuItem) => {
          const tabFinded =
            tab.name.toLowerCase() === item.toLowerCase() ||
            tab.subMenuType.toLowerCase() === item.toLowerCase();

          return tabFinded;
        });
        // only return the menu if it is not already in the array
        return menu && !filteredMenu.includes(menu) ? menu : null;
      });

      const suggestions = menusWithSimilarName.filter((item: any) => item);

      setMenuTabs(suggestions);
      suggestions[0] &&
        suggestions.length > 0 &&
        handleNewSelectedTab(suggestions[0]);
    };

    setMenuTabs(filteredMenu);
    filteredMenu.length > 0
      ? handleNewSelectedTab(filteredMenu[0])
      : handleSuggestions();
  };

  const handleNewSelectedTab = (tab: IMenuItem) => {
    tab && setMenuSelectedTabState(tab);
    tab && tab.to && navigate(tab.to);
  };

  return (
    <>
      {subMenuPannelShow && (
        <SubMenuPannel
          data={subMenuPannelDataState}
          onClose={() => setSubMenuPannelShow(false)}
        />
      )}
      <MenuDesign
        isMenuOpened={isMenuOpened}
        onKeyDown={(e: any) => {
          if (e.key === "Enter") {
            e.preventDefault();
            menuSelectedTabState && navigate(menuSelectedTabState.to);
            setMenuFilterState("");
            setIsMenuOpened(false);
            setMenuTabs(defaultMenu);
          }
          if (e.key === "Escape") {
            setMenuFilterState("");
            setIsMenuOpened(false);
            setMenuTabs(defaultMenu);
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            handleNewSelectedTab(
              menuSelectedTabState
                ? menuTabs[menuTabs.indexOf(menuSelectedTabState) + 1]
                : menuTabs[0]
            );
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            handleNewSelectedTab(
              menuSelectedTabState
                ? menuTabs[menuTabs.indexOf(menuSelectedTabState) - 1]
                : menuTabs[menuTabs.length - 1]
            );
          }
        }}
      >
        <div className="top">
          <div
            className={`searchBox ${!isMenuOpened ? "searchBoxNoOpened" : ""}`}
            onClick={() => {
              !isMenuOpened && setIsMenuOpened(!isMenuOpened);
            }}
          >
            <TbSearch />
            {isMenuOpened && (
              <input
                ref={searchInputRef}
                autoFocus
                autoComplete="on"
                autoCorrect="on"
                autoCapitalize="on"
                className="searchMenu"
                type="search"
                placeholder="Search"
                value={menuFilterState}
                onChange={(e) => {
                  handleSearchChange(e.target.value);
                }}
              />
            )}
          </div>
          {menuTabs.map((tab: IMenuItem, index: number) => {
            return (
              <MenuItem
                tab={tab}
                key={tab.name + index}
                isSelected={menuSelectedTabState?.name === tab.name}
              />
            );
          })}
        </div>
        <div className="bottom">
          <MenuItem
            tab={{
              name: "Close",
              icon: isMenuOpened ? <TbArrowBarToLeft /> : <TbArrowBarToRight />,
              action: () => {
                setIsMenuOpened(!isMenuOpened);
              },
              label: "Close",
              subMenuType: "none",
            }}
          />
        </div>
      </MenuDesign>
    </>
  );
};

export default CustomMenu;
