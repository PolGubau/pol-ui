import styled from "styled-components";

export interface ButtonStyledProps {
  primary: boolean;
  color?: string | null;
  fullWidth?: boolean;
  disabled?: boolean;
  outlined?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  transition: all 0.1s ease-in-out;
  border: none;
  min-height: 40px;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, outlined }) =>
    outlined ? theme.colors.neutral : theme.colors.primary};

  color: ${({ theme, outlined }) =>
    outlined ? theme.colors.primary : theme.colors.neutral};
  padding: ${({ theme }) => theme.spacing.medium};
  user-select: none;

  ${(props) =>
    props.primary && props.outlined
      ? `
    background-color: ${props.theme.colors.neutral};
    color: ${props.theme.colors.accent};
    
    `
      : `
    background-color: ${props.theme.colors.accent};
    font-weight: bold;
    color: ${props.theme.colors.primary};
  `}

  ${(props) =>
    props.color && props.outlined
      ? `
    background-color: ${props.theme.colors.neutral};
    color: ${props.color};
  `
      : `
    background-color: ${props.color};
    color: ${props.theme.colors.neutral};
  `}
  
  
  
    
  :focus:not(:focus-visible) {
    outline: none;
  }
  button:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  :disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
    :hover {
      transform: scale(1);
    }
  }
`;
