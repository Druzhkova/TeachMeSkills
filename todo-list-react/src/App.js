import React, { useState } from "react";
import styled from "styled-components";
import { Header, Form, TodoItem } from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState("all");

  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage} />
      <Form></Form>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export default App;
