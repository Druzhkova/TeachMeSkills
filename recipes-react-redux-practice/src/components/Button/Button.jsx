import React from "react";
import styled from "styled-components";

// <Button onClick={() => clear()}>Clear</Button>
// <Button onClick={() => submit()}>Find</Button>

export function Button({
  children,
  onClick,
  type = "solid",
  color = "#000",
  ...restProps
}) {
  return (
    <StyledButton
      customType={type}
      onClick={onClick}
      color={color}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 9px 15px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  background-color: transparent;

  &:hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.customType === "solid"
      ? `
  background-color: ${props.color};
  `
      : `
  color ${props.color}
  `}
`;
