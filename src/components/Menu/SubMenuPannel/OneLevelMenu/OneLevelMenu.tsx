import { getIconByName } from "resources/metadata/form/utils/icons/getIconByInputType";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { MenuSelectedTabState } from "components/Menu/MenuState";
import { IMenuItem, ISubMenu } from "components/Menu/menuTypes";
export const OneLevelMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const EachSubMenuStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.normal};
  flex-direction: "gap";
  gap: 10px;

  padding: 5px 10px;
  :hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

const OneLevelMenu = ({
  tab,
  subMenus,
  onClose,
}: {
  tab: IMenuItem;
  subMenus: ISubMenu[];
  onClose: Function;
}) => {
  const navigate = useNavigate();
  const setMenuSelectedTabState = useSetRecoilState(MenuSelectedTabState);

  const handleClick = (item: ISubMenu, tab: IMenuItem) => {
    onClose();
    item.to && navigate(item.to);
    setMenuSelectedTabState(tab);
  };

  return (
    <OneLevelMenuStyled>
      {subMenus.map((item: ISubMenu) => {
        return item.name ? (
          <EachSubMenuStyled
            key={item.name}
            onClick={() => handleClick(item, tab)}
          >
            {item.icon && getIconByName(item.icon)}
            {item.label}
          </EachSubMenuStyled>
        ) : null;
      })}
    </OneLevelMenuStyled>
  );
};

export default OneLevelMenu;
