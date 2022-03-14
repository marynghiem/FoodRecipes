import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

const DessertContainer = styled.div`
  background-image: url("dessertBackground.jpeg");
  height: 400vh;
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
                <button>Get Recipe</button>
              </a>
            </DessertItemContainer>
          ))}
      </FoodItemsContainer>
    </DessertContainer>
  );
};
