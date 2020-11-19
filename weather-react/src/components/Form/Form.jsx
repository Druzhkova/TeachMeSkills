import React, { useCallback } from "react";
import styled from "styled-components";

export function Form({ children, onSubmit }) {
  const onSubmitHandler = useCallback(
    (evt) => {
      evt.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );
  return <StyledForm onSubmit={onSubmitHandler}>{children}</StyledForm>;
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
