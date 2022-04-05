import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FoodJokesContainer = styled.div`
  background-color: rgb(236, 235, 235);
  width: 260px;
  height: max-content;
  vertical-align: top;
  margin-right: 23px;
  margin-top: 10px;
  border: solid #000;
  border-width: 2px;
  font-family: Didot, serif;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;
const FoodJokesTitle = styled.h3`
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

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
