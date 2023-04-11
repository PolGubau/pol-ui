import React from "react";
import styled from "styled-components";

export interface IGroupedButtons {}

export const GroupedButtonsStyled = styled.div<IGroupedButtons>`
  display: flex;
  flex-direction: row;
  gap: 2px;

  * {
    border-radius: 0;
    :first-child {
      border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
    }
    :last-child {
      border-top-right-radius: ${({ theme }) => theme.borderRadius.small};
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }
`;

const GroupedButtons = ({ children }: any) => {
  return <GroupedButtonsStyled>{children}</GroupedButtonsStyled>;
};
export default GroupedButtons;
