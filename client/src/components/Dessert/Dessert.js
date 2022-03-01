import React from "react";
import styled from "styled-components";

const DessertContainer = styled.div`
  background-image: url("dessertBackground.jpeg");
  height: 130vh;
`;
const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;

export const Dessert = () => {
  return (
    <DessertContainer>
      <Container />
    </DessertContainer>
  );
};
