import React from "react";
import styled from "styled-components";

export function Button({
  children,
  onClick,
  type = "solid",
  color = "#24292E",
  ...resProps
}) {
  return (
    <StyledButton onClick={onClick} customType={type} color={color} {...resProps}>
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
