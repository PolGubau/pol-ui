import styled from "styled-components";

export const MarkdownEditorStyled = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.normal};
  border-radius: 15px;
  nav {
    box-sizing: border-box;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.background.dark};
    @media screen and (max-width: 700px) {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .left {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }
    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      border: none;
      background-color: ${({ theme }) => theme.colors.secondary.dark};
      color: ${({ theme }) => theme.colors.secondary.light};
      :hover {
        background-color: ${({ theme }) => theme.colors.secondary.normal};
        color: ${({ theme }) => theme.colors.secondary.dark};
        transform: scale(0.98);
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: flex-end;
      align-items: stretch;

      button {
        min-width: 70px;
        height: 30px;

        width: fit-content;
        background-color: ${({ theme }) => theme.colors.main.normal};
      }
      select {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        padding: 0 5px;
      }
    }
  }
  main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 5px;
    textarea {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      min-height: 100px;
      max-height: 400px;
      resize: vertical;
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.colors.secondary.dark};
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.background.normal};
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
    }
  }
`;
