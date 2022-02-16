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
        <div>Choose from popular ingredients:</div>
        <div className="ingredientsContainer">
          <div className="individualIngredientContainer">
            <img src="carrots.jpeg" alt="carrots" className="smallIngredientsPicture" />
            <div className="ingredient">Carrots</div>
          </div>
          <div className="individualIngredientContainer">
            <img src="pasta.jpeg" alt="pasta" className="smallIngredientsPicture" />
            <div className="ingredient">Pasta</div>
          </div>
          <div className="individualIngredientContainer">
            <img src="chicken.jpeg" alt="chicken" className="smallIngredientsPicture" />
            <div className="ingredient">Chicken</div>
          </div>
          <div className="individualIngredientContainer">
            <img src="apples.jpeg" alt="apples" className="smallIngredientsPicture" />
            <div className="ingredient">Apples</div>
          </div>
          <div className="individualIngredientContainer">
            <img src="salmon.jpeg" alt="salmon" className="smallIngredientsPicture" />
            <div className="ingredient">Salmon</div>
          </div>
        </div>
        <div>Or enter an ingredient:</div>
        <section className="mealIngredientControls">
          <input placeholder="e.g" onChange={handleMealIngredientsChange} value={currentMealIngredient}></input>
        </section>
        <button onClick={addMealIngredients}>Add Ingredient</button>
        <button onClick={getMealByIngredientsData}>Get Dinner</button>
        {mealByIngredientsData?.length > 0 &&
          mealByIngredientsData.map((data) => (
            <div className="ingredientDataResultsContainer">
              <img src={data.image} alt={data.title} className="ingredientDataResultsImage"></img>
              <div className="ingredientDataResultsTitle">{data.title}</div>
            </div>
          ))}
        <div>{JSON.stringify(mealByIngredientsData)}</div>
      </div>
    </div>
  );
};
