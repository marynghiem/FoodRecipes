import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DataResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: 1242px;
  height: max-content;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const DataResultsWhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
`;

const FoodTitles = styled.div`
  font-size: 18px;
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
`;

const FetchingStuffButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #7f21eb;
  color: #f3f3f3;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-top: 15px;
  vertical-align: middle;
`;
const Wrapper = styled.div`
  &:hover ${FetchingStuffButton} {
    cursor: pointer;
    background-color: #6a0fd3;
  }
`;

export const FetchingStuff = () => {
  const url = "/express_backend";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <DataResultsContainer>
      {data?.results?.length > 0 &&
        data.results.map((result) => (
          <DataResultsWhiteContainer>
            <img src={result.image} alt={result.title} />
            <FoodTitles className="dataResultsTitle">{result.title}</FoodTitles>
            <a href={`/mealRecipeByID?mealId=${result.id}`}>
              <Wrapper>
                <FetchingStuffButton>Get Recipe</FetchingStuffButton>
              </Wrapper>
            </a>
          </DataResultsWhiteContainer>
        ))}
    </DataResultsContainer>
  );
};
