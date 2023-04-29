import styled from "styled-components";

export interface ButtonStyledProps {
  primary: boolean;
  color?: string | undefined;
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
  border: 1px solid transparent;
  min-height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, outlined }) =>
    outlined ? theme.colors.neutral : theme.colors.primary};

  color: ${({ theme, outlined }) =>
    outlined ? theme.colors.primary : theme.colors.neutral};
  padding: ${({ theme }) => theme.spacing.medium};

  ${(props) =>
    props.outlined &&
    `
    border: 1px solid ${props.theme.colors.primary};
    background-color: ${props.theme.colors.neutral};
    color: ${props.theme.colors.primary};
  `}

  ${(props) =>
    props.primary &&
    props.outlined &&
    `
      border: 1px solid ${props.theme.colors.accent};
    background-color: ${props.theme.colors.neutral};
    color: ${props.theme.colors.accent};
  
  `}


  ${(props) =>
    props.color &&
    !props.outlined &&
    `
    background-color: ${props.color};
  `}
  ${(props) =>
    props.color &&
    props.outlined &&
    `
    border-color: ${props.color};
    color: ${props.color};
  `}
  
  
  
    
  :focus:not(:focus-visible) {
    outline: none;
  }
  button:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }

  :hover {
    cursor: pointer;
    filter: brightness(0.9);
    transform: scale(0.95);
  }

  :disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
    :hover {
      transform: scale(1);
    }
  }
`;
