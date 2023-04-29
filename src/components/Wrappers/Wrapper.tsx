import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  div {
    z-index: 101;
  }
`;

const Wrapper = ({ onClick, children }: any) => {
  return (
    <WrapperStyled onClick={onClick}>
      <div>{children}</div>
    </WrapperStyled>
  );
};
export default Wrapper;
