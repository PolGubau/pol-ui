// Author: Pol Gubau Amores 2023

import styled from "styled-components";

interface QuoteStyledProps {
  color?: string;
  hasIcon?: string | React.ReactNode | null;
}
export const QuoteStyled = styled.section<QuoteStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  article {
    margin: ${(props) => props.theme.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.medium};

    width: 60%;
    min-width: 300px;
    max-width: 600px;

    height: 100%;
    background-color: ${({ theme, color }) => color || theme.colors.accent};
    border-radius: ${(props) => props.theme.borderRadius.large};
    color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.theme.spacing.large};
    text-align: center;

    .icon_quote {
      aspect-ratio: 1/1;
      min-width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin-bottom: ${(props) => props.theme.spacing.medium};
      background-color: ${(props) => props.theme.colors.neutral};
      padding: ${(props) => props.theme.spacing.small};
      border-radius: ${(props) => props.theme.borderRadius.rounded};
    }
  }
`;
