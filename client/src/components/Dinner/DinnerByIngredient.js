import React, { useState } from "react";
import "../../css/Dinner/DinnerByIngredient.css";

export const DinnerByIngredient = () => {
  const [dinnerData, setDinnerDat] = useState();
  const [dinnerIngredients, setDinnerIngredients] = useState([]);
  const [currentDinnerIngredient, setCurrentDinnerIngredient] = useState("");

  const handleDinnerIngredientsChange = (e) => {
    setCurrentDinnerIngredient(e.target.value);
  };

  const addDinnerIngredients = () => {
    setDinnerIngredients([...dinnerIngredients, currentDinnerIngredient]);
    setCurrentDinnerIngredient("");
  };

  console.log(currentDinnerIngredient);
  console.log(dinnerIngredients);

  return (
    <div className="dinnerByIngredientContainer">
      <div>Enter Ingredient</div>
      <section className="dinnerIngredientControls">
        <input placeholder="e.g" onChange={handleDinnerIngredientsChange} value={currentDinnerIngredient}></input>
      </section>
      <button onClick={addDinnerIngredients}>Get Dinner</button>
    </div>
  );
};
