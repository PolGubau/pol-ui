import styled from "styled-components";

interface isMenuOpenedProps {
  isMenuOpened: boolean;
}

export const SubMenuPannelStyled = styled.div<isMenuOpenedProps>`
  position: absolute;
  width: fit-content;
  min-width: 300px;
  max-width: 800px;
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  display: flex;
  z-index: 4;
  flex-direction: column;
  overflow: hidden;
  gap: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 5, 0.15);
  top: 10%;
  left: ${(props) => (props.isMenuOpened ? "220px" : "70px")};

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    background-color: ${({ theme }) => theme.colors.secondary.light || "#ccc"};
    h3 {
      font-size: 1.2em;
      font-weight: normal;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
  .menuContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px 20px;
    align-items: stretch;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    h3 {
      font-size: 1.2em;
      font-weight: normal;
      margin: 0;
      padding-bottom: 5px;
    }
  }

  .multipleMenus {
    display: flex;
    flex-direction: row;

    gap: 20px;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;
  }
  .closeButton {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 999px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.text.normal};
    :hover {
      filter: brightness(0.8);
      background-color: ${(props) =>
        props.theme.colors.secondary.normal || "#ccc"};
    }
  }
`;
