import styled from "styled-components";

interface isMenuOpenedProps {
  isMenuOpened: boolean;
  isSelected: boolean;
}

const MenuItemStyled = styled.div<isMenuOpenedProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.main.normal : theme.colors.background.light};

  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  padding: 15px;
  min-width: 50px;
  height: 50px;
  justify-content: ${(props) => (props.isMenuOpened ? "flex-start" : "center")};
  cursor: pointer;
  transition: 0.1s ease-in-out;
  :hover {
    filter: brightness(0.9);
  }
  h5 {
    font-weight: normal;
    font-size: 1em;
    margin: 0;
    padding: 0;
  }
  svg {
    font-size: 1.4em;
  }
`;

export default MenuItemStyled;
