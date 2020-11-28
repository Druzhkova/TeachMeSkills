import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Table, TableRow } from "../components";
import { getWeatherRequest } from "./actions";

export function Weather() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const getWeather = useCallback(() => {
    dispatch(getWeatherRequest(value));
  }, [dispatch, value]);

  const data = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.errorMessage);
  //   const { data, loading, errorMessage } = useSelector((state) => state.weather);

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChangeText={setValue} />
        <Button onclick={getWeather}>{loading ? "Loading" : "Find"}</Button>
      </form>
      {error ? <p style={{ color: "red" }}></p> : null}
      <Table>
        {data.map((row) => (
          <TableRow data={row} />
        ))}
      </Table>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
