import styled from "styled-components";

export const NavBarStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary || "white"};
  padding: 10px;
  .left {
    display: flex;
    justify-content: flex-start;
  }
  .right {
    display: flex;
    justify-content: flex-end;
  }
`;
