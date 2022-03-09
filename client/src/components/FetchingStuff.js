import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DataResultsContainer = styled.div`
  width: 78vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
`;
const DataResultsIndividualContainer = styled.div`
  display: inline-block;
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
    <div>
      <DataResultsContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <DataResultsWhiteContainer>
              <DataResultsIndividualContainer>
                <img src={result.image} alt={result.title} />
                <div className="dataResultsTitle">{result.title}</div>
              </DataResultsIndividualContainer>
            </DataResultsWhiteContainer>
          ))}
      </DataResultsContainer>
    </div>
  );
};
