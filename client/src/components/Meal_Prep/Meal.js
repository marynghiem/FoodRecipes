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
    <article>
      {meal.title}
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li> Preparation time: {meal.readyInMinutes} minutes</li>
        <li> Number of servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}> Go to Recipe</a>
    </article>
  );
};
