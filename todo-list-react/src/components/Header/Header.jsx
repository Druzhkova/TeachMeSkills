import React from "react";
import { Button } from "../Button";
import styled from "styled-components";

export function Header({ children }) {
  return (
    <header>
      <StyledButton type="transparent" color="deepskyblue">
        All
      </StyledButton>
      <StyledButton type="transparent" color="deepskyblue">
        Active
      </StyledButton>
      <StyledButton type="transparent" color="deepskyblue">
        Done
      </StyledButton>
    </header>
  );
}

const StyledButton = styled(Button)`
  margin: 0 20px;
`;
