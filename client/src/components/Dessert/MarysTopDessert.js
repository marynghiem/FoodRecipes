import React from "react";

const MARYS_FAVE_DESSERT = [
  {
    id: 664311,
    title: "Vanilla Cream Cakes, Easy and Fluffy Holiday Cakes",
    image: "https://spoonacular.com/recipeImages/664311-312x231.jpg",
  },
  {
    id: 665178,
    title: "White chocolate cupcakes with pineapple",
    image: "https://spoonacular.com/recipeImages/665178-312x231.jpg",
  },
  {
    id: 633139,
    title: "Avocado Chocolate Bits Frozen Yogurt",
    image: "https://spoonacular.com/recipeImages/633139-312x231.jpg",
  },
  {
    id: 641435,
    title: "Dessert Apple Rings With Cinnamon Cream Syrup",
    image: "https://spoonacular.com/recipeImages/641435-312x231.jpg",
  },
  {
    id: 635743,
    title: "Bournvita Marshmallow Cookies",
    image: "https://spoonacular.com/recipeImages/635743-312x231.jpg",
  },
  {
    id: 715569,
    title: "Strawberry Cheesecake Chocolate Crepes",
    image: "https://spoonacular.com/recipeImages/715569-312x231.jpg",
  },
  {
    id: 643244,
    title: "Four-Ingredient Blueberry Frozen Yogurt",
    image: "https://spoonacular.com/recipeImages/643244-312x231.jpg",
  },
  {
    id: 636766,
    title: "Cake with lemon, rosewater and pistachios",
    image: "https://spoonacular.com/recipeImages/636766-312x231.jpg",
  },
  {
    id: 1096170,
    title: "Fruit and Yogurt Parfait Breakfast Tart",
    image: "https://spoonacular.com/recipeImages/1096170-312x231.jpg",
  },
];
export const MarysTopDessert = () => {
  return (
    <div>
      {MARYS_FAVE_DESSERT.map((dessert) => (
        <img src={dessert.image} alt="food" />
      ))}
    </div>
  );
};
