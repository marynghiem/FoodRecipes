import styled from "styled-components";
import React, { useEffect, useState } from "react";

const BreakfastContainer = styled.div`
  background-color: rgb(255, 225, 230);
  height: 230vh;
  width: 100vw;
`;
const BreakfastItemContainer = styled.div`
  display: inline-block;
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
      {data?.results?.length > 0 &&
        data.results.map((result) => (
          <BreakfastItemContainer>
            <img src={result.image} alt={result.title}></img>
            <div className="dataResultsTitle">{result.title}</div>
          </BreakfastItemContainer>
        ))}
    </BreakfastContainer>
  );
};
