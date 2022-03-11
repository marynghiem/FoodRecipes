import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//import styled from "styled-components";

export const MealRecipeByID = () => {
  const [mealData, setMealData] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mealId"));
  useEffect(() => {
    const url = `mealplan_recipes?meal_id=${searchParams.get("mealId")}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((exception) => console.log(exception));
  }, []);

  return <div></div>;
};
