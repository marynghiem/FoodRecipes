import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AppetizerContainer = styled.div`
  height: 200vh;
  width: 100vw;
  background-color: #cfebfd;
`;

const AppetizerItemContainer = styled.div`
  display: inline-block;
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
      {data?.results?.length > 0 &&
        data.results.map((result) => (
          <AppetizerItemContainer>
            <img src={result.image} alt={result.title}></img>
            <div>{result.title}</div>
          </AppetizerItemContainer>
        ))}
    </AppetizerContainer>
  );
};
