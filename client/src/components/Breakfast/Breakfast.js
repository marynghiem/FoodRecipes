import styled from "styled-components";
import React, { useEffect, useState } from "react";

const BreakfastContainer = styled.div`
  background-color: rgb(255, 225, 230);
  height: 380vh;
  width: 100vw;
`;
const BreakfastItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
              <div className="dataResultsTitle">{result.title}</div>
              <a href={`/mealRecipeByID?mealId=${result.id}`}>
                <button>Get Recipe</button>
              </a>
            </BreakfastWhiteContainer>
          ))}
      </BreakfastItemContainer>
    </BreakfastContainer>
  );
};
