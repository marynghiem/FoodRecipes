import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AppetizerContainer = styled.div`
  height: max-content;
  width: 100vw;
  padding-bottom: 30px;
  background-color: #cfebfd;
`;

const AppetizerItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppetizerWhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
`;

export const Appetizers = () => {
  const url = "/food_type_results?mealtype=appetizer";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);
  return (
    <AppetizerContainer>
      <AppetizerItemContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <AppetizerWhiteContainer>
              <img src={result.image} alt={result.title}></img>
              <div>{result.title}</div>
              <a href={`/mealRecipeByID?mealId=${result.id}`}>
                <button>Get Recipe</button>
              </a>
            </AppetizerWhiteContainer>
          ))}
      </AppetizerItemContainer>
    </AppetizerContainer>
  );
};
