import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const RecipeByIDContainer = styled.div`
  background-color: rgb(255, 225, 230);
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
`;
const FoodContainer = styled.div`
  height: 600px;
  width: 600px;
  margin: auto;
  background-color: white;
  border-radius: 15px;
`;

export const MealRecipeByID = () => {
  const [mealData, setMealData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mealId"));

  useEffect(() => {
    const url = `mealplan_recipes?meal_id=${searchParams.get("mealId")}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((exception) => console.log(exception));
  }, []);
  console.log(mealData);
  return (
    <RecipeByIDContainer>
      {mealData && (
        <FoodContainer>
          <div>{mealData.title}</div>
          <img src={mealData.image} alt={mealData.title} />
          <a href={mealData.sourceUrl}>{mealData.sourceUrl}</a>
        </FoodContainer>
      )}
    </RecipeByIDContainer>
  );
};
