import React, { useState } from "react";
import { MealList } from "./MealList";

export const CalorieIntake = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getMealData = () => {
    const url = `/mealplan_calories?calories=${calories}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((exception) => console.error(exception));
  }; //problem with passing state from front to back end
  return (
    <div className="calorieIntakeContainer">
      <section className="controls"></section>
      <input type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange} />
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
};
