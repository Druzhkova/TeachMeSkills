import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

export function Form({ onSubmit }) {
  const [imputValue, setImputValue] = useState("");

  const onSubmitHandler = useCallback(
    (evt) => {
      evt.preventDefault();
      onSubmit(imputValue);
      setImputValue("");
    },
    [onSubmit, imputValue]
  );

  const onChange = useCallback(
    (evt) => {
      setImputValue(evt.target.value);
    },
    [setImputValue]
  );

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <label htmlFor="todoInput">
        Add a todo for today
        <Input value={imputValue} onChange={onChange} id="todoInput" />
      </label>
      <Button>Add</Button>
    </StyledForm>
  );
}

const Input = styled.input`
  margin: 0 50px;
  padding: 7px 10px;
  border: 1px solid #eaebec;
  border-radius: 5px;
  outline: none;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
`;
