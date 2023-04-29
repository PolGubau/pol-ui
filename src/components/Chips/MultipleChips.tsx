import styled from "styled-components";
import Chip from "./Chip";
import React from "react";
export const MultipleChipsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const MultipleChips = ({ array }: { array: string[] }) => {
  return (
    <MultipleChipsStyled>
      {array.map((value, index: number) => {
        return <Chip key={value + index}>{value}</Chip>;
      })}
    </MultipleChipsStyled>
  );
};
export default MultipleChips;
