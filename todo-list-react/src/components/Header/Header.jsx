import React, { useCallback } from "react";
import { Button } from "../Button";
import styled from "styled-components";

function HeaderButton({ type, onClick, page, children }) {
  const onClickHandler = useCallback(() => {
    onClick(type);
  }, [onClick, type]);

  return (
    <StyledButton
      onClick={onClickHandler}
      type="transparent"
      color={page === type ? "#28A745" : "deepskyblue"}
    >
      {children}
    </StyledButton>
  );
}

export function Header({ page, onButtonClick }) {
  return (
    <header>
      <HeaderButton page={page} onClick={onButtonClick} type="All">
        All
      </HeaderButton>
      <HeaderButton page={page} onClick={onButtonClick} type="Active">
        Active
      </HeaderButton>
      <HeaderButton page={page} onClick={onButtonClick} type="Done">
        Done
      </HeaderButton>
    </header>
  );
}

const StyledButton = styled(Button)`
  margin: 0 20px;
`;
