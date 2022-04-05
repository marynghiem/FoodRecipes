import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const FoodFact = () => {
  const url = "/meal_facts";
  const [foodFact, setFoodFact] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFoodFact(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <div>
      <p>Food fact{foodFact && foodFact.text}</p>
    </div>
  );
};
