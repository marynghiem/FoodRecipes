import React from "react";
import { Meal } from "./Meal";

export const MealList = ({ mealData }) => {
  //ask jo why that is in brackets
  const nutrients = mealData.nutrients;
  return (
    <main className="mealListMain">
      <section className="nutrients">
        <h1>Macros</h1>
        <ul className="nutrientsListItem">
          <li className="noBulletPoint">Calories: {nutrients.calories.toFixed(0)}</li>
          <li className="noBulletPoint">Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li className="noBulletPoint">Fat: {nutrients.fat.toFixed(0)}</li>
          <li className="noBulletPoint">Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>
      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
};
