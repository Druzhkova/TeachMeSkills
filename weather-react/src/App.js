import React, { useState, useCallback } from "react";
import { Input, Button, Table, Form, TableRow } from "./components";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetch(
        `http://api.weatherstack.com/current?access_key=c18c9cd0a7159022db85263eea437534&query=${value}`
      );
      const {
        location: { name, country },
        current: { temperature },
      } = await result.json();

      const weather = { city: name, country, temperature };

      setData([...data, weather]);
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }, [value]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input value={value} onChangeText={setValue} />
        <Button>{loading ? "loading..." : "Find"}</Button>
      </Form>
      {errorMessage ? (
        <span style={{ color: "red" }}>{errorMessage}</span>
      ) : null}
      <Table>
        {data.map((weather) => (
          <TableRow data={weather} />
        ))}
      </Table>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

export default App;
