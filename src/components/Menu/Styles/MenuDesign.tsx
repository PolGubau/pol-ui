import styled from "styled-components";
interface isMenuOpenedProps {
  isMenuOpened: boolean;
}
export const MenuDesign = styled.section<isMenuOpenedProps>`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.background.light ?? "#ccc"};
  height: 100%;
  transition: 0.5s ease-in-out;
  width: ${(props) => (props.isMenuOpened ? "fit-content" : "50px")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;
  justify-content: space-between;
  .top {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;

    .searchBox {
      display: flex;
      gap: 10px;
      flex-direction: row;
      justify-content: center;
      border-bottom: 1px solid
        ${(props) => props.theme.colors.primary ?? "#ccc"};
      background-color: ${(props) => props.theme.colors.background.light};
      color: ${(props) => props.theme.colors.text.primary};
      padding: 10px;
      align-items: center;
      outline: none;
      height: 50px;

      .searchMenu {
        border: none;
        font-size: 1em;
        width: fit-content;
        max-width: 150px;
        outline: none;
      }
    }
    .searchBoxNoOpened {
      cursor: pointer;
      :hover {
        filter: brightness(0.9);
      }
    }
    .menuSelected {
      background-color: red;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    overflow: hidden;
  }
`;

export const SubMenuStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px;
  margin: 0px;
  width: 100%;

  .card {
    padding: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.background.light};
  }
`;

export const SubTitleGroupStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.background.normal};

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.main.normal};
    width: 100%;
    padding: 0px;
    border-radius: 20px;
    gap: 10px;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    h5 {
      padding: 10px 15px;
      font-weight: normal;
      font-size: 1.1em;
      margin: 0;
    }
    i {
      padding: 10px 15px;
    }
    :hover {
      filter: brightness(0.9);
    }
  }
  .collapsable {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
