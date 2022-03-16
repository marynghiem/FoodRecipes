import React from "react";
import styled from "styled-components";
import { AboutUs } from "./AboutUs";
import { FetchingStuff } from "./FetchingStuff";
import { FoodJokes } from "./FoodJokes";

export const HomePage = () => {
  return (
    <>
      <AboutUs />
      <FetchingStuff />
    </>
  );
};
