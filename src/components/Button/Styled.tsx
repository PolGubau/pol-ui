import styled from "styled-components";

export interface ButtonStyledProps {
  primary: boolean;
  color?: string | null;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  disabled: ${({ disabled }) => disabled && "disabled"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  transition: all 0.1s ease-in-out;
  border: none;
  min-height: 40px;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral};
  padding: ${({ theme }) => theme.spacing.medium};
  user-select: none;
  ${(props) =>
    props.primary &&
    `
    background-color: ${props.theme.colors.accent};
    font-weight: bold;
    color: ${props.theme.colors.primary};
  `}

  ${(props) =>
    props.color &&
    `
    background-color: ${props.color};
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
    font-size: 1.5rem;
  }
  :hover {
    cursor: pointer;
    transform: scale(0.99);
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
