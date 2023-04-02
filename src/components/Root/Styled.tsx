import styled from "styled-components";

export const GlobalStyles = styled.div`
  background-color: ${(props) => props.theme.colors.neutral};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
  width: 100%;
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
  :root {
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: ${({ theme }) => theme.colors.neutral};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: inherit;
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  body {
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`;
