import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "../Button";

export function Form({ onSubmit }) {
  const onSubmitHandler = useCallback(
    (evt) => {
      evt.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <label htmlFor="todoInput">
        Add new task
        <Input id="todoInput" />
      </label>
      <Button>Add</Button>
    </StyledForm>
  );
}

const Input = styled.input`
  margin: 0 50px;
  padding: 7px 10px;
  border: 1px solid #EAEBEC;
  border-radius: 5px;
  outline: none;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
`;
