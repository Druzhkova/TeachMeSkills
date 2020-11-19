import React from "react";
import styled from "styled-components";

export function Table({ children }) {
  return (
    <StyledTable>
      <Thead>
        <Td>City</Td>
        <Td>Country</Td>
        <Td>t, C</Td>
        <Td>t, F</Td>
      </Thead>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border: 2px solid grey;
  border-spacing: unset;
  margin: 20px auto;
`;

const Td = styled.td`
  border: 1px solid grey;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  min-width: 120px;
  font-family: sans-serif;
  text-align: center;
`;

const Thead = styled.thead`
  font-size: 16px;
  font-weight: 700;
`;
