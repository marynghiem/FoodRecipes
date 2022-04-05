import React from "react";
import styled from "styled-components";
import { AboutUs } from "./AboutUs";
import { FetchingStuff } from "./FetchingStuff";
import { FoodFact } from "./FoodFact";
import { FoodJokes } from "./FoodJokes";
import { PicksOfThisWeek } from "./PicksOfThisWeek";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePage = () => {
  return (
    <>
      <AboutUs />
      <Container>
        <FetchingStuff />
        <RightContainer>
          <FoodJokes />
          <PicksOfThisWeek />
          <FoodFact />
        </RightContainer>
      </Container>
    </>
  );
};
