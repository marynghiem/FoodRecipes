import React from "react";
import styled from "styled-components";

const PicksOfThisWeekContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 20px;
  text-align: left;
`;
const TitleContainer = styled.div`
  font-weight: bold;
  border-bottom: 1px solid;
  font-size: 14px;
  padding-bottom: 15px;
`;
const FoodContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const MarysWeeklyPickLinks = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MARYS_TOP_PICKS_OF_THE_WEEK = [
  {
    id: 715569,
    title: "Strawberry Cheesecake Chocolate Crepes",
    image: "https://spoonacular.com/recipeImages/715569-312x231.jpg",
  },
  {
    id: 664311,
    title: "Vanilla Cream Cakes, Easy and Fluffy Holiday Cakes",
    image: "https://spoonacular.com/recipeImages/664311-312x231.jpg",
  },
  {
    id: 663834,
    title: "Triple Chocolate Vegan Banana Bread",
    image: "https://spoonacular.com/recipeImages/663834-312x231.jpg",
  },
  {
    id: 715594,
    title: "Homemade Garlic and Basil French Fries",
    image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
  },
];

export const PicksOfThisWeek = () => {
  return (
    <PicksOfThisWeekContainer>
      <TitleContainer>MARYS TOP PICK OF THIS WEEK</TitleContainer>
      <FoodContainer>
        <MarysWeeklyPickLinks href={`/mealRecipeByID?mealId=${MARYS_TOP_PICKS_OF_THE_WEEK[0].id}`}>
          {MARYS_TOP_PICKS_OF_THE_WEEK[0].title}
        </MarysWeeklyPickLinks>
      </FoodContainer>
      <FoodContainer>
        <MarysWeeklyPickLinks href={`/mealRecipeByID?mealId=${MARYS_TOP_PICKS_OF_THE_WEEK[1].id}`}>
          {MARYS_TOP_PICKS_OF_THE_WEEK[1].title}
        </MarysWeeklyPickLinks>
      </FoodContainer>
      <FoodContainer>
        <MarysWeeklyPickLinks href={`/mealRecipeByID?mealId=${MARYS_TOP_PICKS_OF_THE_WEEK[2].id}`}>
          {MARYS_TOP_PICKS_OF_THE_WEEK[2].title}
        </MarysWeeklyPickLinks>
      </FoodContainer>
      <FoodContainer>
        <MarysWeeklyPickLinks href={`/mealRecipeByID?mealId=${MARYS_TOP_PICKS_OF_THE_WEEK[3].id}`}>
          {MARYS_TOP_PICKS_OF_THE_WEEK[3].title}
        </MarysWeeklyPickLinks>
      </FoodContainer>
    </PicksOfThisWeekContainer>
  );
};
