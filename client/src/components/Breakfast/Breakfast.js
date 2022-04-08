import styled from "styled-components";
import React, { useEffect, useState } from "react";

const BreakfastContainer = styled.div`
  background-color: rgb(255, 225, 230);
  height: max-content;
  width: 100vw;
`;
const BreakfastItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Garamond, serif;
`;
const BreakfastWhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
`;

const BreakfastButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: pink;
  color: white;
  border: none;
  font-family: Garamond, serif;
  font-size: 16px;
  box-shadow: 2px 2px 2px grey;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Breakfast = () => {
  const url = `/food_type_results?mealtype=breakfast`;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <BreakfastContainer>
      <BreakfastItemContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <BreakfastWhiteContainer>
              <img src={result.image} alt={result.title}></img>
              <div>{result.title}</div>
              <a href={`/mealRecipeByID?mealId=${result.id}`}>
                <BreakfastButton>Get Recipe</BreakfastButton>
              </a>
            </BreakfastWhiteContainer>
          ))}
      </BreakfastItemContainer>
    </BreakfastContainer>
  );
};
