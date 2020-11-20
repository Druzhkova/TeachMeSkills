import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState("all");

  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage} />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 700px;
`;

export default App;
