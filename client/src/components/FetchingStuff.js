import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DataResultsContainer = styled.div`
  width: 70vw;
`;
const DataResultsIndividualContainer = styled.div`
  display: inline-block;
`;

export const FetchingStuff = () => {
  // const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=<redacted>&query=pasta";
  const url = "/express_backend";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <div>
      <DataResultsContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <DataResultsIndividualContainer>
              <img src={result.image} alt={result.title} className="dataResultsImage"></img>
              <div className="dataResultsTitle">{result.title}</div>
            </DataResultsIndividualContainer>
          ))}
      </DataResultsContainer>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
