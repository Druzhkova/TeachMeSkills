import React from "react";
import styled from "styled-components";

export function TableRow({ data }) {
  const { city, country, temperature } = data;
  return (
    <Tr>
      <Td>{city}</Td>
      <Td>{country}</Td>
      <Td>{temperature}</Td>
      <Td>{temperature}</Td>
    </Tr>
  );
}

const Tr = styled.tr`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const Td = styled.tr`
  border: 1px solid grey;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  min-width: 120px;
  font-family: sans-serif;
  text-align: center;
`;
