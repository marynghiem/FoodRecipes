import React, { useState } from "react";
import "../../css/MealPrep/MealPrepByIngredient.css";

const MAX_INGREDIENTS = 3;
export const MealPrepByIngredient = () => {
  const [mealByIngredientsData, setMealByIngredientsData] = useState();
  const [mealIngredients, setMealIngredients] = useState([]);
  const [currentMealIngredient, setCurrentMealIngredient] = useState("");

  const handleMealIngredientsChange = (e) => {
    setCurrentMealIngredient(e.target.value);
  };

  const addMealIngredients = () => {
    if (!mealIngredients.includes(currentMealIngredient) && mealIngredients.length < MAX_INGREDIENTS) {
      setMealIngredients([...mealIngredients, currentMealIngredient]);
      setCurrentMealIngredient("");
    }
  };

  const removeMealIngredient = (targetIndex) => {
    setMealIngredients((prev) => {
      return prev.filter((mealIngredient, index) => index !== targetIndex);
    });
  };

  const getMealByIngredientsData = () => {
    const url = `/mealplan_ingredients?mealIngredients=${mealIngredients[0]}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealByIngredientsData(data))
      .catch((exception) => console.error(exception));
  };

  const addPopularIngredient = (popularIngredient) => {
    if (!mealIngredients.includes(popularIngredient) && mealIngredients.length < MAX_INGREDIENTS) {
      setMealIngredients([...mealIngredients, popularIngredient]);
    }
  };

  console.log(currentMealIngredient);
  console.log(mealIngredients);

  return (
    <div className="mealByIngredientContainer">
      <div className="mealByIngredientWhiteContainer">
        <div>Choose from popular ingredients:</div>
        <div className="ingredientsContainer">
          <div className="individualIngredientContainer">
            <img
              src="carrots.jpeg"
              alt="carrots"
              className="smallIngredientsPicture"
              onClick={() => addPopularIngredient("carrots")}
            />
            <div className="ingredient">Carrots</div>
          </div>
          <div className="individualIngredientContainer">
            <img
              src="pasta.jpeg"
              alt="pasta"
              className="smallIngredientsPicture"
              onClick={() => addPopularIngredient("pasta")}
            />
            <div className="ingredient">Pasta</div>
          </div>
          <div className="individualIngredientContainer">
            <img
              src="chicken.jpeg"
              alt="chicken"
              className="smallIngredientsPicture"
              onClick={() => addPopularIngredient("chicken")}
            />
            <div className="ingredient">Chicken</div>
          </div>
          <div className="individualIngredientContainer">
            <img
              src="apples.jpeg"
              alt="apples"
              className="smallIngredientsPicture"
              onClick={() => addPopularIngredient("apples")}
            />
            <div className="ingredient">Apples</div>
          </div>
          <div className="individualIngredientContainer">
            <img
              src="salmon.jpeg"
              alt="salmon"
              className="smallIngredientsPicture"
              onClick={() => addPopularIngredient("salmon")}
            />
            <div className="ingredient">Salmon</div>
          </div>
        </div>
        <div>Or enter an ingredient:</div>
        <section className="mealIngredientControls">
          <input placeholder="e.g" onChange={handleMealIngredientsChange} value={currentMealIngredient}></input>
        </section>

        <button onClick={addMealIngredients}>Add Ingredient</button>
        <button onClick={getMealByIngredientsData}>Get Dinner</button>
        <div className="dottedAllIngredientsContainer">
          <div className="dottedIngredientContainer">
            <div className="chosenIngredient">{mealIngredients[0]}</div>
            <span className="deleteMealIngredient" onClick={() => removeMealIngredient(0)}>
              &times;
            </span>
          </div>

          <div className="dottedIngredientContainer">
            <div className="chosenIngredient">{mealIngredients[1]}</div>
            <span className="deleteMealIngredient" onClick={() => removeMealIngredient(1)}>
              &times;
            </span>
          </div>
          <div className="dottedIngredientContainer">
            <div className="chosenIngredient"> {mealIngredients[2]}</div>
            <span className="deleteMealIngredient" onClick={() => removeMealIngredient(2)}>
              &times;
            </span>
          </div>
        </div>
      </div>
      <div className="mealByIngredientsResultsWholeContainer">
        {mealByIngredientsData?.length > 0 &&
          mealByIngredientsData.map((data) => (
            <div className="ingredientDataResultsContainer">
              <img src={data.image} alt={data.title} className="ingredientDataResultsImage"></img>
              <div className="ingredientDataResultsTitle">{data.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
