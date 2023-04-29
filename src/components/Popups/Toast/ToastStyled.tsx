import styled, { css, keyframes } from "styled-components";
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
const slide = keyframes`
     from {
    transform: translateY(100%) scale(0.5);
  }
  to {
    transform: translateY(0%) scale(1);
  }

`;

const fade = keyframes`
        from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`;

const exit = keyframes`
        from {    
            transform: translateY(100%) scale(0.5);

    bottom:20px;
    }
    to {    
        transform: translateY(0%) scale(1);

    bottom: -100%;

    }
`;

interface ToastContainerStyledProps {
  aboutToClose: boolean;
  transitionDuration?: number;
  transition?: "slide" | "fade" | "none";
}
export const ToastContainerStyled = styled.div<ToastContainerStyledProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: ${({ transition }) => {
    switch (transition) {
      case "none":
        return css``;
      case "fade":
        return css`
          ${fade} 0.1s ease-in-out;
        `;
      default:
        return css`
          ${slide} 0.1s ease-in-out;
        `;
    }
  }};

  z-index: 9999;
  ${({ transitionDuration }) =>
    transitionDuration &&
    css`
      animation-duration: ${transitionDuration}ms;
    `}

  ${({ aboutToClose, transition }) =>
    aboutToClose &&
    transition !== "none" &&
    css`
      animation: ${exit} 0.1s ease-in-out;
      bottom: -200%;
    `}
`;

export const ToastStyled = styled.div<ToastStyledProps>`
  display: flex;
  animation: ${bgLoadingAnimation} ${({ duration }) => duration}ms linear;
  gap: 20px;
  background-size: 200% 200%;
  background-image: linear-gradient(
    to right,
    transparent 0%,
    ${({ theme }) => theme.colors.accent} 50%,
    transparent 50%
  );
  color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  font-size: 1.1em;
  margin: 0;
  p {
    margin: 0;
  }
`;
