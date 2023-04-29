import styled from "styled-components";

interface GridStyledProps {
  rows?: number;
  columns?: number;
  autoResponsive?: boolean;
  colorful?: boolean;
  centered?: boolean;
  small?: boolean;
}

export const GridStyled = styled.div<GridStyledProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 1rem;
  width: 100%;
  overflow: auto;
  padding: 1rem;

  > * {
    max-height: 30vh;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.colors.main.light};
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: all 0.1s ease-in-out;
    font-size: 1.2em;
    :hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
    h4 {
      font-weight: normal;
      padding: 0;
      margin: 0;
    }
    .icon {
      padding: 0;
      margin: 0;
      font-size: 2em;
    }
  }

  ${({ autoResponsive, small }) =>
    autoResponsive &&
    `
        grid-template-columns: repeat(auto-fit, minmax(${
          small ? "100px" : "200px"
        }, 1fr));
    `}
  ${({ rows }) =>
    rows &&
    `
    grid-template-rows: repeat(${rows}, 1fr);

    `}
  ${({ centered }) =>
    centered &&
    `
    justify-content: center;
    justify-items: center;
    align-items: center;
    `}
`;

const Grid = ({
  children,
  rows,
  columns,
  autoResponsive,
  centered,
  small,
}: {
  children: any;
  centered?: boolean;
  rows?: number;
  columns?: number;
  autoResponsive?: boolean;
  small?: boolean;
}) => {
  return (
    <GridStyled
      rows={rows}
      columns={columns}
      autoResponsive={autoResponsive}
      centered={centered}
      small={small}
    >
      {children}
    </GridStyled>
  );
};
export default Grid;
