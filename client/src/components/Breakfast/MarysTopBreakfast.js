import React from "react";
import styled from "styled-components";

const MarysTopBreakfastContainer = styled.div`
  background-color: #dcd0ff;
  height: 130vh;
  width: 100vw;
`;
const Title = styled.h2`
  margin-top: 0px;
  padding-top: 20px;
`;

export const MarysTopBreakfast = () => {
  return (
    <MarysTopBreakfastContainer>
      <Title>Mary's Top 10 Breakfast</Title>
    </MarysTopBreakfastContainer>
  );
};
