import React from "react";
import styled from "styled-components";

export const DetailsPage = ({ data, onGoBackPress }) => {
  const { image, ingredients, label } = data;

  const renderIngredient = ({ text, weight, image: ingredientImage }) => {
    return (
      <IngredientContainer>
        <IngredientImage src={ingredientImage} />
        <IngredientTitle>{`${text}: ${weight}`}</IngredientTitle>
      </IngredientContainer>
    );
  };

  return (
    <Container>
      <div>
        <GoBackButton onClick={onGoBackPress}>&#8592;</GoBackButton>
        <Title>{label}</Title>
      </div>
      <Image src={image} alt="" />
      {ingredients.map(renderIngredient)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-atems: center;
  max-width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 0;
`;

const GoBackButton = styled.span`
  font-size: 34px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
`;

const IngredientContainer = styled.div`
  display: flex;
  align-atems: center;
  margin-bottom: 15px;
`;

const IngredientTitle = styled.p`
  margin: 0;
`;

const IngredientImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
