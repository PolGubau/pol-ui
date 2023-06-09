import styled from "styled-components";

export const LayoutStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 20px;

  main {
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.content.maxWidth || "100%"};
    padding: ${({ theme }) => theme.content.padding || "0px"};
    box-sizing: content-box;
    width: ${({ theme }) => theme.content.width || "100%"};

    ${({ theme }) =>
      theme.content.centered &&
      `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  `}
  }
`;
