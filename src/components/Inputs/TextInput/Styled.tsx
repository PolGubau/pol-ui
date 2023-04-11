import styled from "styled-components";
interface TextInputStyledProps {
  disabled?: boolean;
}
export const TextInputStyled = styled.div<TextInputStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 0px;
  label {
    margin-left: ${({ theme }) => theme.spacing.medium};
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.small};

    ${({ disabled, theme }) =>
      disabled &&
      `
      text-decoration: line-through;
      color: ${theme.colors.secondary};
      `}
  }
  input {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: ${({ theme }) => theme.spacing.small}${({ theme }) => theme.spacing.medium};
    font-size: ${({ theme }) => theme.fontSize.medium};
    &:disabled {
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    &:read-only {
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      outline: none;
    }
  }
`;
