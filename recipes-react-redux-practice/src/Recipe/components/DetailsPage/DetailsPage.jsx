import React from "react";
import styled from "styled-components";

export const DetailsPage = ({ data }) => {
  const { image, ingredients, label } = data;

  const renderIngredient = ({ text, weight, image: ingredientImage }) => {
    return (
      <IngredientContainer>
        <IngredientTitle>{`${text}: ${weight}`}</IngredientTitle>
        <IngredientImage src={ingredientImage} />
      </IngredientContainer>
    );
  };

  
  return (
    <Container>
      <Title>{label}</Title>
      <Image src={image} alt="" />
      {ingredients.map(renderIngredient)}
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.h2``;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const IngredientContainer = styled.div``;

const IngredientTitle = styled.h3``;

const IngredientImage = styled.img`
  width: 50px;
  height: 50px;
`;
