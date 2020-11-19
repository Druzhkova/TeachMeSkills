import React from "react";
import styled from "styled-components";

export function Button({ onclick, children }) {
  return <StyledButton onclick={onclick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin: 30px;
  height: 40px;
  border: 2px solid grey;
  border-radius: 10px;
  width: auto;
  min-width: 65px;
  font-family: cursive;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: grey;
    color: white;
  }
`;
