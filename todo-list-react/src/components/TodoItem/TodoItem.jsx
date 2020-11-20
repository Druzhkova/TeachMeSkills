import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "../Button";

export function TodoItem({ title, isCompleted, id, onChangeCompletionStatus }) {
  
  const onCompletionButtonClick = useCallback(() => {
    onChangeCompletionStatus(id);
  }, [id, onChangeCompletionStatus]);

  return (
    <Container isCompleted={isCompleted}>
      <Title>{title}</Title>
      <StyledInner>
        <StyledButon onClick={onCompletionButtonClick} color={isCompleted ? "#FCC10B" : "#28A745"}>
          {isCompleted ? "Undo" : "Done"}
        </StyledButon>
        <StyledButon color="#DB3646">Delete</StyledButon>
      </StyledInner>
    </Container>
  );
}

const StyledButon = styled(Button)`
  margin-left: 10px;
`;

const StyledInner = styled.div`
  min-width: 165px;
`;

const Title = styled.span`
  margin: 0 10px;
`;

const Container = styled.div`
  min-width: 490px;
  max-width: 700px;
  border: 1px solid #eaebec;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({isCompleted}) => isCompleted ? '#C3E5CA' : 'white'}
`;
