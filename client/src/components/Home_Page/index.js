import React from "react";
import styled from "styled-components";
import { FoodCarousel } from "../FoodCarousel";
import { AboutUs } from "./AboutUs";
import { FetchingStuff } from "./FetchingStuff";
import { FoodJokes } from "./FoodJokes";
import { PicksOfThisWeek } from "./PicksOfThisWeek";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const HomePage = () => {
  return (
    <>
      <FoodCarousel />
      <AboutUs />
      <Container>
        <FetchingStuff />
        <RightContainer>
          <FoodJokes />
          <PicksOfThisWeek />
        </RightContainer>
      </Container>
    </>
  );
};
