import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainCourseContainer = styled.div`
  height: 380vh;
  width: 100vw;
  background-color: #dbf3fa;
`;

const MainCourseItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const MainCourseWhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 10px;
  max-width: 18rem;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
  background-color: #fefefe;
`;

export const MainCourse = () => {
  const url = `/food_type_results?mealtype=main course`;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <MainCourseContainer>
      <MainCourseItemContainer>
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <MainCourseWhiteContainer>
              <img src={result.image} alt={result.title}></img>
              <div>{result.title}</div>
            </MainCourseWhiteContainer>
          ))}
      </MainCourseItemContainer>
    </MainCourseContainer>
  );
};
