import React from "react";
import styled from "styled-components";
import { AboutUs } from "./AboutUs";
import { FetchingStuff } from "./FetchingStuff";
import { FoodJokes } from "./FoodJokes";
import { PicksOfThisWeek } from "./PicksOfThisWeek";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HomePage = () => {
  return (
    <>
      <AboutUs />
      <Container>
        <FetchingStuff />
        <FoodJokes />
        <PicksOfThisWeek />
      </Container>
    </>
  );
};
