import styled from "styled-components";
export const GlobalStyles = styled.div`
  box-sizing: content-box;
  background-color: ${(props) => props.theme.colors.neutral || "white"};
  color: ${(props) => props.theme.colors.primary || "black"};
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.primary || "black"};
    text-decoration: inherit;
    :hover {
      color: ${({ theme }) => theme.colors.secondary || "black"};
    }
  }
`;
