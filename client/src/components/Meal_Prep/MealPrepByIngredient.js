import React, { useState } from "react";
import "../../css/MealPrep/MealPrepByIngredient.css";

export const MealPrepByIngredient = () => {
  const [mealByIngredientsData, setMealByIngredientsData] = useState();
  const [mealIngredients, setMealIngredients] = useState([]);
  const [currentMealIngredient, setCurrentMealIngredient] = useState("");

  const handleMealIngredientsChange = (e) => {
    setCurrentMealIngredient(e.target.value);
  };

  const addMealIngredients = () => {
    setMealIngredients([...mealIngredients, currentMealIngredient]);
    setCurrentMealIngredient("");
  };

  const getMealByIngredientsData = () => {
    const url = `/mealplan_ingredients?mealIngredients=${mealIngredients[0]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealByIngredientsData(data))
      .catch((exception) => console.error(exception));
  };

  console.log(currentMealIngredient);
  console.log(mealIngredients);

  return (
    <div className="mealByIngredientContainer">
      <div className="mealByIngredientWhiteContainer">
        <div>Enter Ingredient</div>
        <section className="mealIngredientControls">
          <input placeholder="e.g" onChange={handleMealIngredientsChange} value={currentMealIngredient}></input>
        </section>
        <button onClick={addMealIngredients}>Add Ingredient</button>
        <button onClick={getMealByIngredientsData}>Get Dinner</button>
      </div>
    </div>
  );
};
