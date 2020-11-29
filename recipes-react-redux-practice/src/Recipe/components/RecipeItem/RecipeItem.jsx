import React from "react";
import styled from "styled-components";

export const RecipeItem = ({ image, title, healthLabels }) => {
  return (
    <Container>
      <Image src={image} />
      <TextContainer>
        <h3>{title}</h3>
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
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
  height: 100%;
`;
