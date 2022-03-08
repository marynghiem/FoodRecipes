import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SideDishContainer = styled.div`
  height: 250vh;
  width: 100vw;
  background-color: #cfebfd;
`;

const SideDishItemContainer = styled.div`
  display: inline-block;
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
      {data?.results?.length > 0 &&
        data.results.map((result) => (
          <SideDishItemContainer>
            <img src={result.image} alt={result.title}></img>
            <div>{result.title}</div>
          </SideDishItemContainer>
        ))}
    </SideDishContainer>
  );
};
