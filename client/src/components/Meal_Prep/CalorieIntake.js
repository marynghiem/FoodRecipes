import React, { useState } from "react";
import { MealList } from "./MealList";
import "../../css/MealPrep/CalorieIntake.css";

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
  };
  return (
    <div className="calorieIntakeContainer">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          className="calorieNumberInput"
        />
      </section>
      <button onClick={getMealData} className="calorieIntakeButton">
        Get Daily Meal Plan
      </button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
};
