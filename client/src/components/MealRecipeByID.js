import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const MealRecipeByID = ({ meal }) => {
  const [mealData, setMealData] = useState("");

  useEffect(() => {
    const url = `mealplan_recipes?meal_id=${meal.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((exception) => console.log(exception));
  }, [meal.id]);

  return <div></div>;
};
