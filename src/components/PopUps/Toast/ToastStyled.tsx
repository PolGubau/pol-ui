import styled, { keyframes } from 'styled-components';

interface ToastStyledProps {
  type?: string;
  duration: number;
}

const bgLoadingAnimation = keyframes`
    from{
        background-position: 100% 100%; 
    } 
    to{
        background-position: 0 0;
    }
`;

const ToastStyled = styled.div<ToastStyledProps>`
  --normal: ${({ theme, type }) =>
    type === 'error'
      ? theme.colors.error.normal
      : type === 'success'
      ? theme.colors.main.normal
      : theme.colors.secondary.normal};
  --light: ${({ theme, type }) =>
    type === 'error'
      ? theme.colors.error.light
      : type === 'success'
      ? theme.colors.main.light
      : theme.colors.secondary.light};

  --dark: ${({ theme, type }) =>
    type === 'error'
      ? theme.colors.error.dark
      : type === 'success'
      ? theme.colors.main.dark
      : theme.colors.secondary.dark};

  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
  animation: ${bgLoadingAnimation} ${({ duration }) => duration}ms linear;
  gap: 20px;
  background-size: 200% 200%;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background.light} 0%,
    var(--light) 50%,
    ${({ theme }) => theme.colors.background.light} 50%
  );
  color: var(--dark);
  height: fit-content;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--dark);
  box-shadow: ${({ theme }) => theme.shadows.standard};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: 10px 10px 10px 20px;
  font-size: 1.1em;
  margin: 0;
  p {
    margin: 0;
  }
`;

export default ToastStyled;
