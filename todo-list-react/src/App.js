import React from "react";
import styled from "styled-components";
import { Header } from "./components";

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 700px;
`;

export default App;
