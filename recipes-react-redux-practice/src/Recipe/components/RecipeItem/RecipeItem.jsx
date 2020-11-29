import React, { useCallback } from "react";
import styled from "styled-components";

export const RecipeItem = ({ data, onclick }) => {
  const { image, label, healthLabels } = data;
  const onClickHandler = useCallback(() => {
    onclick(data);
  }, [onclick, data]);

  return (
    <Container onClick={onClickHandler}>
      <Image src={image} />
      <TextContainer>
        <h3>{label}</h3>
        <ol>
          {healthLabels.map((text) => (
            <li>{text}</li>
          ))}
        </ol>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 500px;
  border: 1px solid black;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
  height: 100%;
`;
