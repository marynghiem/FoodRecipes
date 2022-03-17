import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FoodJokesContainer = styled.div`
  background-color: rgb(236, 235, 235);
  width: 300px;
  height: 16rem;
  display: flex;
  flex-direction: column;
  order: 2;
  vertical-align: top;
  margin-right: 23px;
  margin-top: 10px;
  border: solid #000;
  border-width: 2px;
  font-family: Didot, serif;
`;
const FoodJokesTitle = styled.h3``;

export const FoodJokes = () => {
  const [foodJokes, setFoodJokes] = useState();
  const url = "/meal_jokes";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFoodJokes(data))
      .catch((exception) => console.error(exception));
  }, []);
  return (
    <FoodJokesContainer>
      <FoodJokesTitle>Food Jokes</FoodJokesTitle>
      <p>{foodJokes && foodJokes.text}</p>
    </FoodJokesContainer>
  );
};
