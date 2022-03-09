import React from "react";
import styled from "styled-components";

const MarysTopDinnerContainer = styled.div`
  background-image: url("marysFavoriteDinnerBackground.jpeg");
  height: 130vh;
`;

const MarysTopDinnerTitle = styled.h3`
  margin-top: 0px;
`;

const MARYS_TOP_DINNER_CHOICES = [
  {
    id: 640117,
    title: "Corn-Crusted Fish Tacos With Jalapeno-Lime Sauce and Spicy Black Beans",
    image: "https://spoonacular.com/recipeImages/640117-312x231.jpg",
  },
  {
    id: 715594,
    title: "Homemade Garlic and Basil French Fries",
    image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
  },
  {
    id: 633824,
    title: "Baked Stuffed Potatoes (Tandoori Potatoes)",
    image: "https://spoonacular.com/recipeImages/633824-312x231.jpg",
  },
  { id: 633766, title: "Baked Rigatoni", image: "https://spoonacular.com/recipeImages/633766-312x231.jpg" },
  {
    id: 661188,
    title: "Spicy Seasoned Loaded Guacamole",
    image: "https://spoonacular.com/recipeImages/661188-312x231.jpg",
  },
  { id: 650789, title: "Mango Guacamole", image: "https://spoonacular.com/recipeImages/650789-312x231.jpg" },
  { id: 640062, title: "Corn Avocado Salsa", image: "https://spoonacular.com/recipeImages/640062-312x231.jpg" },
  { id: 716311, title: "Mango Fried Rice", image: "https://spoonacular.com/recipeImages/716311-312x231.jpg" },
  {
    id: 716217,
    title: "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)",
    image: "https://spoonacular.com/recipeImages/716217-312x231.jpg",
  },
  {
    id: 715560,
    title: "World’s Greatest Lasagna Roll Ups",
    image: "https://spoonacular.com/recipeImages/715560-312x231.jpg",
  },
];

export const MarysTopDinner = () => {
  return (
    <MarysTopDinnerContainer>
      <MarysTopDinnerTitle>Mary's Top Dinner Choices</MarysTopDinnerTitle>
      {MARYS_TOP_DINNER_CHOICES.map((dinner) => (
        <img src={dinner.image} alt="food" />
      ))}
    </MarysTopDinnerContainer>
  );
};
