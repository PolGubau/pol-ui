// Author: Pol Gubau Amores 2023

import styled from "styled-components";
import { GroupSpace } from "./Group";
interface GroupStyledProps {
  props: {
    vertical?: boolean;
    fullSize?: boolean;
    center?: boolean;
    space?: GroupSpace;
  };
}
export const GroupStyled = styled.div<GroupStyledProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ props }) => (props.vertical ? "column" : "row")};
  align-items: center;
  width: fit-content;
  ${(props) =>
    props.props.space === "small"
      ? `gap: ${props.theme.spacing.small};`
      : props.props.space === "medium"
      ? `gap: ${props.theme.spacing.medium};`
      : props.props.space === "large"
      ? `gap: ${props.theme.spacing.large};`
      : `gap: ${props.theme.spacing.none};`}

  ${(props) =>
    props.props.vertical &&
    `align-items: stretch

`}
    
  ${(props) =>
    props.props.fullSize &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  
  `}
    ${(props) =>
    props.props.center &&
    `
    justify-content: center;    
    width: 100%;
    align-items: center;
  `};
`;
