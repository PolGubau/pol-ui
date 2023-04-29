import { SubMenuPannelStyled } from "./Styled";
import { useRecoilValue } from "recoil";
import OneLevelMenu from "./OneLevelMenu/OneLevelMenu";
import { MdClose } from "react-icons/md";
import { MenuOpenedState } from "components/Menu/MenuState";
import { IMenuItem, ISubMenu } from "../menuTypes";

const SubMenuPannel = ({
  data,
  onClose,
}: {
  data: IMenuItem;
  onClose: Function;
}) => {
  const isMenuOpened = useRecoilValue<boolean>(MenuOpenedState);

  if (!data) return <h2>Nothing to show</h2>;

  const { name, icon, subMenus, subMenuType } = data;
  return (
    <SubMenuPannelStyled
      isMenuOpened={isMenuOpened}
      onClick={(e) => e.stopPropagation}
    >
      <header className="header">
        <h3>
          {icon}
          {name}
        </h3>
        <button onClick={() => onClose()} className="closeButton">
          <MdClose />
        </button>
      </header>
      <main className="menuContent">
        {subMenuType === "oneLevel" && subMenus && (
          <OneLevelMenu
            tab={data}
            subMenus={subMenus as ISubMenu[]}
            onClose={() => onClose()}
          />
        )}
        {subMenuType === "multiple" && subMenus && (
          <div className="multipleMenus">
            {subMenus.map((item: any) => {
              return (
                <div key={item.name}>
                  <h3>{item.name}</h3>
                  <OneLevelMenu
                    tab={data}
                    subMenus={item.subMenus}
                    onClose={() => onClose()}
                  />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </SubMenuPannelStyled>
  );
};
export default SubMenuPannel;
