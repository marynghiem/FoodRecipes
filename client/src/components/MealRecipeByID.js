import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const MealRecipeByID = ({ id }) => {
  const [mealData, setMealData] = useState("");
  // need to figure out how to pass meal as prop from mealprepbyingredients.js
  useEffect(() => {
    const url = `mealplan_recipes?meal_id=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((exception) => console.log(exception));
  }, [id]);

  return <div></div>;
};
