import React from "react";
import styled from "styled-components";

const MarysTopBreakfastContainer = styled.div`
  background-color: #dcd0ff;
  height: max-content;
  width: 100vw;
  padding-bottom: 30px;
`;
const Title = styled.h2`
  margin-top: 0px;
  padding-top: 20px;
`;
const FoodItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const TopBreakfastWhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
  font-family: Garamond, serif;
`;
const TopBreakfastButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: #9794f9;
  color: white;
  border: none;
  font-family: Garamond, serif;
  font-size: 16px;
  box-shadow: 2px 2px 2px grey;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 5px;
`;

const MARYS_FAVE_BREAKFAST = [
  {
    id: 648339,
    title: "Jalapeno Cheese Quick Bread",
    image: "https://spoonacular.com/recipeImages/648339-312x231.jpg",
  },
  { id: 638936, title: "Chocolate Chip Muffins", image: "https://spoonacular.com/recipeImages/638936-312x231.jpg" },
  {
    id: 646443,
    title: "Healthy Blueberry Lemon Pancakes",
    image: "https://spoonacular.com/recipeImages/646443-312x231.jpg",
  },
  {
    id: 663834,
    title: "Triple Chocolate Vegan Banana Bread",
    image: "https://spoonacular.com/recipeImages/663834-312x231.jpg",
  },
  { id: 1095931, title: "Matcha Smoothie", image: "https://spoonacular.com/recipeImages/1095931-312x231.jpg" },
  {
    id: 655239,
    title: "Peanut Butter Banana French Toast",
    image: "https://spoonacular.com/recipeImages/655239-312x231.jpg",
  },
  {
    id: 650485,
    title: "Luscious Orange Cardamom Smoothie",
    image: "https://spoonacular.com/recipeImages/650485-312x231.jpg",
  },
  { id: 639594, title: "Classic Eggs Benedict", image: "https://spoonacular.com/recipeImages/639594-312x231.jpg" },
  { id: 644045, title: "Fruity Yogurt Parfait", image: "https://spoonacular.com/recipeImages/644045-312x231.jpg" },
];
export const MarysTopBreakfast = () => {
  return (
    <MarysTopBreakfastContainer>
      <Title>Mary's Top Breakfast</Title>
      <FoodItemsContainer>
        {MARYS_FAVE_BREAKFAST.map((breakfast) => (
          <TopBreakfastWhiteContainer>
            <img src={breakfast.image} alt={breakfast.title}></img>
            <div>{breakfast.title}</div>
            <a href={`/mealRecipeByID?mealId=${breakfast.id}`}>
              <TopBreakfastButton>Get Recipe</TopBreakfastButton>
            </a>
          </TopBreakfastWhiteContainer>
        ))}
      </FoodItemsContainer>
    </MarysTopBreakfastContainer>
  );
};
