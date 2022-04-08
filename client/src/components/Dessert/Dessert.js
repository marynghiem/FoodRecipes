import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DessertContainer = styled.div`
  background-image: url("dessertBackground.jpeg");
  height: max-content;
  width: 100vw;
  padding-bottom: 30px;
`;
const FoodItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const DessertItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
`;
const DessertsButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: #bebebe;
  color: white;
  border: none;
  font-family: Garamond, serif;
  font-size: 16px;
  box-shadow: 2px 2px 2px grey;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Dessert = () => {
  const url = "/food_type_results?mealtype=dessert";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <DessertContainer>
      <FoodItemsContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <DessertItemContainer>
              <img src={result.image} alt={result.title}></img>
              <div>{result.title}</div>
              <a href={`/mealRecipeByID?mealId=${result.id}`}>
                <DessertsButton>Get Recipe</DessertsButton>
              </a>
            </DessertItemContainer>
          ))}
      </FoodItemsContainer>
    </DessertContainer>
  );
};
