import styled from "styled-components";

export const TableStyled = styled.div`
  header {
    margin-bottom: 10px;
    display: flex;
    padding: 10px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.background.light};
    border-bottom: 1px solid #ccc;

    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main.dark};
    }
  }
  .actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-radius: ${({ theme }) => theme.shapes.borderRadius.small};
    gap: 10px;
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border-radius: ${({ theme }) => theme.shapes.borderRadius.small};
      padding: 5px 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 15px;
      :hover {
        background-color: ${({ theme }) => theme.colors.main.light};
        color: ${({ theme }) => theme.colors.main.dark};
      }
    }
  }
  .searchInTable {
    border-radius: ${({ theme }) => theme.shapes.borderRadius.small};
    padding: 5px 10px;

    border: 1px solid ${({ theme }) => theme.colors.secondary.normal};

    background-color: ${({ theme }) => theme.colors.background.light};

    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: 15px;
    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.secondary.dark};
    }
  }
  .table-container {
    overflow-x: scroll;
    padding: 0 10px;
    /* hiding the bar */
    ::-webkit-scrollbar {
      display: none;
    }
    /* Firefox */
    scrollbar-width: none;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    text-align: left;
    font-size: 14px;
    text-transform: capitalize;
  }
  th,
  td {
    border: none;
    padding: 8px;
  }
  .row {
    padding: 0 10px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.shapes.borderRadius.normal};
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.colors.main.light};
    }
  }
`;
