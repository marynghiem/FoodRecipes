import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SideDishContainer = styled.div`
  height: max-content;
  width: 100vw;
  padding-bottom: 30px;
  background-color: #cfebfd;
`;

const SideDishItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const SideDishWhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
`;
const SideDishButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: #91bad6;
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

export const SideDish = () => {
  const url = "/food_type_results?mealtype=side dish";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);
  return (
    <SideDishContainer>
      <SideDishItemContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <SideDishWhiteContainer>
              <img src={result.image} alt={result.title}></img>
              <div>{result.title}</div>
              <a href={`/mealRecipeByID?mealId=${result.id}`}>
                <SideDishButton>Get Recipe</SideDishButton>
              </a>
            </SideDishWhiteContainer>
          ))}
      </SideDishItemContainer>
    </SideDishContainer>
  );
};
