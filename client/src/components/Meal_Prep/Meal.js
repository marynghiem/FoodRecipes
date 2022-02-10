import React, { useEffect, useState } from "react";

export const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  const url = `/mealplan_recipes?meal_id=${meal.id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.image))
      .catch((exception) => console.error(exception));
  }, [meal.id]);

  return (
    <article className="mealPlanArticle">
      <h1 className="mealplanTitle">{meal.title}</h1>
      <img src={imageUrl} alt="recipe" className="mealPlanImage" />
      <ul className="mealPlanInstructions">
        <li className="noBulletPoint"> Preparation time: {meal.readyInMinutes} minutes</li>
        <li className="noBulletPoint"> Number of servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl} className="mealPlanLink">
        {" "}
        Go to Recipe
      </a>
    </article>
  );
};
