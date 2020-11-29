import React, { useCallback } from "react";
import styled from "styled-components";

export function Input({ onChangeText, value }) {
  const onChange = useCallback(
    (evt) => {
      onChangeText(evt.target.value);
    },
    [onChangeText]
  );

  return <StyledInput onChange={onChange} value={value}></StyledInput>;
}

const StyledInput = styled.input`
  border: 2px solid #808080ad;
  height: 40px;
  border-radius: 10px;
  width: 240px;
  font-family: cursive;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;
