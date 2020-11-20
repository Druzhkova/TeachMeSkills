import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

export function TodoItem() {
  return (
    <Container>
      <Title>text</Title>
      <div>
        <StyledButon>Done</StyledButon>
        <StyledButon>Delete</StyledButon>
      </div>
    </Container>
  );
}

const StyledButon = styled(Button)`
  margin-left: 10px;
`;

const Title = styled.span`
  margin: 0 10px;
`;

const Container = styled.div`
  min-width: 425px;
  height: 35px;
  border: 1px solid #eaebec;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
