import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DessertContainer = styled.div`
  background-image: url("dessertBackground.jpeg");
  height: 300vh;
`;
const Container = styled.div`
  width: 1000px;
  background-color: white;
  margin: auto;
`;

const DessertItemContainer = styled.div`
  display: inline-block;
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
      <Container>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <DessertItemContainer>
              <img src={result.image} alt={result.title}></img>
              <div>{result.title}</div>
            </DessertItemContainer>
          ))}
      </Container>
    </DessertContainer>
  );
};
