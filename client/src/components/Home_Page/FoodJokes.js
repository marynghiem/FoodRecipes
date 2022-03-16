import React from "react";
import styled from "styled-components";

const FoodJokesContainer = styled.div`
  background-color: rgb(236, 235, 235);
  width: 300px;
  height: 500px;
  display: flex;
  order: 2;
  vertical-align: top;
  margin-right: 23px;
  margin-top: 10px;
  border: solid #000;
  border-width: 2px;
  font-family: Didot, serif;
`;

export const FoodJokes = () => {
  return <FoodJokesContainer></FoodJokesContainer>;
};
