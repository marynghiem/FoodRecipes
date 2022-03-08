import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainCourseContainer = styled.div`
  height: 250vh;
  width: 100vw;
  background-color: #dbf3fa;
`;

const MainCourseItemContainer = styled.div`
  display: inline-block;
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
      {data?.results?.length > 0 &&
        data.results.map((result) => (
          <MainCourseItemContainer>
            <img src={result.image} alt={result.title}></img>
            <div>{result.title}</div>
          </MainCourseItemContainer>
        ))}
    </MainCourseContainer>
  );
};
