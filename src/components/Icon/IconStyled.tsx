import styled from "styled-components";

interface IconStyledProps {
  size?: string;
  color?: string;
}

export const IconStyled = styled.div<IconStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.colors.neutral};
  font-size: ${({ size }) => size || "1.5rem"};
`;
